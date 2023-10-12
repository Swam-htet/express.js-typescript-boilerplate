import {NextFunction, Request, Response} from "express";


export function index(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({message:"Express.js with typescript"});
}