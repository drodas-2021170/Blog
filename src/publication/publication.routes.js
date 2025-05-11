import { Router } from "express";
import { addPublication } from "./publication.controller.js";

const api = Router();

api.post('/addPost',addPublication )

export default api