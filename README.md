# 🚀 [CRUD - TOP DEV1](https://school-movein.netlify.app)

<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|
  <a href="#-build">Build</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-author">Author</a>&nbsp;&nbsp;&nbsp;
</p>


## 💻 Project

* Trata-se de um CRUD - Create, Read, Update, Delete - em que:
  - O Frontend é composto por Vue.JS
  - O Backend é composto pela linguagem JavaScript com NodeJS e utiliza banco de dados MySQL


## 🌟 Technologies

* Para o desenvolvimento desse projeto foram utilizadas as seguintes tecnologias:
  - [Vue.JS](https://vuejs.org/)
  - [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  - [Netlify](https://www.netlify.com)
  - [MySQL](https://www.mysql.com/)
  - [VS Code](https://code.visualstudio.com/)
  - [GitHub](https://github.com/)


## ⚙ Requirements

* Você precisará instalar/configurar os seguintes recursos:
  - [NodeJS](https://nodejs.org/en/download/)
  - [MySQL](https://dev.mysql.com/downloads/installer/) ou [container Docker do MySQL](https://hub.docker.com/_/mysql)
  - [DBeaver](https://dbeaver.io/download/)
  - [VS Code](https://code.visualstudio.com/)


## 🛠 Build

* Realize o clone do projeto:

  ```bash 
  git clone https://github.com/mateus-stahelin/school-app.git
  ```

* **BACKEND**
  - Acesse o diretório do **backend** Projeto:

    ```bash
    cd school-app/backend/
    ```
  
  - Inicialize o Projeto:
  
    ```bash
    npm init -y
    ```
  
  - Instale as dependências necessárias:
  
    ```bash
    npm install express mysql2 nodemon cors
    ```
    
  - Renomeie o arquivo "**database-example.js**" para "**database.js**" em:
  
    ```bash
    school-app/backend/src/config/
    ```
  
  - Substitua as variáveis abaixo pelos dados para conexão ao banco de dados MySQL:
  
    ```bash
    DATABASE_HOST
    DATABASE_USER
    USER_PASS
    DATABASE_NAME
    ```
    
  - Inicialize o **backend**:
  
    ```bash
    npm start
    ```
  
  - Confira se o **backend** está funcionando:
  
    ```bash
    http://localhost:3333/
    ```

* **FRONTEND**

  - Acesse o diretório do **frontend** Projeto:
  
    ```bash
    cd school-app/frontend/
    ```
  
  - Instale o **VUE.js** (global) para utilização no **frontend**:
  
    ```bash
    npm install -g @vue/cli
    ```
    
  - Instale a biblioteca do **axios**:

    ```bash
    npm install axios
    ```
    
  - Inicialize o **frontend**:
  
    ```bash
    npm run serve
    ```
  
  - Confira se o **backend** e o **frontend** estão funcionando:
  
    ```bash
    http://localhost:8080/
    ```

* Acesse o **FRONTEND** do **Projeto CRUD** [aqui](https://school-movein.netlify.app).


## 🤓 Author

* Desenvolvido por [Mateus Sagas Stahelin](https://www.linkedin.com/in/mateus-stahelin/) no curso TOP DEV1 - [MoveIn](https://www.instagram.com/movein.tech/).
