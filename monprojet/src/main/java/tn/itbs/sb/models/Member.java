package tn.itbs.sb.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Member {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(length = 50,nullable = false)
	private String nom;
	
	private String prenom;
	
	
	
	
	
	@OneToMany(mappedBy="mb")
	private List<Salledesport> listeC=new ArrayList<Salledesport>();
	
}