package com.fapadevelop.rdvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fapadevelop.rdvendas.dto.SaleDTO;
import com.fapadevelop.rdvendas.dto.SaleSuccessDTO;
import com.fapadevelop.rdvendas.dto.SaleSumDTO;
import com.fapadevelop.rdvendas.services.SaleService;
import com.fapadevelop.rdvendas.services.SellerService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	
	@Autowired
	private SaleService saleService;
	
	@Autowired
	private SellerService sellerService;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable){
		sellerService.findAll();  //este método é utilizado para evitar que seja realizada uma busca para cada seller,
		                          //pois o JPA já armazena em cache todos os sellers 
		
		Page<SaleDTO> list = saleService.findAll(pageable);
		
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value = "amount-by-seller")
	public ResponseEntity<List<SaleSumDTO>> amountGroupedBySeller(){
		List<SaleSumDTO> list = saleService.amountGroupedBySeller();		
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value = "success-by-seller")
	public ResponseEntity<List<SaleSuccessDTO>> sucessGroupedBySeller(){
		List<SaleSuccessDTO> list = saleService.successGroupedBySeller();		
		return ResponseEntity.ok(list);
	}

}
