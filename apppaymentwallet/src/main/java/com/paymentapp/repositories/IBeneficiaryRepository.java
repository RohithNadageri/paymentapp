package com.paymentapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paymentapp.model.BeneficiaryDetails;
import com.paymentapp.model.Wallet;

public interface IBeneficiaryRepository extends JpaRepository<BeneficiaryDetails, Integer>{

	public List<BeneficiaryDetails> findByWallet(Wallet wallet);
	public  BeneficiaryDetails  findById(int bid);
	
}
