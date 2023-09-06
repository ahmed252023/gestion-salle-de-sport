package tn.itbs.sb.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.itbs.sb.models.Member;
import tn.itbs.sb.repositories.MemberRepo;

@Service
public class MemberService {
	@Autowired
	private MemberRepo memberrepo;
	
	public List<Member> chercher(){
		return memberrepo.findAll();
		
		
	}
	public void add(Member mb) {
		memberrepo.save(mb);
		
	}
	public void deleteById(int id){
		memberrepo.deleteById(id);
	}
}


