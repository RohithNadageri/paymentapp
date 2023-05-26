package com.paymentapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.paymentapp.exception.BillPaymentNotFoundException;
import com.paymentapp.model.BillPayment;
import com.paymentapp.service.IBillPaymentService;

@RestController
@CrossOrigin
public class BillPaymentController {

	@Autowired
	IBillPaymentService billPay;

	@PostMapping("/addBillPayment/{mobileNo}")
	public BillPayment addBillPayment(@PathVariable("mobileNo") String mobileNo,@RequestBody BillPayment payment) {

//		System.out.println(payment);
		BillPayment bp = billPay.addBillPayment(mobileNo,payment);

		return bp;
	}
	@GetMapping("/viewbill/{billId}")
	public BillPayment viewBillPayment(@PathVariable int billId) {
          System.out.println(billId);
		return billPay.viewBillPayment(billId);

	}
	
	@GetMapping("/allpayments")
	public List<BillPayment> allPayments() throws BillPaymentNotFoundException{
		return billPay.allBillPayments();
	}
}
