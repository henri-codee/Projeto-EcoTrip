document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa as rotas no select (vindo do routes-data.js)
    if (typeof populateRouteSelect === 'function') {
        populateRouteSelect();
    }

    // 2. Escuta o clique de salvar na Blockchain (Seu c￳digo integrado aqui)
    document.getElementById('btnSaveBlockchain').addEventListener('click', async () => {
        const routeSelect = document.getElementById('routeSelect');
        const destino = routeSelect.options[routeSelect.selectedIndex].text; // Pega o nome amig￡vel

        // Usamos a vari￡vel global 'lastCalculatedCO2' que foi definida no calculator.js
        const co2 = lastCalculatedCO2;

        if (co2 > 0) {
            // Chamamos a fun￧￣o do blockchain-conn.js
            await saveTripToBlockchain(destino, co2);
        } else {
            alert("Por favor, realize um c￡lculo antes de salvar na blockchain.");
        }
    });
});