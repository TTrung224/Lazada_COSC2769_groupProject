require("dotenv").config();
require("./config/Database").connect();
const cors = require('cors')
const express = require("express");
const route = require('./routes/Index');
// const cookies = require('cookie-parser')

const app = express();
app.use(express.json());
// app.use(cookies());
app.use(cors({origin: 'http://localhost:3000', credentials: true}))
route(app);

module.exports = app;