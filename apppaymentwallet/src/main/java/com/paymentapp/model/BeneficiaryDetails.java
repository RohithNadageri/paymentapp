package com.paymentapp.model;

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
public class BeneficiaryDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int beneficiaryId;
	private String name;
	private String mobileNumber;

	@ManyToOne(cascade = CascadeType.PERSIST)
	Wallet wallet;

}
