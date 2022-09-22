# Projeto Docker wait-for-it

Projeto criado com a finalidade de demonstrar o uso da ferramenta "wait-for-it" em uma aplicação Node + Mysql com Docker.

# Instalação

```
# Clone o repositório
git clone https://github.com/codeedu/docker-wait-for-it.git

# Acesse a pasta do projeto
cd docker-wait-for-it

# Rode o docker-compose.yaml
docker compose up

# Acesse a aplicação pelo navegador na porta 8080
localhost:8080
```

Ao executar o projeto com o comando ``` docker compose up ``` repare no log do terminal a ordem em que os services do docker-compose iniciam.

Nesta aplicação o "wait-for-it" faz com que o NODE(app) inicie apenas quando o MYSQL(banco de dados) estiver pronto.