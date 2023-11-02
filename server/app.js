import  express  from "express";
import  User  from './config/routers/User.js';
export const app = express();

app.use("/api/v1",User);