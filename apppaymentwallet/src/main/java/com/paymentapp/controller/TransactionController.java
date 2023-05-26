package com.paymentapp.controller;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.paymentapp.exception.NoTransactionFound;
import com.paymentapp.exception.UserNotFoundException;
import com.paymentapp.model.Transaction;
import com.paymentapp.service.ITransactionService;

@RestController
@CrossOrigin
public class TransactionController {
	@Autowired
	private ITransactionService tranService;

	@GetMapping("/viewAllTransactionsByWallet/{walletID}")
	public List<Transaction> viewAllTransactions(@PathVariable("walletID") int walletId) {
		return tranService.viewAllTransactionsByWallet(walletId);
	}

	@GetMapping("/viewAllTransactionsByType/{reciverName}")
	public List<Transaction> viewAllTransactions(@PathVariable String reciverName) {
		return tranService.viewAllTransactions(reciverName);
	}

	@GetMapping("/viewTransactionsByDate/{from}/{to}/{walletId}")
	public List<Transaction> viewTransactionsByDate(@PathVariable String from, @PathVariable String to,@PathVariable int walletId) throws NoTransactionFound {
		return tranService.viewTransactionsByDate(from, to,walletId);
	}

	@PutMapping("/addTransaction/{walletId}/{mobileNo}/{amount}/{desc}")
	public Transaction addTransaction(@PathVariable("walletId") int id, @PathVariable("mobileNo") String mobileno,@PathVariable("amount") double amount,@PathVariable("desc") String desc) throws UserNotFoundException {
		return tranService.addTransaction(id,mobileno, amount,desc);
	}
	
	@GetMapping("/searchReciverName/{mobileNo}")
	public String searchReciverName(@PathVariable String mobileNo) throws UserNotFoundException {
		return tranService.searchByCusMobile(mobileNo);
	}
}
