package tn.itbs.sb.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.itbs.sb.models.employe;
import tn.itbs.sb.repositories.EmployeRepository;


@Service
public class EmployeService {
		
	    @Autowired
		private EmployeRepository emprepo;
		
		public List<employe> chercher(){
			return emprepo.findAll();
			
			
		}
		public void add(employe emp) {
			emprepo.save(emp);
			
		}
		public void deleteById(int id){
			emprepo.deleteById(id);
		}

}