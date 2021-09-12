package com.fapadevelop.rdvendas.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fapadevelop.rdvendas.dto.SellerDTO;
import com.fapadevelop.rdvendas.entities.Seller;
import com.fapadevelop.rdvendas.repositories.SellerRepository;

@Service
public class SellerService {
	
	@Autowired
	private SellerRepository sellerRepository;
	
	public List<SellerDTO> findAll() {
		List<Seller> result = sellerRepository.findAll();
		
		return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
	}
}
