// express import
import express from 'express';

// build-in middleware import
import morgan from "morgan";
import cors from 'cors';


// router import
import {index_router} from "./routes";

// middleware import
import * as middlewares from './middlewares';
import {todo_router} from "./routes/todos";



// crate express app
const app = express();

// logger middleware
app.use(morgan('dev'));

//  cross-origin-resource-sharing
app.use(cors());


// index route
app.use("/", index_router);

// todo route
app.use('/api/todos',todo_router);


// 404 not found
app.use(middlewares.notFound);

//  error handler
app.use(middlewares.errorHandler);


export default app;
