const hre = require("hardhat");

async function main() {
    console.log("Iniciando o deploy do contrato EcoTripTracker...");

    // 1. Obt￩m o contrato para publicar
    const EcoTripTracker = await hre.ethers.getContractFactory("EcoTripTracker");

    // 2. Faz o deploy (publica￧￣o)
    const ecoTrip = await EcoTripTracker.deploy();

    // 3. Aguarda a conclus￣o do deploy na rede
    await ecoTrip.deployed();

    console.log("-----------------------------------------------");
    console.log(`Sucesso! Contrato publicado em: ${ecoTrip.address}`);
    console.log("-----------------------------------------------");
    console.log("IMPORTANTE: Copie o endere￧o acima e cole na vari￡vel");
    console.log("'contractAddress' no seu arquivo js/blockchain-conn.js");
}

// Execu￧￣o do script com tratamento de erros
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });