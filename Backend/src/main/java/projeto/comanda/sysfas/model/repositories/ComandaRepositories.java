package projeto.comanda.sysfas.model.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import projeto.comanda.sysfas.model.entities.Comanda;

public interface ComandaRepositories extends JpaRepository<Comanda, Integer>{
    
}
