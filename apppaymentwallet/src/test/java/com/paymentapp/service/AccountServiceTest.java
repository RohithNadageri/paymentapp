package com.paymentapp.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

import java.math.BigDecimal;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import com.paymentapp.exception.BillPaymentNotFoundException;
import com.paymentapp.model.BankAccount;
import com.paymentapp.model.Wallet;
import com.paymentapp.repositories.IAccountRepository;
import com.paymentapp.repositories.IWalletRepository;

public class AccountServiceTest {

	@InjectMocks
	private IAccountService accountService;

	@Mock
	private IWalletRepository walletRepository;

	@Mock
	private IAccountRepository accountRepository;

	@Test
	public void testAddAccount() {
		// create a Wallet object
		Wallet wallet = new Wallet(1, new BigDecimal(100.00));

		// create a BankAccount object to be added
		BankAccount bankAccount = new BankAccount();
		bankAccount.setAccountNo(12345);
		bankAccount.setBalance(1000);
		bankAccount.setBankName("SBI");
		bankAccount.setIfscCode("SBI123");
		bankAccount.setWallet(wallet);

		// mock the repository methods to return the required objects
		when(walletRepository.existsById(wallet.getWalletId())).thenReturn(true);
		when(accountRepository.existsById(bankAccount.getAccountNo())).thenReturn(false);
		when(accountRepository.save(bankAccount)).thenReturn(bankAccount);

		// call the service method to add the account
		Wallet result = accountService.addAccount(bankAccount);

		// assert that the result Wallet object is not null
		assertNotNull(result);
		// assert that the result Wallet object is the same as the input Wallet object
		assertEquals(result, wallet);
		// assert that the account was added to the Wallet object
//		assertEquals(result.getBankAccounts().size(), 1);
//		assertEquals(result.getBankAccounts().get(0), bankAccount);
	}

//	@Test(expected = InvalidInputException.class)
//	public void testAddAccountWithInvalidInput() {
//		// create a Wallet object
//		Wallet wallet = new Wallet(1, "John Doe");
//
//		// create a BankAccount object to be added
//		BankAccount bankAccount = new BankAccount();
//		bankAccount.setAccountNo(12345);
//		bankAccount.setAccountType("Savings");
//		bankAccount.setBalance(1000);
//		bankAccount.setWallet(wallet);
//
//		// mock the repository methods to return the required objects
//		when(walletRepository.existsById(wallet.getWalletId())).thenReturn(false);
//
//		// call the service method to add the account
//		accountService.addAccount(bankAccount);
//	}
}

	