package com.paymentapp.service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paymentapp.exception.BillPaymentNotFoundException;
import com.paymentapp.exception.InvalidInputException;
import com.paymentapp.model.BillPayment;
import com.paymentapp.model.Customer;
import com.paymentapp.model.Transaction;
import com.paymentapp.model.Wallet;
import com.paymentapp.repositories.IBillPaymentRepository;
import com.paymentapp.repositories.ITransactionRepository;
import com.paymentapp.repositories.IUserRepository;
import com.paymentapp.repositories.IWalletRepository;

@Service
public class BillPaymentServiceImpl implements IBillPaymentService {

	@Autowired
	IBillPaymentRepository billPayRepo;

	@Autowired
	IWalletRepository walletRepo;
	
//	@Autowired
//	BillPayment bill;
	
	@Autowired
	IUserRepository userRepo;
	
	@Autowired
	ITransactionRepository transRepo;

	@Override
	public BillPayment addBillPayment(String mobileNo,BillPayment payment) {
	Customer cust = userRepo.findCustomerByMobileNo(mobileNo);
	if (cust==null) {
	throw new InvalidInputException("Sorry this "+mobileNo + " Mobile Number is not Register With Us");
	}
	BillPayment bill = new BillPayment();
	Wallet w1 = cust.getWallet();
	bill.setWallet(w1);
	bill.setBilltype(payment.getBilltype());
	bill.setAmount(payment.getAmount());
	bill.setPaymentDate(payment.getPaymentDate());
	BigDecimal amt = w1.getBalance();
	double amount = amt.doubleValue();
	if(amount<payment.getAmount()) {
	throw new InvalidInputException("Insufficient Balance in Your Wallet");
	}
	amount=amount-payment.getAmount();
	BigDecimal total =BigDecimal.valueOf(amount);
	w1.setBalance(total);
	walletRepo.save(w1);
	
	Transaction newTrans =new Transaction();
	newTrans.setWallet(w1);
	newTrans.setAmount(payment.getAmount());
	newTrans.setReciverName("Bill Payment");
	newTrans.setReciverMobileNo(payment.getBilltype());
	newTrans.setDescription("BillPayment of "+payment.getBilltype()+" Done Successfully");
	newTrans.setTransactionDate(LocalDate.now());
	newTrans.setTransactionType("Bill Payment");
	transRepo.save(newTrans);
	return billPayRepo.save(bill);
	}
	@Override
	public BillPayment viewBillPayment(int billId) {

		boolean b = billPayRepo.existsById(billId);
		if (!b) {
			throw new InvalidInputException("Bill Id doesnot exists");
		} else {
			return billPayRepo.findById(billId).get();
		}

	}

	@Override
	public List<BillPayment> allBillPayments() throws BillPaymentNotFoundException {
		List<BillPayment> allBills = billPayRepo.findAll();
		if(allBills.size()==0) {
			throw new BillPaymentNotFoundException("No BillPaymets in the List ");
		}
		return allBills;
	}
}
