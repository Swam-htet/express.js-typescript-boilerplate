import {NextFunction, Request, Response} from "express";

interface Todo {
    id: string,
    title: string,
    description: string,
    completed: boolean
}

export function getAllTodo(req: Request, res: Response, next: NextFunction) {
    let todos: Todo[] = [];
    res.status(200).json(todos);
}