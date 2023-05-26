package com.paymentapp.controller;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.paymentapp.model.BankAccount;
import com.paymentapp.model.BeneficiaryDetails;
import com.paymentapp.model.BillPayment;
import com.paymentapp.model.Customer;
import com.paymentapp.model.Transaction;
import com.paymentapp.model.Wallet;
import com.paymentapp.service.IWalletService;

@RestController
@CrossOrigin
	public class WalletController {

		
	@Autowired
	IWalletService walletService;

	@PostMapping("/createcustomer")
	public Customer createWallet(@RequestBody Customer customer) {

		Customer c = walletService.createCustomer(customer);
		return c;
	}

	@GetMapping("/showBalance/{mobileno}")
	public Customer showBalance(@PathVariable String mobileno) {

		Customer c = walletService.showBalance(mobileno);

		return c;

	}

	@GetMapping("/customers")
	public List<Customer> getListOfCustomer() {

		List<Customer> cl = walletService.getList();

		return cl;
	}

	@PutMapping("/updateAccount")
	public Customer updateAccount(@RequestBody Customer customer) {
		Customer c = walletService.updateAccount(customer);
		return c;
	}

	@PutMapping("/addMoney/{mobileNo}/{amount}/{accountNo}")
	public Wallet addMoney(@PathVariable String mobileNo, @PathVariable double amount,@PathVariable Integer accountNo) {

		return walletService.addMoney(mobileNo, amount,accountNo);
	}

	@PutMapping("/bankFundtransfer/{sourceMobileNo}/{targetMobileNo}/{amount}")
	public String fundTransfer(@PathVariable String sourceMobileNo, @PathVariable String targetMobileNo,
			@PathVariable BigDecimal amount) {
		return walletService.fundTransfer(sourceMobileNo, targetMobileNo, amount);

	}

	@PutMapping("/withdrawAmount/{mobileNo}/{amount}")
	public Customer withdrawAmount(@PathVariable String mobileNo, @PathVariable BigDecimal amount) {
		return walletService.withdrawAmount(mobileNo, amount);
	}

	@GetMapping("/logincustomer/{mobileNo}/{password}")
	public Customer loginCustomer(@PathVariable("mobileNo") String mobileNo, @PathVariable("password") String password) {
		return walletService.loginCustomer(mobileNo, password);
	}
	
	@GetMapping("/customerprofile/{mobileNo}")
	public Customer customerProfile(@PathVariable("mobileNo") String mobileNo) {
		return walletService.customerById(mobileNo);
	}
	@GetMapping("/alltransactions/{mobileNo}")
	public List<Transaction> allTransactions(@PathVariable("mobileNo") String mobileNo) {
		return walletService.allTransaction(mobileNo);
	}
	@GetMapping("/allbankaccount/{mobileNo}")
	public List<BankAccount> allBankAccount(@PathVariable("mobileNo") String mobileNo) {
		return walletService.allBankAccount(mobileNo);
	}
	
	@GetMapping("/allbeneficiary/{mobileNo}")
	public List<BeneficiaryDetails> allBeneficiary(@PathVariable("mobileNo") String mobileNo) {
		return walletService.allBeneficiary(mobileNo);
	}
	
	@GetMapping("/allBillpayments/{mobileNo}")
	public List<BillPayment> allBillPayments(@PathVariable("mobileNo") String mobileNo) {
		return walletService.allBillPayment(mobileNo);
	}


	}

