package tn.itbs.sb.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.itbs.sb.models.Admin;



public interface AdminRepo extends JpaRepository<Admin, Integer> {
List<Admin> findByNom(String nom);
List<Admin> findByPrenom(String prenom);

}
