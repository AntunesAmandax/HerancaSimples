# Sistema de Contas Bancárias

Este projeto implementa um sistema básico de contas bancárias em Node.js, com suporte para diferentes tipos de contas, como conta comum, conta com limite e conta poupança. O sistema inclui validações de entrada e cálculos automáticos de limites e juros.

## Funcionalidades

- **contacomum**: Classe base para contas bancárias, com funcionalidades de depósito, retirada e verificação de saldo.
- **contalimite**: Extende `contacomum` e adiciona a funcionalidade de limite de crédito.
- **contapoupança**: Extende `contacomum` e adiciona a funcionalidade de cálculo de juros sobre o saldo.

## Pré-requisitos

- Node.js instalado
- Biblioteca `prompt-sync` para entrada de dados no console.
- Biblioteca `bycontract` para validação de contratos.
