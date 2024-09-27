

const prompt = require('prompt-sync')();


const ClassificadorHeroi = require('./ClassificadorHeroi');


class Main {
  static executar() {
    const nome = prompt("Digite o nome do herói: ");
    const xpInicial = parseInt(prompt("Digite a quantidade inicial de XP do herói: "));

    const classificador = new ClassificadorHeroi(nome, xpInicial);
    classificador.iniciarClassificador();
  }
}


Main.executar();
