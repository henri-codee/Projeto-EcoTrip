document.addEventListener('DOMContentLoaded', () => {
    // As rotas são carregadas uma única vez pelo evento registrado em routes-data.js.
    document.getElementById('btnSaveBlockchain').addEventListener('click', async () => {
        const routeSelect = document.getElementById('routeSelect');
        const destino = routeSelect.options[routeSelect.selectedIndex]?.text;
        const co2 = lastCalculatedCO2;

        if (destino && co2 > 0) {
            await saveTripToBlockchain(destino, co2);
        } else {
            alert('Por favor, realize um cálculo antes de salvar na blockchain.');
        }
    });
});
