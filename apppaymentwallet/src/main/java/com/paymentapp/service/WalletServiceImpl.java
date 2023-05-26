package com.paymentapp.service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paymentapp.exception.InsufficientBalanceException;
import com.paymentapp.exception.InvalidInputException;
import com.paymentapp.model.BankAccount;
import com.paymentapp.model.BeneficiaryDetails;
import com.paymentapp.model.BillPayment;
import com.paymentapp.model.Customer;
import com.paymentapp.model.Transaction;
import com.paymentapp.model.Wallet;
import com.paymentapp.repositories.IAccountRepository;
import com.paymentapp.repositories.IBeneficiaryRepository;
import com.paymentapp.repositories.IBillPaymentRepository;
import com.paymentapp.repositories.ITransactionRepository;
import com.paymentapp.repositories.IUserRepository;
import com.paymentapp.repositories.IWalletRepository;

@Service
public class WalletServiceImpl implements IWalletService {

	@Autowired
	IWalletRepository walletRepo;

	@Autowired
	IUserRepository userRepo;

	@Autowired
	IAccountRepository accountRepo;
	@Autowired
	ITransactionRepository transRepo;

	@Autowired
	IBeneficiaryRepository beneRepo;
	
	@Autowired
	IBillPaymentRepository billRepo;

	@Autowired
	Customer cus;

	@Autowired
	Wallet w;

	@Autowired
	Transaction newTrans;

	@Override
	public Customer createCustomer(Customer customer) {

		cus.setName(customer.getName());
		cus.setMobileNo(customer.getMobileNo());
		cus.setEmailid(customer.getEmailid());
		cus.setPassword(customer.getPassword());
		Wallet w1 = new Wallet();
//		w1= customer.getWallet();
		w1.setBalance(new BigDecimal(0.00));
		Wallet w = walletRepo.save(w1);
		cus.setWallet(w);
		userRepo.save(cus);
//		logger.info("Wallet created successfully with Wallet id --- "+wa.getWalletId());
		return cus;

	}

	@Override
	public Customer showBalance(String mobileno) {

		return userRepo.findById(mobileno).orElseThrow(() -> new InvalidInputException("Mobile number doesnot exist"));
	}

	@Override
	public String fundTransfer(String sourceMobileNo, String targetMobileNo, BigDecimal amount) {
		boolean s = userRepo.existsById(sourceMobileNo);
		boolean t = userRepo.existsById(targetMobileNo);
		double damount = amount.doubleValue();
		if (s && t) {
			Customer csrc = userRepo.findById(sourceMobileNo).get();

			Customer cdes = userRepo.findById(targetMobileNo).get();

			BankAccount src = accountRepo.findByWallet(csrc.getWallet());

			BankAccount dest = accountRepo.findByWallet(cdes.getWallet());
			if (src != null && dest != null) {
				if (src.getBalance() < damount) {
//		logger.warn("Insufficient balance in source account "+src.getBalance());
					throw new InsufficientBalanceException("Insufficient balance in source account");
				} else {
					dest.setBalance(dest.getBalance() + damount);
					src.setBalance(src.getBalance() - damount);
					accountRepo.save(src);
					accountRepo.save(dest);
					return "amount has been sent " + csrc.getName() + "to" + cdes.getName();
				}
			} else {
//		logger.warn("Bank Account not Available "+src+" "+dest);
				throw new InvalidInputException("Bank Account not Available");
			}
		} else {
			throw new InvalidInputException("Enter the correct mobile no details");
		}

	}

	@Override
	public Customer withdrawAmount(String mobileNo, BigDecimal amount) {
		boolean s = userRepo.existsById(mobileNo);
		if (!s) {
			throw new InvalidInputException("Enter Correct Mobile Number");
		} else {
			cus = userRepo.findById(mobileNo).get();
			w = cus.getWallet();
			BigDecimal bal = w.getBalance();
			if (bal.doubleValue() < amount.doubleValue()) {
				throw new InsufficientBalanceException("Insufficient balance");
			} else {
				w.setBalance(w.getBalance().subtract(amount));
				newTrans.setWallet(w);
				newTrans.setAmount(amount.doubleValue());
				newTrans.setDescription("amount " + amount + " is withdraw from customer with M_number is " + mobileNo);
				newTrans.setTransactionDate(LocalDate.now());
//				newTrans.setTransactionType("Bank To Wallet");
//				newTrans.setReciverMobileNo("Self");

				transRepo.save(newTrans);
				walletRepo.save(w);
				return cus;
			}
		}
	}

	@Override
	public Customer depositAmount(String mobileNo, BigDecimal amount) {
		boolean b = userRepo.findById(mobileNo).isPresent();

		if (!b)
			throw new InvalidInputException("Enter correct mobile number");
		else {
			cus = userRepo.findById(mobileNo).get();
			Wallet wallet = cus.getWallet();
			wallet.setBalance(amount.add(wallet.getBalance()));
			walletRepo.save(wallet);
			return cus;
		}

	}

	@Override
	public List<Customer> getList() {
		return userRepo.findAll();
	}

	@Override
	public Customer updateAccount(Customer customer) {
		Optional<Customer> cb = userRepo.findById(customer.getMobileNo());
		if (!cb.isPresent())
			throw new InvalidInputException("Enter the Correct Customer mobileNumber");
		else {
			cus = cb.get();
			cus.setName(customer.getName());
			cus.setEmailid(customer.getEmailid());
			cus.setPassword(customer.getPassword());
			userRepo.save(cus);
			return cus;
		}
	}

	@Override
	public Wallet addMoney(String mobileNo, double amount, Integer accountNo) {
		Customer cust = userRepo.findById(mobileNo).get();
		Wallet w1 = cust.getWallet();
		if (cust == null) {
		 throw new InvalidInputException("Enter the correct Mobile Number");
		 }
		List<BankAccount> banks = accountRepo.findAllBankAccountOfParticularCustomer(w1);
		//
		List<Integer> allAccountNo = new ArrayList<>();
		banks.forEach(bankNos -> allAccountNo.add(bankNos.getAccountNo()));
		if (!allAccountNo.contains(accountNo)) {
		throw new InvalidInputException("You does't have a bank account of with account number of "+ accountNo);
		}
		BankAccount bankAccount = accountRepo.findById(accountNo).get();
		newTrans.setWallet(w1);
		newTrans.setAmount(amount);
		newTrans.setDescription("amount " + amount + " is added to wallet from " + bankAccount.getBankName());
		newTrans.setTransactionDate(LocalDate.now());
		newTrans.setTransactionType("Future is Bright!");
		transRepo.save(newTrans);
		double bankBalance = bankAccount.getBalance();
		if (bankBalance < amount) {
		throw new InvalidInputException("Insufficient Balance found in Bank Accound");
		}
		double finalBankBalance = bankBalance - amount;
		bankAccount.setBalance(finalBankBalance);
		accountRepo.save(bankAccount);
		BigDecimal b1 = w1.getBalance();
		double b11 = b1.doubleValue();
		double total = b11 + amount;
		w1.setBalance(BigDecimal.valueOf(total));
		walletRepo.save(w1);
		return w1;
		}



	@Override
	public Customer loginCustomer(String mobileNo, String password) {
		Customer cust = userRepo.findCustomerByMobileNo(mobileNo);
		if (cust == null) {
			return null;
		}
		if (cust.getMobileNo().equals(mobileNo) && cust.getPassword().equals(password)) {
			return cust;
		}
		return null;
	}

	@Override
	public Customer customerById(String mobileNo) {
		Customer cust = userRepo.findCustomerByMobileNo(mobileNo);
//		System.out.println(cust);
		return cust;
	}

	@Override
	public List<Transaction> allTransaction(String mobileNo) {
		Customer cust = userRepo.findCustomerByMobileNo(mobileNo);
		if (cust == null) {
			return null;
		}
		Wallet wallet = cust.getWallet();
		Integer walletId = wallet.getWalletId();
		List<Transaction> trans = transRepo.findAllTransactionOfParticularCustomer(wallet);
//		System.out.println(trans);
		return trans;
	}

	@Override
	public List<BankAccount> allBankAccount(String mobileNo) {
		Customer cust = userRepo.findCustomerByMobileNo(mobileNo);
		if (cust == null) {
			return null;
		}
		Wallet wallet = cust.getWallet();
		List<BankAccount> banks = accountRepo.findAllBankAccountOfParticularCustomer(wallet);
		return banks;
	}

	@Override
	public List<BeneficiaryDetails> allBeneficiary(String mobileNo) {
		Customer cust = userRepo.findCustomerByMobileNo(mobileNo);
		if (cust == null) {
			return null;
		}
		Wallet wallet = cust.getWallet();
		List<BeneficiaryDetails> beneficiarys = beneRepo.findByWallet(wallet);
		return beneficiarys;
	}

	@Override
	public List<BillPayment> allBillPayment(String mobileNo) {
		Customer cust = userRepo.findCustomerByMobileNo(mobileNo);
		if (cust == null) {
			return null;
		}
		Wallet wallet = cust.getWallet();
		List<BillPayment> allBillPayment = billRepo.findByWallet(wallet);
		System.out.println(allBillPayment);
		
		return allBillPayment;
	}

}
