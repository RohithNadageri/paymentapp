package com.paymentapp.service;

import java.util.List;

import com.paymentapp.exception.BillPaymentNotFoundException;
import com.paymentapp.model.BankAccount;
import com.paymentapp.model.Wallet;

public interface IAccountService {
	public Wallet addAccount(BankAccount bacc);

	public String removeAccount(Integer accountNo);

	public List<BankAccount> viewAllAccounts(int walletId) throws BillPaymentNotFoundException ;
}
