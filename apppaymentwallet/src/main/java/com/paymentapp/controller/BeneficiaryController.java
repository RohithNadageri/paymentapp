package com.paymentapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.paymentapp.exception.BeneficiaryNotExistException;
import com.paymentapp.model.BeneficiaryDetails;
import com.paymentapp.repositories.IBeneficiaryRepository;
import com.paymentapp.service.IBeneficiaryService;

@RestController
@CrossOrigin
public class BeneficiaryController {

	@Autowired
	IBeneficiaryService beneService;
	
	@Autowired
	IBeneficiaryRepository beneRepo;
	
	
	@PostMapping("/addbeneficiary/{logedinmobile}")
	public BeneficiaryDetails addBeneficiary(@PathVariable String logedinmobile, @RequestBody BeneficiaryDetails bd) {
	return beneService.addBeneficiary(logedinmobile,bd);
	}

	
	@GetMapping("/viewbeneficiary/{beneficiaryId}")
	public BeneficiaryDetails viewBeneficiary(@PathVariable Integer beneficiaryId) throws BeneficiaryNotExistException {
		return beneService.viewBeneficiaryById(beneficiaryId);
	}
	
	@DeleteMapping("/deletebenificiaryById/{beneficiaryId}")
	public String deletebenificiaryById (@PathVariable Integer beneficiaryId) throws BeneficiaryNotExistException {
		return beneService.deleteBeneficiaryById(beneficiaryId);
	}
	
}
