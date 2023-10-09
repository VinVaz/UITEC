UITEC CHALLENGE

Bem-vindo ao project de desafio da UITEC! Este é um sistema de gerenciamento de produtos desenvolvido para ajudá-lo a rastrear informações sobre produtos e categorias. O projeto é dividido em duas partes: a interface do usuário do frontend, construída com Angular, e o backend construído com Laravel, que gerencia toda a lógica e os dados. Neste aplicativo web o usuário tem a capacidade de criar, visualizar, modificar e deletar produtos atravéz de simples e intuitiva interface.

Sumário
Pré-requisitos
Como Começar
Executando o Backend
Executando o Frontend
Uso
Contribuição
Licença
Pré-requisitos
Antes de começar, assegure-se de que você tenha atendido aos seguintes requisitos:

Node.js: Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo aqui.
Angular CLI: Instale o Angular CLI globalmente executando npm install -g @angular/cli.
Composer: Se você estiver usando PHP, você precisa ter o Composer instalado. Você pode baixá-lo aqui.
Banco de Dados: Se o seu projeto usa um banco de dados, assegure-se de que seu servidor de banco de dados esteja funcionando e você tenha as credenciais necessárias.
Como Começar
Para ter uma cópia local em execução, siga estas etapas simples de exemplo.

Executando o Backend
Clone o repositório:
sh
Copy code
git clone https://github.com/VinVaz/UITEC
Navegue até o diretório do backend:
sh
Copy code
cd diretorio-do-backend
Instale as dependências usando o Composer:
sh
Copy code
composer install
Crie um arquivo .env com base no .env.example fornecido e configure seu banco de dados e outras configurações necessárias.
Execute as migrações do banco de dados:
sh
Copy code
php artisan migrate
Inicie o servidor backend:
sh
Copy code
php artisan serve
Executando o Frontend
Navegue até o diretório do frontend:
sh
Copy code
cd diretorio-do-frontend
Instale as dependências usando npm:
sh
Copy code
npm install
Inicie o servidor de desenvolvimento do Angular:
sh
Copy code
ng serve
Uso
Descreva como usar a aplicação. Inclua quaisquer instruções ou comandos necessários.

Contribuição
Para contribuir com este projeto, siga estas etapas:

Faça um fork deste repositório.
Crie um branch: git checkout -b feature/nova-feature
Faça suas alterações e as commit: git commit -m 'Adicionar alguma feature'
Faça push para o branch original: git push origin feature/nova-feature
Crie um pull request.
Licença
Este projeto está licenciado sob a Licença [Nome da Licença] - veja o arquivo LICENSE para detalhes.
