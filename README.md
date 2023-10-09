# UITEC CHALLENGE

Bem-vindo ao project de desafio da **UITEC**! Este é um sistema de gerenciamento de produtos desenvolvido para ajudá-lo a rastrear informações sobre produtos e categorias. O projeto é dividido em duas partes: a interface do usuário do frontend, construída com Angular, e o backend construído com Laravel, que gerencia toda a lógica e os dados. Neste aplicativo web o usuário tem a capacidade de criar, visualizar, modificar e deletar produtos atravéz de simples e intuitiva interface.

## Sumário

1. [Pré-requisitos](#Pré-requisitos)
2. [Como Começar](#Como Comerçar)
3. [Executando o Backend](#Executando o Backend)
4. [Executando o Frontend](#Executando o Frontend)
5. [Uso](#Uso)
6. [Contribuição](#Contribuição)
7. [Licença](#Licença)

## Pré-requisitos

Antes de começar, assegure-se de que você tenha atendido aos seguintes requisitos:

- **Node.js**: Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo aqui.
- **Angular CLI**: Instale o Angular CLI globalmente executando `npm install -g @angular/cli`.
- **Composer**: Se você estiver usando PHP, você precisa ter o Composer instalado. Você pode baixá-lo [aqui](https://getcomposer.org/).
- **Banco de Dados**: Se o seu projeto usa um banco de dados, assegure-se de que seu servidor de banco de dados esteja funcionando e você tenha as credenciais necessárias.

## Como Começar

Para ter uma cópia local em execução, siga estas etapas simples de exemplo.

### Executando o Backend

1. Clone o repositório:

```
git clone https://github.com/VinVaz/UITEC
```

2. Navegue até o diretório do backend:

```
cd diretorio-do-backend
```

3. Instale as dependências usando o Composer:

```
composer install
```

4. Crie um arquivo `.env` com base no `.env.example` fornecido e configure seu banco de dados e outras configurações necessárias.
5. Execute as migrações do banco de dados:

```
php artisan migrate
```

6. Inicie o servidor backend:

```
php artisan serve
```

### Executando o Frontend

1. Navegue até o diretório do frontend:

```
cd diretorio-do-frontend
```

2. Instale as dependências usando npm:

```
npm install
```

3. Inicie o servidor de desenvolvimento do Angular:

```
ng serve
```

## Uso

Descreva como usar a aplicação. Inclua quaisquer instruções ou comandos necessários.

## Contribuição

Para contribuir com este projeto, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie um branch: git checkout -b feature/nova-feature
3. Faça suas alterações e as commit: git commit -m 'Adicionar alguma feature'
4. Faça push para o branch original: git push origin feature/nova-feature
5. Crie um pull request.

## Licença

Este projeto está licenciado sob a Licença [Nome da Licença] - veja o arquivo LICENSE para detalhes.
