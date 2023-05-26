package com.paymentapp.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

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
public class Customer {
	
	private String name;
	@Id
	private String mobileNo;
	@Column(unique = true)
	private String emailid;
	private String password;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Wallet wallet;

	
}
