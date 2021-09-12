package com.fapadevelop.rdvendas.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.fapadevelop.rdvendas.dto.SaleDTO;
import com.fapadevelop.rdvendas.entities.Sale;
import com.fapadevelop.rdvendas.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository saleRepository;
	
	public Page<SaleDTO> findAll(Pageable pageable) {
		Page<Sale> result = saleRepository.findAll(pageable);
		
		return result.map(x -> new SaleDTO(x));
	}
}
