const ClientGateway = require('../gateways/clientGateway');
const ClientPresenter = require("../presenters/clientPresenter");
const ClientUseCase = require("../usecases/clientUseCase");

class ClientController {
  clientUseCase;
  clientGateway;

  constructor(dataBaseClient) {
    this.clientGateway = new ClientGateway(dataBaseClient);
    this.clientUseCase = new ClientUseCase(this.clientGateway);
  }

  async createClient(req, res) {
    try {
      const clientData = req.body;

      const savedClient = await this.clientUseCase.create(clientData);

      const presentedClient = ClientPresenter.present(savedClient);
      res.json(presentedClient);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = ClientController;
