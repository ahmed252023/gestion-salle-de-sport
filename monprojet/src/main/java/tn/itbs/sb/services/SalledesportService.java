package tn.itbs.sb.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.itbs.sb.models.Salledesport;
import tn.itbs.sb.repositories.SalledesportRepository;


@Service
public class SalledesportService {
	@Autowired
	private SalledesportRepository sallerepo;
	
	public List<Salledesport> chercher(){
		return sallerepo.findAll();
		
		
	}
	public void add(Salledesport sl) {
		sallerepo.save(sl);
		
	}
	public void deleteById(int id){
		sallerepo.deleteById(id);
	}
	
}