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

import tn.itbs.sb.models.Admin;
import tn.itbs.sb.services.AdminService;

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/api")
@RestController
public class AdminController {
	@Autowired
	private AdminService adminServ;
	
	@GetMapping("/alladmin")
	public List<Admin> findAll(){
		return adminServ.chercher();
		
	}
	@PostMapping("/admin")
	public void addadmin(@RequestBody Admin ad){
		adminServ.add(ad);
	}
	
	@DeleteMapping("/admin/{id}")
	public void deleteadmin(@PathVariable int id){
		adminServ.deleteById(id);
	}
	
	
	

}