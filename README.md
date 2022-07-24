# PROJETO API APLICATIVO DE INVESTIMENTOS

<h1 align="center">APLICAÇÃO BACK END</h1>

## Descrição do Projeto
<p align="center">Neste desafio foi construído um banco de dados MySQL usando Sequelize ORM com Node.js e Express.
Projeto desenvolvido para o teste prático da XP.</p>

### Status do Projeto

<h4 align="center"> 
	🚧 Em construção...  🚧
</h4>

### Features

- [ ] Cadastro de cliente
- [ ] Login
- [ ] Cadastro de ações
- [ ] Busca por cliente
- [ ] Busca por ações
- [ ] Atualização de depósito
- [ ] Atualização de saque
- [ ] Atualização de compra
- [ ] Atualização de venda

### Technical Features

- Criação de Tabela de Clientes com as informações: id, nome, email, senha e saldo.
- Criação de Tabela de Ativos com as informações: id, quantidade e valor.
- Criação de Tabela de ClienteAtivos com as informações de relacionamento N:N: clienteId (contendo o id da tabela Clientes), ativoId (contendo o id da tabela Ativos), quantidade.
- Implementação de rota para cadastro de cliente.
- Criação de token gerado pelo JSON Web Token.
- Middleware de autenticação de token do cliente.
- Implementação de rota para login de cliente.
- Implementação de rota para compra e venda de ativos.
- Implementação de rota para busca por cliente ou ativos.
- Implementação de rota para saque ou depósito do cliente.

### Como configurar

Essas instruções fornecerão uma cópia do projeto completo em execução em sua máquina local para fins de desenvolvimento e teste.
O projeto pode ser construído com npm ou yarn, então escolha uma das abordagens abaixo caso você não tenha nenhuma instalada em seu sistema.

- O Npm é distribuído com o Node.js, o que significa que, quando você baixa o Node.js, automaticamente obtém o npm instalado em seu computador. [Download Node.js](https://nodejs.org/en/download/)
- O Yarn é um gerenciador de pacotes criado pela equipe do Facebook e parece ser mais rápido que o npm em geral. [Download Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable)

### Configurando Bancos de Dados e Serviços

O projeto usa [Sequelize ORM](https://sequelize.org/), [Sequelize CLI](https://www.npmjs.com/package/sequelize-cli), [MySQL2](https://www.npmjs.com/package/mysql2), [Express js](https://expressjs.com/), [Nodemon](https://www.npmjs.com/package/nodemon), [ExpressJS Async Errors](https://www.npmjs.com/package/express-async-errors), [Dotenv](https://www.npmjs.com/package/dotenv), [EsLint](https://eslint.org/).

### Como instalar

- Para baixar o projeto siga as instruções abaixo:

```bash
1. git clone git@github.com:KeuCassie/psel-xp.git
2. cd psel-xp
```

- Instale as dependências e inicie o servidor:

```bash
3. npm install
4. npm dev
```

Ou

```bash
3. yarn install
4. yarn dev
```

Renomeie o arquivo .enve crie suas variáveis de ambiente e substitua-as. É muito importante para a execução do servidor.

### Autora

[Kelly Cassiano](https://github.com/KeuCassie)

Muito Obrigada!

