import { Router } from "express";
import { addPublication, getPublications } from "./publication.controller.js";
import { addPublicationValidator } from "../../middlewares/validators.js";

const api = Router();

api.post('/addPublication',[addPublicationValidator],addPublication )
api.get('/getPublications', getPublications)

export default api