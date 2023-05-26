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
public class BillPayment {
	
	@Id
    @GeneratedValue(strategy =GenerationType.AUTO ) 
	private int billId;
	@ManyToOne(cascade = CascadeType.ALL)
	private Wallet wallet;
	private String billtype;
	private double amount;
	
	private LocalDate paymentDate=LocalDate.now();
}
