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

import tn.itbs.sb.models.Salledesport;
import tn.itbs.sb.services.SalledesportService;



@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/api")
@RestController
public class SalleController {
	@Autowired
	private SalledesportService salleServ;
	
	@GetMapping("/allsalle")
	public List<Salledesport> findAll(){
		return salleServ.chercher();
		
	}
	@PostMapping("/salle")
	public void addsalle(@RequestBody Salledesport sl){
		salleServ.add(sl);
	}
	
	
	
	@DeleteMapping("/salle/{id}")
	public void deletemember(@PathVariable int id){
		salleServ.deleteById(id);
	}

}
