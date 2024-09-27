

const Personagem = require('./Personagem');


class Heroi extends Personagem {
  constructor(nome, xp) {
    super();
    this.nome = nome;
    this.xp = xp;
  }

  classificarNivel() {
    if (this.xp < 1000) {
      return 'Ferro';
    } else if (this.xp >= 1001 && this.xp <= 2000) {
      return 'Bronze';
    } else if (this.xp >= 2001 && this.xp <= 5000) {
      return 'Prata';
    } else if (this.xp >= 5001 && this.xp <= 7000) {
      return 'Ouro';
    } else if (this.xp >= 7001 && this.xp <= 8000) {
      return 'Platina';
    } else if (this.xp >= 8001 && this.xp <= 9000) {
      return 'Ascendente';
    } else if (this.xp >= 9001 && this.xp <= 10000) {
      return 'Imortal';
    } else {
      return 'Radiante';
    }
  }

  completarMissao() {
    const ganhoDeXP = Math.floor(Math.random() * 2000) + 500;
    this.xp += ganhoDeXP;
    console.log(`O herói completou uma missão e ganhou ${ganhoDeXP} de XP!`);
  }
}

module.exports = Heroi;


  