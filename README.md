# Ghibli Films API

⚠️⚠️ Under construction ⚠️⚠️
<br><br>

### Introduction

Ghibli Films API is a personal project just for studies, I use the films from Studio Ghibli because I love them and it inspired me to make this API to be able to use in my frontend application.<br><br>

### Challenges I encountered in this project

Backend is a challenge in all ways for me, but I had some challenges that I enter to ask people for help and read a lot of things.
1 - Make DB run locally;
2 - Connect the Mongodb to my API local
3 - db how to use the image (poster) with Buffer
<br><br>

### Tecnologies used:

- NodeJS v18.14.0
- MongoDB v6.0.5
- Express
- Mongoose
  <br><br>

### Installation Guide

- Clone this repository [here](https://github.com/ciisiq/backend-ghibli.git).
- Run "npm install" to install all dependencies
- You need to have node and mongodb installed
- Create an .env file in your project root folder and add your variables. ⚠️
  <br><br>

### Usage

- Run "npm run dev" to start the application.
- Turn on your mongodb local (I used the mongodb compass do help me in it)
- Connect to the API using Postman on port 8080 (http://localhost:8080/api/films/).
  <br><br>

### API Endpoints

| HTTP Verbs | Endpoints  | Action                               |
| ---------- | ---------- | ------------------------------------ |
| GET        | /films     | To get all films                     |
| GET        | /films/:id | To get details of a single film      |
| POST       | /films     | To create a new film                 |
| PUT        | /films/:id | To edit the details of a single film |
| DELETE     | /films/:id | To delete a single film              |

<br><br>

### Example data

```{
_id: "644ac288c9f67664f20abdd7",
title: "Arrietty",
genre: "Fantasy/Adventure",
release: "July 17, 2010",
director: "Hiromasa Yonebayashi",
synopsis: "Arrietty and her family live out of sight from humans, but she strikes an unlikely friendship when she meets a human boy.",
poster: "https://upload.wikimedia.org/wikipedia/en/e/e7/Karigurashi_no_Arrietty_poster.png"
__v: 0,
}
```
