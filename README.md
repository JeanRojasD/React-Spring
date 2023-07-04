# Job Challenge

Este projeto é uma aplicação web simples para gerenciamento de usuários, com recursos de criação e consulta. O frontend foi desenvolvido utilizando Vite e React, enquanto o backend utiliza o Spring REST API e o banco de dados PostgreSQL.

## Visão Geral

O projeto consiste em uma interface do usuário construída com React e TypeScript, que consome uma API RESTful desenvolvida com o Spring Framework. A aplicação permite gerenciar usuários e suas respectivas informações.

## Tecnologias e Ferramentas Utilizadas

### Frontend

- Vite: Um build tool rápido e leve para projetos web modernos.
- React: Uma biblioteca JavaScript para construir interfaces de usuário interativas.
- React Router Dom: Uma biblioteca para adicionar roteamento no React.
- TypeScript: Uma linguagem de programação que adiciona tipagem estática ao JavaScript.
- HTML e CSS: Linguagens de marcação e estilização para construir a estrutura e o visual da aplicação.
- Prettier: Uma ferramenta de formatação de código que mantém um estilo consistente em todo o projeto.
- ESLint: Uma ferramenta de análise de código que ajuda a identificar e corrigir problemas de estilo e erros em tempo de desenvolvimento.

### Backend

- Spring Framework: Um framework de desenvolvimento de aplicativos Java que simplifica o desenvolvimento de aplicativos corporativos.
- Spring Boot: Uma extensão do Spring Framework que facilita a criação de aplicativos Spring autônomos e prontos para produção.
- Spring REST API: Uma abordagem para a construção de serviços web RESTful usando o Spring Framework.
- Java: Uma linguagem de programação amplamente utilizada para desenvolvimento de aplicativos.
- ModelMapper: Uma biblioteca que facilita a conversão de objetos de um tipo para outro.
- Tika: Uma biblioteca Java que permite extrair metadados e conteúdo de diversos tipos de arquivos.
- PostgreSQL: Um sistema gerenciador de banco de dados relacional.

## Instalação e Execução

### Frontend

1. Certifique-se de ter o Node.js e o yarn instalados em seu ambiente de desenvolvimento.
2. Clone o repositório do projeto.
3. Acesse o diretório do projeto: `cd frontend`.
4. Instale as dependências do projeto: `yarn`.
5. Execute o projeto: `yarn dev`.

### Backend

1. Certifique-se de ter o JDK (Java Development Kit) instalado em seu ambiente de desenvolvimento.
2. Clone o repositório do projeto.
3. Acesse o diretório do projeto: `cd backend`.
4. Execute o projeto com o Maven: `./mvnw spring-boot:run`.

## Considerações Finais

O projeto utiliza o Prettier e o ESLint para manter um código bem formatado e consistente. O Prettier é responsável pela formatação automática do código, enquanto o ESLint verifica o código em busca de problemas de estilo e erros.

No backend, além das tecnologias mencionadas anteriormente, foram utilizadas as bibliotecas ModelMapper e Tika. O ModelMapper facilita a conversão entre objetos de diferentes tipos, enquanto o Tika permite extrair metadados e conteúdo de diversos tipos de arquivos.

No frontend, o projeto foi implementado sem o uso de bibliotecas de estilização, como Material UI e Bootstrap, para demonstrar o entendimento de HTML e CSS puros. No entanto, é importante ressaltar que é possível utilizar essas bibliotecas para acelerar o desenvolvimento e obter estilos pré-definidos.

A manipulação de imagens ficou pendente no projeto, mas no branch "backend-validations" do repositório, você encontrará o desenvolvimento parcial da inclusão de imagens. Essa branch contém implementações relacionadas à validação e manipulação de imagens no backend. Porém, a aplicação rodando perfeitamente se encontra no branch "master".

Sinta-se à vontade para explorar o projeto.
