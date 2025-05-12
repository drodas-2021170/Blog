import { Router } from "express";
import { addComment, getCommentsByPublication } from "./comment.controller.js";
import { addCommentValidator } from "../../middlewares/validators.js";


const api = Router();

api.post('/addComment',[addCommentValidator], addComment)
api.get('/getCommentsByPublication/:id',getCommentsByPublication)

export default api