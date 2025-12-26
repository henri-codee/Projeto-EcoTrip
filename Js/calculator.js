/**
 * L￳gica de C￡lculos da EcoTrip
 */

// Vari￡vel global para armazenar o ￺ltimo c￡lculo (ser￡ usada pelo blockchain-conn.js)
let lastCalculatedCO2 = 0;

const calculator = {

    // Fun￧￣o principal de c￡lculo
    calculateImpact: function () {
        const routeSelect = document.getElementById('routeSelect');
        const selectedRouteValue = routeSelect.value;

        // 1. Obter os dados da rota a partir do ficheiro routes-data.js
        // Supondo que routesData ￩ um objeto global definido em routes-data.js
        const routeData = routesData.find(r => r.id === selectedRouteValue);

        if (!routeData) {
            alert("Por favor, selecione uma rota v￡lida.");
            return;
        }

        /**
         * FￓRMULA SIMPLIFICADA:
         * CO2 = Dist￢ncia (km) * Fator de Emiss￣o do Meio de Transporte
         * O fator de emiss￣o viria do seu config.js (ex: Avi￣o = 0.25kg/km, Comboio = 0.04kg/km)
         */
        const emissionFactor = config.emissionFactors[routeData.transportType] || 0.1;
        const totalCO2 = routeData.distance * emissionFactor;

        // 2. Guardar o resultado para uso posterior na Blockchain
        // Arredondamos para um n￺mero inteiro, pois Solidity lida melhor com inteiros
        lastCalculatedCO2 = Math.round(totalCO2);

        // 3. Atualizar a Interface do Utilizador (UI)
        this.updateUI(lastCalculatedCO2);
    },

    updateUI: function (value) {
        const resultArea = document.getElementById('resultArea');
        const co2Result = document.getElementById('co2Result');
        const btnSaveBlockchain = document.getElementById('btnSaveBlockchain');

        // Mostrar a ￡rea de resultados
        resultArea.classList.remove('hidden');

        // Exibir o valor formatado
        co2Result.innerText = `${value} kg de CO2`;

        // Habilitar o bot￣o de salvar na blockchain (se a carteira j￡ estiver ligada)
        // A l￳gica de verifica￧￣o de conex￣o pode estar no app.js
        if (typeof signer !== 'undefined') {
            btnSaveBlockchain.disabled = false;
        }
    }
};

// Event Listener para o bot￣o de calcular
document.getElementById('btnCalculate').addEventListener('click', () => {
    calculator.calculateImpact();
});