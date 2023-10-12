import {Router} from "express";
import {getAllTodo} from "../controllers/todo.controller";
export let todo_router = Router();

// get all todos
todo_router.get("/",getAllTodo);

