import { Router } from "express";
import { addPublication, getPublications, getPublicationsById } from "./publication.controller.js";
import { addPublicationValidator } from "../../middlewares/validators.js";

const api = Router();

api.post('/addPublication',[addPublicationValidator],addPublication )
api.get('/getPublications', getPublications)
api.get('/getPublication/:id', getPublicationsById)

export default api