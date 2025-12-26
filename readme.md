# 🌍 EcoTrip: Calculadora de Impacto Ambiental Web3

O **EcoTrip** é um simulador de impacto ambiental para viagens que utiliza a tecnologia Blockchain para registrar a pegada de carbono de forma imutável e transparente. Diferente de calculadoras comuns, o EcoTrip permite que o usuário conecte sua carteira digital e grave seu histórico de sustentabilidade diretamente na rede Ethereum (ou redes compatíveis).



---

## 🚀 Funcionalidades

- **Cálculo de CO2:** Baseado em rotas reais e diferentes meios de transporte (Avião, Trem, Carro, Ônibus).
- **Conexão Web3:** Integração nativa com a carteira MetaMask.
- **Registro Imutável:** Gravação do histórico de viagens através de um Smart Contract em Solidity.
- **Interface Moderna:** Design responsivo e focado na experiência do usuário (UX).

---

## 🛠️ Tecnologias Utilizadas

### Front-end:
- HTML5 & CSS3 (Design moderno com Dark Mode)
- JavaScript (ES6+)
- [Ethers.js](https://docs.ethers.org/) (Conexão com a Blockchain)

### Back-end & Blockchain:
- **Solidity:** Smart Contract para registro de dados.
- **Hardhat:** Ambiente de desenvolvimento e deploy.
- **MetaMask:** Provedor de carteira e assinatura de transações.

---

## 📂 Estrutura do Projeto

```text
carbon-calculator/
├── contracts/        # Contrato Inteligente (Solidity)
├── scripts/          # Scripts de Deploy (Hardhat)
├── css/              # Estilização (style.css)
├── js/               # Lógica (Calculator, Routes, Blockchain-conn)
├── index.html        # Interface Principal
└── hardhat.config.js # Configurações de rede Blockchain
