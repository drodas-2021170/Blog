import { Router } from "express";
import { addComment } from "./comment.controller.js";


const api = Router();

api.post('/addComment', addComment)

export default api