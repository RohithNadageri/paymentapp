package com.paymentapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.paymentapp.exception.BillPaymentNotFoundException;
import com.paymentapp.model.BankAccount;
import com.paymentapp.model.Wallet;
import com.paymentapp.service.IAccountService;

@RestController
@CrossOrigin
public class AccountController {
	@Autowired
	public IAccountService accountService;

	@PostMapping("/addAccount")
	public Wallet addAccount(@RequestBody BankAccount bacc) {
		return accountService.addAccount(bacc);
	}

	@GetMapping("/removeAccount/{accountNo}")
	public String removeAccount(@PathVariable Integer accountNo) {
		return accountService.removeAccount(accountNo);
	}

	@GetMapping("/viewAllAccounts/{walletId}")
	public List<BankAccount> viewAllAccounts(@PathVariable int walletId) throws BillPaymentNotFoundException {
		return accountService.viewAllAccounts(walletId);
	}
}
