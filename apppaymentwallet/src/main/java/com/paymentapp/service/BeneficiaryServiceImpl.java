package com.paymentapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paymentapp.exception.BeneficiaryNotExistException;
import com.paymentapp.exception.InvalidInputException;
import com.paymentapp.model.BeneficiaryDetails;
import com.paymentapp.model.Customer;
import com.paymentapp.model.Wallet;
import com.paymentapp.repositories.IBeneficiaryRepository;
import com.paymentapp.repositories.IUserRepository;
import com.paymentapp.repositories.IWalletRepository;

@Service
public class BeneficiaryServiceImpl implements IBeneficiaryService{
	
	@Autowired
	IBeneficiaryRepository beneRepo;
	
	@Autowired
	IWalletRepository walletRepo;

	@Autowired
	IUserRepository userRepo;
	
	@Autowired
	BeneficiaryDetails bend;

	@Override
	public BeneficiaryDetails addBeneficiary(String logedInMobileNo,BeneficiaryDetails bd) {
		boolean b = beneRepo.existsById(bd.getBeneficiaryId());
		if (b)
		throw new InvalidInputException("Benificiary id " + bd.getBeneficiaryId() + " Already present");
		else {
		// bend.setBeneficiaryId(bd.getBeneficiaryId());
		BeneficiaryDetails bene=new BeneficiaryDetails();
		bene.setMobileNumber(bd.getMobileNumber());
		bene.setName(bd.getName());
		Customer cust = userRepo.findCustomerByMobileNo(logedInMobileNo);
		Wallet wallet = cust.getWallet();
		bene.setWallet(wallet);
		beneRepo.save(bene);
		return bene;
		}
		
	}


	@Override
	public BeneficiaryDetails viewBeneficiaryById(Integer beniId) throws BeneficiaryNotExistException {
		boolean b = beneRepo.existsById(beniId);
		if(!b) {
			throw new BeneficiaryNotExistException("No Beneficiary present whit id:" + beniId);
		}
		return beneRepo.findById(beniId).get();
	}

	@Override
	public String deleteBeneficiaryById(Integer beneficiaryId) throws BeneficiaryNotExistException {
		boolean b = beneRepo.existsById(beneficiaryId);
		if(!b) {
			throw new BeneficiaryNotExistException("No Beneficiary present whit id:" + beneficiaryId);
		}
		BeneficiaryDetails bd = beneRepo.findById(beneficiaryId).get();
		beneRepo.deleteById(beneficiaryId);
		return "Beneficiary deleted with id:" +beneficiaryId;
	}
}
