package tn.itbs.sb.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.itbs.sb.models.Salledesport;




public interface SalledesportRepository extends JpaRepository<Salledesport, Integer> {
List<Salledesport> findBynomsalle(String nom);

}
