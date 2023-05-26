package com.paymentapp.model;


import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.springframework.stereotype.Controller;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Controller
public class Transaction {
	
    @Id
    @GeneratedValue(strategy =GenerationType.AUTO ) 
	private int transactionId;
	private String reciverMobileNo;
	private String reciverName;
	private LocalDate transactionDate;
	public String transactionType;
	@ManyToOne(cascade = CascadeType.ALL)
	public Wallet wallet;
	private double amount;
	private String description;
	
	
}
