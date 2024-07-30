# postech-fase2-fastfood

API com Clean Architecture


## Setup

Você vai precisar do
Node.js v18.10.0 com o nvm 0.39.0
Possui as dependências: Express, Mongoose, Dotenv e Body-parser.

### local

```bash
nvm use v18.10.0 && npm run start
```

### ou com Docker

Você precisa ter instalado o Docker com Docker compose.
Irá subir 2 containers, o do mongo e do API.

```bash
docker compose up
```

### ou com Kubernetes

Você vai precisar do docker, minikube e kubectl.

1. gera imagem para o docker local
```bash
eval $(minikube docker-env)
docker build -t postech-fase2-fastfood-api:latest .
kubectl apply -f k8s/app-deployment.yaml
```

2. configuração do minikube
```bash
minikube start
minikube status
kubectl config use-context minikube
kubectl cluster-info
```
3. configurar o k8s
```bash
kubectl apply -f k8s/mongo-deployment.yaml
kubectl apply -f k8s/mongo-service.yaml
kubectl apply -f k8s/app-deployment.yaml
kubectl apply -f k8s/app-service.yaml
```

4. acompanhar o ambiente
```bash
kubectl get pods
kubectl get services
minikube service app-service
```

5. parar o ambiente
```bash
minikube stop
docker stop registry
docker rm registry
```

## Utilização

1. TODO - Iniciar o estoque
2. Chegada do cliente 
      
    ```bash
    curl --location 'localhost:3000/clients' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "id": "123",
        "cpf": "12345678912",
        "nome": "Nome Sobrenome",
        "email": "nome@sobrenome.com"
    }'
    ```

3. TODO - Criação do pedido

### Consultar swagger

* Com a aplicação rodando, acesse
  * [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
* Arquivo direto pela sua IDE
  * [./src/docs/swagger/swagger.json](src/docs/swagger/swagger.json)

## Como que o sistema funciona?

Ele foi feito com Clean Architecture, então o sistema está preparado para troca de integrações.

Estrutura de diretórios da camada mais externa para a mais interna.

- API: Possui as rotas da API no padrão rest, estão subdivididas por usecase.
- Integrations: possui a conexão do mongo e dos seus databases.
- Gateways: possui o a interface para as conexões com os banco de dados e o padrão que será passado para o usecase. 
- Controllers: Passa as conexões externas para o usecase. 
- Presenters: possui as classes de saída de dados. 
- Usecases: possui as operações a serem realizadas pelo sistema.
- Entities: São as classes core do negócio.

### Contribuições

O projeto utiliza convention commit.

---

Desenvolvido com :) por uma dev!
