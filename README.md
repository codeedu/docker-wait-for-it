# Projeto Docker wait-for-it

Projeto criado com a finalidade de demonstrar o uso da ferramenta "wait-for-it" em uma aplicação Node + Mysql com Docker.

# Motivação

O wait-for-it é uma opção a ferramenta dockerize que o Wesley utiliza no curso de Docker, recebemos relatos de alunos que tentaram utilizar o dockerize em um MacBook M1 e receberam erro.

Por isso tivemos a ideia de apresentarmos o "wait-for-it" como opção e irei explicar a importância desta ferramenta em um ambiente de desenvolvimento.

## wait-for-it:

```wait-for``` foi projetado para realizar a sincronização entre serviços como containers docker. 

Um script bash puro que tem como finalidade aguardar a disponibilidade de um host e uma porta TCP. Como se trata de um script bash puro, ele não possui dependências externas.

É totalmente compativel com <a target=_blank href="https://en.wikipedia.org/wiki/Bourne_shell" >sh</a> e <a target=_blank href="https://alpinelinux.org/">alpine</a>.

Possui atualizações constantes pela comunidade, o link para conferir a documentação e código fonte é: <a target="_blank" href="https://github.com/eficode/wait-for" >wait-for-it</a>.

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