package com.paymentapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.paymentapp.model.BankAccount;
import com.paymentapp.model.Wallet;

public interface IAccountRepository extends JpaRepository<BankAccount,Integer>{
	
	
	public BankAccount findByWallet(Wallet wallet);
//	@Query("select b.accountNo,b.ifscCode,b.bankName,b.balance from BankAccount b,Wallet w where w.walletId=b.wallet.walletId and w.walletId=?1")
	@Query("select b from BankAccount b,Wallet w where w.walletId=b.wallet.walletId and w.walletId=?1")
	public List<BankAccount> viewAllAccounts(int walletId);
	
	@Query("SELECT b FROM BankAccount b WHERE b.wallet = ?1")
	public List<BankAccount> findAllBankAccountOfParticularCustomer(Wallet wallet);


}
