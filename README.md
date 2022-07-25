# <p align = "center"> RepoProvas </p>

<p align="center">
   <img width="300em" height="300em" src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f5c3-fe0f.svg"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-CarolXavier-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/carol-xavier/projeto19-drivenpass?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição

Um sistema de compartilhamento de provas entre estudantes. É possível postar novas provas e buscá-las organizadas por instrutor ou por disciplina.
***

## :computer:	 Tecnologias e Conceitos

- REST APIs
- JWTs & refresh tokens
- Bcrypt e Cryptr
- Node.js
- TypeScript
- PostgreSQL e Prisma
- Jest/Supertest

***

## :rocket: Rotas

```yml
POST /sign-up
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
        "email": "lorem@gmail.com", (valor único)
        "senha": "loremipsum" (mínimo de 10 caracteres)
}
```
***

## 🏁 Rodando a aplicação

Este projeto foi implementado utilizando Node.js e o framework Express.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/carol-xavier/projeto20-repoprovas.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm run dev
```

:stop_sign: Não esqueça de repetir os passos acima com o [repositório](https://github.com/carol-xavier/projeto19-drivenpass.git) que contem a interface da aplicação, para testar o projeto por completo.
