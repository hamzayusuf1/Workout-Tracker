const path = require("path")
const express = require("express");
const session = require("express-session")
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(() => {
    console.log(`App listening on PORT:" ${PORT}`)
})