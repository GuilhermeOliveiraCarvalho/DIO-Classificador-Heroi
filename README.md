# Desafio de Projeto: Classificador de Nível de Herói

Este projeto foi desenvolvido como parte do bootcamp **GFT Start #6 - Lógica de Programação** da [DIO](https://www.dio.me/). O tema do projeto é um **Classificador de Nível de Herói**, onde o foco foi aplicar conceitos fundamentais de programação, incluindo variáveis, operadores, estruturas de decisão e laços de repetição.

## Sobre o Desafio

O desafio proposto consistia em criar um programa em JavaScript que classificasse um herói em diferentes níveis com base em sua experiência (XP). A ideia era utilizar uma série de condições para determinar o nível do herói, proporcionando uma forma interativa para o usuário atualizar o progresso do herói através de missões. Os conceitos aplicados incluem:

- **Variáveis:** Para armazenar informações como o nome e a quantidade de XP do herói.
- **Operadores:** Para comparar os valores de XP e determinar o nível do herói.
- **Laços de Repetição:** Para permitir que o usuário complete várias missões, atualizando o nível do herói até que ele decida sair do programa.
- **Estruturas de Decisão:** Para verificar a entrada do usuário e determinar a ação a ser tomada (completar missão, fugir da missão, ou pedir entrada válida).

## O Que Foi Implementado

O projeto foi dividido em várias classes e métodos, seguindo uma abordagem modular para melhorar a organização do código:

1. **Classe `Personagem`**: Serve como uma base para criar diferentes tipos de personagens. Neste projeto, é usada como uma "interface" para a classe `Heroi`.

2. **Classe `Heroi`**: Implementa a lógica principal do herói, contendo métodos para classificar seu nível com base na quantidade de XP e completar missões, nas quais o herói pode ganhar XP aleatoriamente.

3. **Classe `ClassificadorHeroi`**: Gerencia a interação com o usuário, incluindo:
   - Capturar entradas para determinar se o herói deve completar uma missão.
   - Controlar o loop do jogo até que o usuário decida encerrar.
   - Exibir mensagens adequadas ao usuário com base em suas escolhas, como fugir da missão ou concluir a missão.

4. **Classe `Main`**: Serve como ponto de entrada do programa. Inicializa o herói com o nome e XP fornecidos pelo usuário e inicia o processo de classificação.

## Requisitos

- **Node.js**: O projeto foi implementado em JavaScript e requer o Node.js para ser executado.
- **Prompt-sync**: A biblioteca `prompt-sync` foi utilizada para capturar a entrada do usuário no terminal.

## Funcionalidades

- O programa solicita ao usuário o nome do herói e a quantidade inicial de XP.
- Baseado no XP fornecido, classifica o herói em diferentes níveis:
  - Menor que 1.000: Ferro
  - Entre 1.001 e 2.000: Bronze
  - Entre 2.001 e 5.000: Prata
  - Entre 5.001 e 7.000: Ouro
  - Entre 7.001 e 8.000: Platina
  - Entre 8.001 e 9.000: Ascendente
  - Entre 9.001 e 10.000: Imortal
  - Maior ou igual a 10.001: Radiante
- O usuário pode optar por completar missões para aumentar o XP do herói ou fugir da missão, encerrando o jogo.
- O programa continua a perguntar se o usuário deseja completar novas missões até que ele escolha encerrar.

## Como Executar

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório em seu ambiente local.
3. No terminal, navegue até a pasta do projeto e instale a biblioteca `prompt-sync`:
   ```bash
   npm install prompt-sync
