package com.paymentapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paymentapp.model.BillPayment;
import com.paymentapp.model.Wallet;

public interface IBillPaymentRepository extends JpaRepository<BillPayment, Integer>{
	public List<BillPayment> findByWallet(Wallet wallet);
}
