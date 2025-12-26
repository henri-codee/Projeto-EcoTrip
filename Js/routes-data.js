/**
 * Banco de Dados de Rotas - EcoTrip
 * Este objeto global contém as opções de viagens disponíveis para o simulador.
 */

const routesData = [
    {
        id: "sao-rio-aviao",
        name: "São Paulo ✈️ Rio de Janeiro (Avião)",
        distance: 430, // em km
        transportType: "plane"
    },
    {
        id: "sao-rio-onibus",
        name: "São Paulo 🚌 Rio de Janeiro (Ônibus)",
        distance: 435,
        transportType: "bus"
    },
    {
        id: "lisboa-porto-trem",
        name: "Lisboa 🚄 Porto (Trem)",
        distance: 313,
        transportType: "train"
    },
    {
        id: "curitiba-floripa-carro",
        name: "Curitiba 🚗 Florianópolis (Carro)",
        distance: 300,
        transportType: "car"
    },
    {
        id: "paris-londres-eurostar",
        name: "Paris 🚄 Londres (Eurostar)",
        distance: 450,
        transportType: "train"
    }
];

// Função auxiliar para carregar as opções no HTML assim que a página abrir
function populateRouteSelect() {
    const select = document.getElementById('routeSelect');
    if (!select) return;

    routesData.forEach(route => {
        const option = document.createElement('option');
        option.value = route.id;
        option.textContent = route.name;
        select.appendChild(option);
    });
}

// Executa a função ao carregar o script
document.addEventListener('DOMContentLoaded', populateRouteSelect);