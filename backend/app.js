require("dotenv").config();
require("./config/database").connect();
import cors from 'cors';
import express, { json } from "express";
import route from './routes';
const { HOSTING_URL_BASE } = process.env 

const app = express();
app.use(json());
route(app);

export default app;
