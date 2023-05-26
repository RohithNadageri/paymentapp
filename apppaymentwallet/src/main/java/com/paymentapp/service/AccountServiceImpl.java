package com.paymentapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paymentapp.exception.BillPaymentNotFoundException;
import com.paymentapp.exception.InvalidInputException;
import com.paymentapp.model.BankAccount;
import com.paymentapp.model.Wallet;
import com.paymentapp.repositories.IAccountRepository;
import com.paymentapp.repositories.IWalletRepository;

@Service
public class AccountServiceImpl implements IAccountService {

	@Autowired
	IAccountRepository accountRepo;
	@Autowired
	IWalletRepository walletRepo;

	@Override
	public Wallet addAccount(BankAccount bacc) {
		Wallet w = bacc.getWallet();
		if (walletRepo.existsById(w.getWalletId()) && !accountRepo.existsById(bacc.getAccountNo())) {
			BankAccount newBank = accountRepo.save(bacc);
			return newBank.getWallet();
		} else
			throw new InvalidInputException("Wallet doesn't exsists or Account already exists");
	}

	@Override
	public String removeAccount(Integer accountNo) {
		boolean b = accountRepo.existsById(accountNo);
		if (!b)
			throw new InvalidInputException("Bank account with Accno " + accountNo + "not present");
		else {

			accountRepo.deleteById(accountNo);

			return "Account with " + accountNo + "is deleted";
		}
	}

	@Override
	public List<BankAccount> viewAllAccounts(int walletId) throws BillPaymentNotFoundException {
		List<BankAccount> list=accountRepo.viewAllAccounts(walletId);
		if(list.isEmpty()) {
			throw new BillPaymentNotFoundException("Not Found");
		}
		return list;
	}

}
