package tn.itbs.sb.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.itbs.sb.models.Member;



public interface MemberRepo extends JpaRepository<Member, Integer> {
List<Member> findByNom(String nom);
List<Member> findByPrenom(String prenom);

}
