package com.paymentapp.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.paymentapp.model.Transaction;
import com.paymentapp.model.Wallet;

public interface ITransactionRepository extends JpaRepository<Transaction, Integer> {

	@Query("from Transaction t where t.reciverName=?1 ORDER BY transactionId DESC")
	public List<Transaction> findByReciverName(String reciverName);

	@Query("from Transaction t where t.wallet.walletId=?1 ORDER BY transactionId DESC")
	public List<Transaction> findByWalletID(int walletId);

	@Query("from Transaction t where t.transactionDate between ?1 AND ?2 and t.wallet.walletId=?3 ORDER BY transactionId DESC")
	public List<Transaction> viewTransactionsByDate(LocalDate dFrom, LocalDate to,int walletId);
	
	@Query("SELECT t FROM Transaction t WHERE t.wallet = ?1")
	public List<Transaction> findAllTransactionOfParticularCustomer(Wallet wallet);
}