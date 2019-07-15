import express, { json, urlencoded } from 'express';
import Routes from './app/routes';
import logger from 'morgan';


const app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({extended: false}));

app.use("/api",Routes.Public);
app.use("/auth",Routes.Private);

export default app;
