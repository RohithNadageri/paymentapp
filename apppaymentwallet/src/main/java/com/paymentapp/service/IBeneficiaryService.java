package com.paymentapp.service;

import com.paymentapp.exception.BeneficiaryNotExistException;
import com.paymentapp.model.BeneficiaryDetails;

public interface IBeneficiaryService {
	public BeneficiaryDetails addBeneficiary(String logedInMobileNo,BeneficiaryDetails bd);
	public String deleteBeneficiaryById(Integer beneficiaryId) throws BeneficiaryNotExistException;
	public BeneficiaryDetails viewBeneficiaryById(Integer beniId )throws BeneficiaryNotExistException;
	
	
}
