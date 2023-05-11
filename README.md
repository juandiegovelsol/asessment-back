# API-Database Development Documentation

This documentation outlines the development of an API that serves as a bridge between a MySQL database and a client application. The API has been developed using Prisma ORM and Node.js, and the database consists of three tables: User, List, and Favs.

## Table of contents

- [Overview](#overview)
- [API Structure](#api-structure)
- [Setup](#setup)
- [Endpoint](#endpoint)
- [Conclusion](#conclusion)

## Overview

The API has been designed to handle HTTP requests and responses, which are processed by an Express server. The server is responsible for performing CRUD (Create, Read, Update, Delete) operations on the database tables, and returning the data to the client in JSON format.

## API Structure

The API has been structured using various npm libraries including Bcrypt, JWT, Nodemon, Express, and Cors. Bcrypt has been used to encrypt user passwords for secure storage, while JWT has been used to generate and authenticate JSON web tokens. Nodemon has been used to facilitate development by automatically restarting the server whenever changes are made to the code. Express is used as the primary web application framework, and Cors is used to enable cross-origin resource sharing.

## Setup

To use the API, you must first ensure that the necessary dependencies are installed by running `npm install` in the terminal. You must also create a `.env` file with the necessary environment variables, including the database URL, port, and secret key for JWT. Once the dependencies are installed and the environment variables are set up, you can start the API by running `npm start` in the terminal.

## Endpoints

The API exposes several endpoints that enable users to perform CRUD operations on the database. These endpoints include:

- /auth/local: POST user register
- /auth/local/login: POST user login
- /api/favs: GET, POST read and create list
- /api/favs/:id: GET, DELETE specific list
- /api/favs/fav: POST create one Fav
- /api/favs/fav/:id: DELETE one Fav

## Conclusion

In conclusion, this API serves as a bridge between a MySQL database and a client application, providing users with a way to interact with the data stored in the database. By leveraging various npm libraries and tools such as Prisma, Node.js, Express, and Cors, it was developed a robust and scalable API that can handle a wide range of use cases.
