# EcoTrip: Calculadora de Impacto Ambiental Web3

O EcoTrip é uma aplicação demonstrativa para estimar emissões de CO₂ de rotas de viagem e, após configurar um contrato implantado e uma carteira MetaMask, registrar viagens em uma blockchain.

> **Nota:** os fatores de emissão são valores ilustrativos e simplificados. Não são aconselhamento ambiental nem estimativas oficiais. O registro Web3 exige implantação e configuração do contrato.

## Funcionalidades

- Estimativa simplificada de CO₂ a partir de rotas predefinidas.
- Interface responsiva em HTML, CSS e JavaScript.
- Conexão opcional com MetaMask e registro de viagens no contrato EcoTripTracker.
- Exibição do histórico de viagens retornado pelo contrato.

## Tecnologias

- HTML5, CSS3 e JavaScript
- Ethers.js 5
- Solidity 0.8.19+
- Hardhat

## Estrutura atual

```text
.
├── index.html
├── Css/
│   └── style.css
├── Js/
│   ├── app.js
│   ├── blockchain-conn.js
│   ├── calculator.js
│   ├── config.js
│   └── routes-data.js
├── Contratos/
│   └── EcoTripTracker.sol
├── scripts/
│   └── deploy.js
└── hardhat.config.js
```

Os nomes `Css/` e `Js/` usam letras maiúsculas; mantenha exatamente essa capitalização ao executar em Linux e outros sistemas de arquivos sensíveis a maiúsculas/minúsculas.

## Executar a interface

Como a aplicação usa arquivos locais e pode depender da carteira, sirva o diretório por HTTP em vez de abrir o HTML diretamente. Por exemplo:

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000` no navegador.

## Habilitar integração com blockchain

1. Implante `Contratos/EcoTripTracker.sol` em uma rede compatível com MetaMask.
2. Atualize `contractAddress` em `Js/blockchain-conn.js` com o endereço do contrato implantado.
3. Se necessário, configure a mesma rede na carteira.
4. Conecte a carteira pelo botão da aplicação. O registro de transações requer saldo para taxas da rede.

Sem um contrato implantado e endereço configurado, o cálculo local continua disponível, mas o registro e a leitura do histórico na blockchain não funcionarão.

## Limitações

- Distâncias e fatores de emissão são dados fixos de demonstração.
- A estimativa usa uma multiplicação direta de distância pelo fator ilustrativo; não considera ocupação, conexão, classe ou variações operacionais.
- O contrato grava o valor calculado pelo cliente e não verifica a precisão ambiental desse valor.
