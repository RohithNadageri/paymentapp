package com.paymentapp.service;

import java.time.LocalDate;
import java.util.List;

import com.paymentapp.exception.NoTransactionFound;
import com.paymentapp.exception.UserNotFoundException;
import com.paymentapp.model.Transaction;

public interface ITransactionService {
	public Transaction addTransaction(int sender,String reciver,double amount,String desc) throws UserNotFoundException;
	
	public String searchByCusMobile(String reciver) throws UserNotFoundException;

	public List<Transaction> viewTransactionsByDate(String fromDate, String to,int walletId) throws NoTransactionFound;

	public List<Transaction> viewAllTransactions(String reciverName) ;

	public List<Transaction> viewAllTransactionsByWallet(int walletId);

	}
