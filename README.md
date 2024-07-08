# Controle de Notas

Controle de Notas é uma aplicação web desenvolvida em grupo para a cadeira de Programação Web. A aplicação permite o cadastro de clientes e notas fiscais, além de oferecer funcionalidades de busca e filtragem, e um dashboard inicial com informações resumidas.

## Descrição

O projeto foi criado para gerenciar notas fiscais de forma eficiente. Ele possibilita o cadastro de clientes e notas, além de oferecer um campo de busca para facilitar a filtragem das informações. Na tela inicial, são exibidas as últimas notas emitidas, juntamente com a soma dos valores das notas confirmadas, canceladas e em aberto.

## Funcionalidades

- Cadastro de clientes
  - Editar, Excluir
- Cadastro de notas fiscais
  - Editar , Excluir
- Campo de busca para filtragem de notas
  - Busca por empresa, responsavel, nº nota
- Visualização das últimas notas emitidas
- Exibição da soma dos valores das notas confirmadas, canceladas e em aberto

## Tecnologias Utilizadas

- React

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalação

Siga os passos abaixo para configurar e executar o projeto localmente.

1. Clone este repositório:

   ```sh
   git clone https://github.com/pablokonrath/controle-de-nfse.git


   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd controle-de-nfse
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

4. Execute o projeto:
   ```sh
   npm run dev
   ```

## Como Usar

Após seguir os passos de instalação, o projeto estará disponível para ser acessado no navegador em `http://localhost:3000` (ou outro endereço indicado no terminal). A partir daí, você poderá interagir com as funcionalidades do projeto.

### Inicializar com dados no localstorage

O projeto inclui 2 arquivo JSON com dados de clientes, notas predefinidas que podem ser carregadas no localStorage para começar. Para carregar esses dados, siga os passos abaixo:

1. No console do navegador, abra as Ferramentas de Desenvolvimento (normalmente pressionando `F12` ou `Ctrl+Shift+I`).
2. Navegue até a aba `Console`.
3. Copie e cole o seguinte comando no console para carregar os dados das candidatas:
   ```js
   const clientes = [
     /* conteúdo do JSON com os clientes */
   ];
   localStorage.setItem('clientes', JSON.stringify(clientes));
   const notas = [
     /* conteúdo do JSON com as notas */
   ];
   localStorage.setItem('notas', JSON.stringify(notas));
   ```

## Autor

Este projeto foi desenvolvido como parte da disciplina de Programação Web na faculdade.
