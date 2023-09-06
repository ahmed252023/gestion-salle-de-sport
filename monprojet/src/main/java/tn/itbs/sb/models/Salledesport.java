package tn.itbs.sb.models;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Salledesport {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idsalle;
	
	@Column(length = 50,nullable = false)
	private String nomsalle;
	
	@ManyToOne
	@JoinColumn(name="idad")
	private Admin ad;	
	
	@ManyToOne
	@JoinColumn(name="idc")
	private Member mb;
	@ManyToOne
	@JoinColumn(name="ide")
	private employe emp;


}

