package com.paymentapp.exceptionhandler;

import java.time.LocalDate;
import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.BeanCreationNotAllowedException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.NoTransactionException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.paymentapp.exception.BeneficiaryNotExistException;
import com.paymentapp.exception.BillPaymentNotFoundException;
import com.paymentapp.exception.InsufficientBalanceException;
import com.paymentapp.exception.InvalidInputException;
import com.paymentapp.exception.NoTransactionFound;
import com.paymentapp.exception.UserNotFoundException;
import com.paymentapp.exception.WalletException;

@RestControllerAdvice
public class UserExceptionHandler {
	
	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<?> handleEmployeeDataError(UserNotFoundException ex) {
		Map<String, Object> errors = new LinkedHashMap<>();

		errors.put("error", "Not a Valid User Credentials");
		errors.put("message", ex.getMessage());
		errors.put("timestamp", LocalDate.now());

		return new ResponseEntity<Object>(errors, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(NoTransactionFound.class)
	public ResponseEntity<?> handleEmployeeDataError(NoTransactionFound ex) {
		Map<String, Object> errors = new LinkedHashMap<>();

		errors.put("error", "Not a Valid User Credentials");
		errors.put("message", ex.getMessage());
		errors.put("timestamp", LocalDate.now());

		return new ResponseEntity<Object>(errors, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(BillPaymentNotFoundException.class)
	public ResponseEntity<?> handleEmployeeDataError(BillPaymentNotFoundException ex) {

		Map<String, Object> errors = new LinkedHashMap<>();

		errors.put("error", "Not a Valid User Credentials");
		errors.put("message", ex.getMessage());
		errors.put("timestamp", LocalDate.now());

		return new ResponseEntity<Object>(errors, HttpStatus.NOT_FOUND);

	}

	@ExceptionHandler(InsufficientBalanceException.class)
	public ResponseEntity<?> handleEmployeeDataError(InsufficientBalanceException ex) {

		Map<String, Object> errors = new LinkedHashMap<>();

		errors.put("error", "Not a Valid User Credentials");
		errors.put("message", ex.getMessage());
		errors.put("timestamp", LocalDate.now());

		return new ResponseEntity<Object>(errors, HttpStatus.NOT_FOUND);

	}

	@ExceptionHandler(InvalidInputException.class)
	public ResponseEntity<String> handleEmployeeDataError(InvalidInputException ex) {

		Map<String, Object> errors = new LinkedHashMap<>();

		errors.put("error", "Not a Valid User Credentials");
		errors.put("message", ex.getMessage());
		errors.put("timestamp", LocalDate.now());

		return new ResponseEntity<String>("Not a Valid User Credentials", HttpStatus.NOT_FOUND);

	}

	@ExceptionHandler(WalletException.class)
	public ResponseEntity<?> handleEmployeeDataError(WalletException ex) {

		Map<String, Object> errors = new LinkedHashMap<>();

		errors.put("error", "Not a Valid User Credentials");
		errors.put("message", ex.getMessage());
		errors.put("timestamp", LocalDate.now());

		return new ResponseEntity<Object>(errors, HttpStatus.NOT_FOUND);

	}

	@ExceptionHandler(BeneficiaryNotExistException.class)
	public ResponseEntity<?> handleEmployeeDataError(BeneficiaryNotExistException ex) {

		Map<String, Object> errors = new LinkedHashMap<>();

		errors.put("error", "Not a Beneficary Id");
		errors.put("message", ex.getMessage());
		errors.put("timestamp", LocalDate.now());

		return new ResponseEntity<Object>(errors, HttpStatus.NOT_FOUND);
	}

}
