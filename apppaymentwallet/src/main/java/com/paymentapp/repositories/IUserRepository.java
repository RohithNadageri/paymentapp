package com.paymentapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paymentapp.model.Customer;


public interface IUserRepository extends JpaRepository<Customer, String> {
	public Customer findCustomerByMobileNo(String mobileNo);
}