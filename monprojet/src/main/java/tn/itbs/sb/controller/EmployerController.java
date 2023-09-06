package tn.itbs.sb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.itbs.sb.models.employe;
import tn.itbs.sb.services.EmployeService;


@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/api")
@RestController

public class EmployerController {
	
	
	@Autowired
	private EmployeService empServ;
	
	@GetMapping("/allemployer")
	public List<employe> findAll(){
		return empServ.chercher();
		
	}
	@PostMapping("/employer")
	public void addemployer(@RequestBody employe emp){
		empServ.add(emp);
	}
	
	@DeleteMapping("/employer/{id}")
	public void deletemember(@PathVariable int id){
		empServ.deleteById(id);
	}

}
