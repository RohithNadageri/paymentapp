package com.paymentapp.service;

import java.math.BigDecimal;
import java.util.List;

import com.paymentapp.model.BankAccount;
import com.paymentapp.model.BeneficiaryDetails;
import com.paymentapp.model.BillPayment;
import com.paymentapp.model.Customer;
import com.paymentapp.model.Transaction;
import com.paymentapp.model.Wallet;

public interface IWalletService {
	
	public Customer createCustomer(Customer customer);
	public Customer showBalance (String mobileno);
	public String fundTransfer (String sourceMobileNo,String targetMobileNo, BigDecimal amount);
	public Customer depositAmount (String mobileNo,BigDecimal amount );
	public Customer withdrawAmount(String mobileNo, BigDecimal amount);
	public List<Customer> getList();
	public Customer updateAccount(Customer customer);
	public Wallet addMoney(String mobileNo, double amount,Integer accountNo);
	public Customer customerById(String mobileNo);
	public Customer loginCustomer(String mobileNo,String password);
	public List<Transaction> allTransaction(String mobileNo);
	public List<BankAccount> allBankAccount(String mobileNo);
	public List<BeneficiaryDetails> allBeneficiary(String mobileNo);
	public List<BillPayment> allBillPayment(String mobileNo);
}

