# Projeto Backend e Frontend Simples

Este projeto consiste em um backend desenvolvido em Node.js com Express, que se conecta a um banco de dados PostgreSQL. O frontend é uma aplicação web simples em HTML e JavaScript que interage com o backend.

## Backend

O backend fornece uma API REST simples com dois endpoints:

- `GET /api/data`: Retorna uma lista de dados armazenados no banco PostgreSQL.
- `POST /api/data`: Insere um novo valor no banco de dados PostgreSQL.

### Dependências

- Express: Framework web para Node.js.
- pg: Cliente PostgreSQL para Node.js.
- cors: Middleware para CORS.

### Como executar

Para executar o backend localmente, certifique-se de ter Node.js instalado. Instale as dependências com `npm install` e execute com `npm start`. O servidor será iniciado na porta 3000 por padrão.

### Variáveis de Ambiente

O backend utiliza as seguintes variáveis de ambiente:

- `DB_HOST`: Host do banco PostgreSQL (padrão: localhost).
- `DB_USER`: Usuário do banco PostgreSQL.
- `DB_PASSWORD`: Senha do usuário do banco PostgreSQL.
- `DB_NAME`: Nome do banco de dados PostgreSQL.
- `PORT`: Porta em que o servidor Express será executado (padrão: 3000).

## Frontend

O frontend é uma página web simples que permite inserir valores via formulário e visualizar a lista de dados recuperados do backend.

### Como executar

Para executar o frontend localmente, instale as dependências com `npm install` e execute com `npm start`. O servidor será iniciado na porta 8080 por padrão.

### Variáveis de Ambiente

- `PORT`: Porta em que o servidor será executado (padrão: 8080).
- `BACKEND_URL`: URL do backend para fazer requisições (padrão: http://backend:3000).

## Banco de Dados

O projeto utiliza PostgreSQL como banco de dados principal. É necessário criar uma tabela `data` com pelo menos uma coluna `value` do tipo VARCHAR.

### Inicialização do Banco de Dados

O volume `- ./postgres/init.sql:/docker-entrypoint-initdb.d/init.sql` no docker-compose copia o arquivo `init.sql` local para o diretório `/docker-entrypoint-initdb.d/` dentro do container PostgreSQL. Esse diretório é monitorado pelo script de entrada do PostgreSQL, que executa automaticamente todos os arquivos `.sql` encontrados nele durante a primeira inicialização do banco de dados. Isso garante que a tabela `data` seja criada assim que o container for iniciado pela primeira vez, sem necessidade de intervenção manual.

