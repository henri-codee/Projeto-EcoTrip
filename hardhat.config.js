require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Para proteger suas chaves privadas

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.19", // Deve ser a mesma vers￣o definida no seu .sol
    networks: {
        // Rede local para testes r￡pidos (n￣o gasta nada)
        localhost: {
            url: "http://127.0.0.1:8545"
        },
        // Exemplo de configura￧￣o para uma rede de teste real (Sepolia)
        // Para usar, voc￪ precisar￡ de um arquivo .env com suas chaves
        /*
        sepolia: {
          url: process.env.QUICKNODE_RPC_URL || "",
          accounts: [process.env.PRIVATE_KEY || ""],
        },
        */
    },
    paths: {
        artifacts: "./artifacts",
        sources: "./contracts",
        cache: "./cache",
        tests: "./test"
    }
};