// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title EcoTripTracker
 * @dev Armazena hist￳rico de emiss￵es de CO2 de viagens na blockchain.
 */
contract EcoTripTracker {

    // Estrutura para definir o que comp￵e uma viagem
    struct Trip {
        string destination; // Nome da rota/destino
        uint256 co2Emitted; // Quantidade em gramas ou kg
        uint256 timestamp;  // Data/hora do registro
    }

    // Mapeamento que liga o endere￧o da carteira (ID do usu￡rio) ￠ sua lista de viagens
    mapping(address => Trip[]) private userTrips;

    // Evento para avisar o Front-end quando uma nova viagem for gravada
    event TripLogged(address indexed user, string destination, uint256 co2Emitted);

    /**
     * @dev Registra uma nova viagem na blockchain
     * @param _destination Nome do local ou rota
     * @param _co2 Quantidade de CO2 calculada
     */
    function logTrip(string memory _destination, uint256 _co2) public {
        require(_co2 > 0, "O valor de CO2 deve ser maior que zero.");

        Trip memory newTrip = Trip({
            destination: _destination,
            co2Emitted: _co2,
            timestamp: block.timestamp
        });

        userTrips[msg.sender].push(newTrip);

        // Dispara o evento para o JavaScript ouvir
        emit TripLogged(msg.sender, _destination, _co2);
    }

    /**
     * @dev Retorna todo o hist￳rico de viagens do usu￡rio logado
     */
    function getUserTrips() public view returns (Trip[] memory) {
        return userTrips[msg.sender];
    }

    /**
     * @dev Retorna o total de CO2 emitido pelo usu￡rio (Soma de tudo)
     */
    function getTotalCO2(address _user) public view returns (uint256) {
        uint256 total = 0;
        for (uint256 i = 0; i < userTrips[_user].length; i++) {
            total += userTrips[_user][i].co2Emitted;
        }
        return total;
    }
}