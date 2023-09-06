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

import tn.itbs.sb.models.Member;
import tn.itbs.sb.services.MemberService;

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/api")
@RestController
public class MemberController {
	@Autowired
	private MemberService memberServ;
	
	@GetMapping("/allmember")
	public List<Member> findAll(){
		return memberServ.chercher();
		
	}
	@PostMapping("/member")
	public void addmember(@RequestBody Member mb){
		memberServ.add(mb);
	}
	
	
	
	@DeleteMapping("/member/{id}")
	public void deletemember(@PathVariable int id){
		memberServ.deleteById(id);
	}
	
	
	
	
	

}