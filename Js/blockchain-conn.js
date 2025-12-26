// Configura￧￵es do Contrato (Voc￪ obter￡ isso ap￳s fazer o Deploy do Solidity)
const contractAddress = "0xSEU_ENDERECO_DO_CONTRATO_AQUI";
const contractABI = [
    "function logTrip(string memory _dest, uint256 _co2) public",
    "function getUserTrips(address _user) public view returns (tuple(string destination, uint256 co2Emitted, uint256 timestamp)[])"
];

let signer;
let contract;

// Fun￧￣o para conectar a carteira MetaMask
async function connectWallet() {
    if (window.ethereum) {
        try {
            // Solicita acesso ￠ conta do usu￡rio
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);

            signer = provider.getSigner();
            const address = await signer.getAddress();

            // Instancia o contrato para uso
            contract = new ethers.Contract(contractAddress, contractABI, signer);

            // Atualiza a UI
            document.getElementById('walletAddress').innerText = `Conectado: ${address}`;
            document.getElementById('connectButton').innerText = "Carteira Conectada";
            document.getElementById('btnSaveBlockchain').disabled = false;

            console.log("Carteira conectada:", address);
        } catch (error) {
            console.error("Erro ao conectar carteira:", error);
        }
    } else {
        alert("Por favor, instale a MetaMask!");
    }
}

// Fun￧￣o para salvar a viagem no Smart Contract
async function saveTripToBlockchain(destination, co2Amount) {
    if (!contract) return alert("Conecte a carteira primeiro!");

    try {
        const tx = await contract.logTrip(destination, co2Amount);
        console.log("Transa￧￣o enviada... aguardando confirma￧￣o.");

        await tx.wait(); // Espera a transa￧￣o ser minerada
        alert("Viagem registrada com sucesso na Blockchain!");
        loadHistory(); // Atualiza a lista na tela
    } catch (error) {
        console.error("Erro ao salvar na blockchain:", error);
    }
}

// Event Listeners
document.getElementById('connectButton').addEventListener('click', connectWallet);