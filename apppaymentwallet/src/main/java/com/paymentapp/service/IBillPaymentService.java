package com.paymentapp.service;

import java.util.List;

import com.paymentapp.exception.BillPaymentNotFoundException;
import com.paymentapp.model.BillPayment;

public interface IBillPaymentService {
//	public BillPayment addBillPayment(BillPayment payment);

	public BillPayment viewBillPayment(int paymentId);

	public List<BillPayment> allBillPayments() throws BillPaymentNotFoundException;
	public BillPayment addBillPayment(String mobileNo,BillPayment payment);

}
