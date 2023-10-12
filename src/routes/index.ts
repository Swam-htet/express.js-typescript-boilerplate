import {Router} from "express";
import {index} from "../controllers/index.controller";
export let index_router = Router();

index_router.get("/",index);

