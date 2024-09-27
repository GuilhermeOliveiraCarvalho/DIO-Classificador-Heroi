
const Heroi = require('./Heroi');
const prompt = require('prompt-sync')();

class ClassificadorHeroi {
  constructor(nome, xp) {
    this.heroi = new Heroi(nome, xp);
  }

  
  fugirDaMissao() {
    console.log("O herói se acovardou e fugiu da missão que nem um bebê mimado.");
  }

  iniciarClassificador() {
    let continuar = true;
    while (continuar) {
      console.log(`O Herói ${this.heroi.nome} está no nível ${this.heroi.classificarNivel()} com ${this.heroi.xp} XP.`);
      
      let resposta;
      
      do {
        resposta = prompt("Deseja completar uma missão? (yes/no): ").trim().toLowerCase();
        
        if (resposta === 'yes') {
          this.heroi.completarMissao();
          continuar = false; 
          break;
        } else if (resposta === 'no') {
          this.fugirDaMissao();
          continuar = false; 
          break;
        } else {
          console.log("Digite apenas 'yes' ou 'no'.");
        }
      } while (resposta !== 'yes' && resposta !== 'no'); 
    }

    console.log(`O Herói ${this.heroi.nome} terminou no nível ${this.heroi.classificarNivel()} com ${this.heroi.xp} XP.`);
  }
}

module.exports = ClassificadorHeroi;




