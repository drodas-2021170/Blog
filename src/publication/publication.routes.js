import { Router } from "express";
import { addPublication } from "./publication.controller.js";
import { addPublicationValidator } from "../../middlewares/validators.js";

const api = Router();

api.post('/addPost',[addPublicationValidator],addPublication )

export default api