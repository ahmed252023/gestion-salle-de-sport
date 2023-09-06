package tn.itbs.sb.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.itbs.sb.models.Admin;
import tn.itbs.sb.repositories.AdminRepo;

@Service
public class AdminService {
	@Autowired
	private AdminRepo adminrepo;
	
	public List<Admin> chercher(){
		return adminrepo.findAll();
		
		
	}
	public void add(Admin ad) {
		adminrepo.save(ad);
		
	}
	public void deleteById(int id){
		adminrepo.deleteById(id);
	}
}


