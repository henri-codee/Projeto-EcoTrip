// Configure este endereço com o endereço do contrato EcoTripTracker implantado.
const contractAddress = "0xSEU_ENDERECO_DO_CONTRATO_AQUI";
const contractABI = [
    "function logTrip(string memory _dest, uint256 _co2) public",
    "function getUserTrips() view returns (tuple(string destination, uint256 co2Emitted, uint256 timestamp)[])",
    "function getTotalCO2(address _user) view returns (uint256)"
];

let signer;
let contract;

async function connectWallet() {
    if (!window.ethereum) {
        alert('Por favor, instale a MetaMask.');
        return;
    }

    if (contractAddress === "0xSEU_ENDERECO_DO_CONTRATO_AQUI") {
        alert('Configure o endereço do contrato implantado em Js/blockchain-conn.js antes de conectar.');
        return;
    }

    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        signer = provider.getSigner();
        const address = await signer.getAddress();
        contract = new ethers.Contract(contractAddress, contractABI, signer);

        document.getElementById('walletAddress').innerText = `Conectado: ${address}`;
        document.getElementById('connectButton').innerText = 'Carteira Conectada';
        document.getElementById('btnSaveBlockchain').disabled = false;
        await loadHistory();
    } catch (error) {
        console.error('Erro ao conectar carteira:', error);
        alert('Não foi possível conectar à carteira. Verifique a rede e o endereço do contrato.');
    }
}

async function saveTripToBlockchain(destination, co2Amount) {
    if (!contract) {
        alert('Conecte uma carteira com o contrato configurado primeiro.');
        return;
    }

    try {
        const tx = await contract.logTrip(destination, co2Amount);
        await tx.wait();
        alert('Viagem registrada com sucesso na Blockchain!');
        await loadHistory();
    } catch (error) {
        console.error('Erro ao salvar na blockchain:', error);
        alert('Não foi possível registrar a viagem. Confira a rede, o saldo e as permissões da carteira.');
    }
}

async function loadHistory() {
    if (!contract) return;

    try {
        const trips = await contract.getUserTrips();
        const history = document.getElementById('tripHistory');
        history.replaceChildren();

        trips.forEach((trip) => {
            const item = document.createElement('li');
            const timestamp = Number(trip.timestamp ?? trip[2]);
            const destination = trip.destination ?? trip[0];
            const co2 = trip.co2Emitted ?? trip[1];
            item.textContent = `${destination} — ${co2.toString()} kg de CO2 — ${new Date(timestamp * 1000).toLocaleString('pt-BR')}`;
            history.appendChild(item);
        });
    } catch (error) {
        console.error('Erro ao carregar histórico:', error);
    }
}

document.getElementById('connectButton').addEventListener('click', connectWallet);
