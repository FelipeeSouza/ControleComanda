package projeto.comanda.sysfas.model.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Comanda {
    

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int qtdespeto;
    @Column(columnDefinition = "DOUBLE DEFAULT 2.50")
    private double precoespeto;
    private int qtdrefrigerante;
    @Column(columnDefinition = "DOUBLE DEFAULT 2.50")
    private double precorefri;
    private int qtdcerveja;
    @Column(columnDefinition = "DOUBLE DEFAULT 2.50")
    private double precocerveja;
    private double total;

    public Comanda(){
        this.precocerveja=2.5;
        this.precoespeto=2.5;
        this.precorefri=2.5;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getQtdespeto() {
        return qtdespeto;
    }
    public void setQtdespeto(int qtdespeto) {
        this.qtdespeto = qtdespeto;
    }
    public double getPrecoespeto() {
        return precoespeto;
    }
    public void setPrecoespeto(double precoespeto) {
        this.precoespeto = precoespeto;
    }
    public int getQtdrefrigerante() {
        return qtdrefrigerante;
    }
    public void setQtdrefrigerante(int qtdrefrigerante) {
        this.qtdrefrigerante = qtdrefrigerante;
    }
    public double getPrecorefri() {
        return precorefri;
    }
    public void setPrecorefri(double precorefri) {
        this.precorefri = precorefri;
    }
    public int getQtdcerveja() {
        return qtdcerveja;
    }
    public void setQtdcerveja(int qtdcerveja) {
        this.qtdcerveja = qtdcerveja;
    }
    public double getPrecocerveja() {
        return precocerveja;
    }
    public void setPrecocerveja(double precocerveja) {
        this.precocerveja = precocerveja;
    }
    public double getTotal() {
        return total;
    }
    public void setTotal(double total) {
        this.total = total;
    }

  
}

