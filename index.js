// Common Js

// const express = require("express");
// exports.express = express;

// Modular Js - React JS

// import express from "express";
// export default express;

// ================================================================================================================================

const express = require("express");
const app = express();
const port = 1000;

app.use(express.json())

// app.get('/', ((request, response) => {
//     response.send(`This is home page and this server is running on http://localhost:${port}`)
// }))

// app.post('/user', ((request, response) => {
//     console.log(request.body)
//     response.send("Helllloww Worldd")
// }))

app.listen(port, () => console.log(`Your server is running on ${port}`))

// ================ Crud Operations == C = Create, R = Read, U = Update, D = Delete ================

app.get('/api/user', (request, response) => {
    response.send("User Get")
});

app.post('/api/user', (request, response) => {
    response.send("User Create")
});

app.put('/api/user', (request, response) => {
    response.send("User Updated")
});

app.delete('/api/user', (request, response) => {
    response.send("User Delete")
});