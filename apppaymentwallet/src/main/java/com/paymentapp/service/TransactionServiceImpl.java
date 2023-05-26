package com.paymentapp.service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paymentapp.exception.InsufficientBalanceException;
import com.paymentapp.exception.InvalidInputException;
import com.paymentapp.exception.NoTransactionFound;
import com.paymentapp.exception.UserNotFoundException;
import com.paymentapp.model.BankAccount;
import com.paymentapp.model.Customer;
import com.paymentapp.model.Transaction;
import com.paymentapp.model.Wallet;
import com.paymentapp.repositories.IAccountRepository;
import com.paymentapp.repositories.ITransactionRepository;
import com.paymentapp.repositories.IUserRepository;
import com.paymentapp.repositories.IWalletRepository;

@Service
public class TransactionServiceImpl implements ITransactionService {

//	@Autowired
//	Transaction tr;
	
	@Autowired
	BankAccount bankAcc;
	
	@Autowired
	private ITransactionRepository transRepo;
	
	@Autowired
	private IWalletRepository walletRepo;
	
	@Autowired
	private IAccountRepository accountRepo;

	@Autowired
	private IUserRepository userRepo;
	
	
	@Override
	public Transaction addTransaction(int senderWalletID,String reciverMobileNo,double amount,String desc) throws UserNotFoundException{
		
//		Optional<Customer> opC=userRepo.findById(sessionMobileNumber);
//		Customer c=opC.get();
//		System.out.println(c);
		
		boolean b = walletRepo.existsById(senderWalletID);
		boolean c = userRepo.existsById(reciverMobileNo);
		
		if(b && c) {
			Optional<Wallet> wallet=walletRepo.findById(senderWalletID);
			Wallet w=wallet.get();
			BigDecimal walletBalance=w.getBalance();
			BigDecimal afterAmount=walletBalance.subtract(BigDecimal.valueOf(amount));
			if (afterAmount.compareTo(BigDecimal.ZERO) > 0) {
			    w.setBalance(afterAmount);
			    walletRepo.save(w);
			}else {
				throw new InsufficientBalanceException("Insufficient Balance");
			}

			
			Optional<Customer> cus=userRepo.findById(reciverMobileNo);
			Customer customer=cus.get();
			Wallet wallet1=customer.getWallet();
			BigDecimal wBalance = wallet1.getBalance();			
			BigDecimal finalBalance=wBalance.add(new BigDecimal(amount));
			wallet1.setBalance(finalBalance);
			walletRepo.save(wallet1);
			
			Transaction trReciverAccount=new Transaction();
			trReciverAccount.setReciverMobileNo(reciverMobileNo);
			trReciverAccount.setReciverName(customer.getName());
			trReciverAccount.setTransactionType("Received");
			trReciverAccount.setAmount(amount);
			trReciverAccount.setTransactionDate(LocalDate.now());
			trReciverAccount.setDescription(desc);
			trReciverAccount.setWallet(wallet1);
			transRepo.save(trReciverAccount);	
			
			
			Transaction tr=new Transaction();
			tr.setReciverMobileNo(reciverMobileNo);
			tr.setReciverName(customer.getName());
			tr.setTransactionType("Send");
			tr.setAmount(amount);
			tr.setTransactionDate(LocalDate.now());
			tr.setDescription(desc);
			tr.setWallet(w);
			
			return transRepo.save(tr);		
		}
		else 
		{
			throw new UserNotFoundException("User Not Found");
		}
		
	}

	@Override
	public List<Transaction> viewAllTransactionsByWallet(int walletId) {
		boolean b = walletRepo.existsById(walletId);
		if (!b) {
			throw new InvalidInputException("WalletID Doesnot Exist");
		} else {
			return transRepo.findByWalletID(walletId);
		}
	}

	@Override
	public List<Transaction> viewTransactionsByDate(String fromDate, String to,int walletId) throws NoTransactionFound {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd"); // The date format
        LocalDate fromdateFormat = LocalDate.parse(fromDate, formatter); 
        LocalDate todateFormat = LocalDate.parse(to, formatter); 
		
		List<Transaction> allTrans =transRepo.viewTransactionsByDate(fromdateFormat, todateFormat,walletId);
		if(allTrans.isEmpty()) {
			throw new NoTransactionFound("No Transaction between " + fromDate+ " to " +to);
		}
		return allTrans;
	}

	@Override
	public List<Transaction> viewAllTransactions(String reciverName) {
				return transRepo.findByReciverName(reciverName);
	}

	@Override
	public String searchByCusMobile(String reciver) throws UserNotFoundException {
		boolean cName=userRepo.existsById(reciver);
		if(cName) {
			Customer recName=userRepo.findById(reciver).get();
			String reciverName= recName.getName();
			return reciverName;
		}else {
			throw new UserNotFoundException("User Not found");
		}
	}

}
