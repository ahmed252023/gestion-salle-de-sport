package tn.itbs.sb.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.itbs.sb.models.employe;



public interface EmployeRepository extends JpaRepository<employe, Integer> {
List<employe> findByNom(String nom);
List<employe> findByPrenom(String prenom);


}
