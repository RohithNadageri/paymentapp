package com.paymentapp.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.paymentapp.model.Wallet;

public interface IWalletRepository extends JpaRepository<Wallet, Integer>{
	
	@Query ("from Wallet w where w.walletId = ?1")
	public Wallet getWalletById(Integer walletId);
	
}
