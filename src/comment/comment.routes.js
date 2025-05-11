import { Router } from "express";
import { addComment } from "./comment.controller.js";
import { addCommentValidator } from "../../middlewares/validators.js";


const api = Router();

api.post('/addComment',[addCommentValidator], addComment)

export default api