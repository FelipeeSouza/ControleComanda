package projeto.comanda.sysfas.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import projeto.comanda.sysfas.model.entities.Comanda;
import projeto.comanda.sysfas.model.repositories.ComandaRepositories;

@RestController
@RequestMapping("/api/comanda")
public class ComandaController {
    @Autowired
    private ComandaRepositories produtoRepository;

    @PostMapping
    public @ResponseBody Comanda novaComanda(@RequestBody Comanda comanda) {
        produtoRepository.save(comanda);
        return comanda;
    }

    @GetMapping
    public List<Comanda> obterProdutos() {
        return produtoRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Optional<Comanda> obterProdutoPorId(@PathVariable int id) {
        return produtoRepository.findById(id);
    }

    @PutMapping
    public Comanda alterarProduto(@RequestBody Comanda produto) {
        return produtoRepository.save(produto);
    }

    @DeleteMapping(path = "/{id}")
    public void ExcluirProduto(@PathVariable int id) {
        produtoRepository.deleteById(id);
    }

}



