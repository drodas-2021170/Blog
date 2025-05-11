import { body } from "express-validator"
import { validateError } from "./validate.error.js"


export const addCommentValidator = [
    body('author', 'Auhor cannot be empty').notEmpty().isLength({max:30}).withMessage('Can not be overcome 30 characters'),
    body('content', 'Content cannot be empty').notEmpty().isLength({max:200}).withMessage('Can not be overcome 200 characters'),
    body('publication', 'Publication cannot be empty').notEmpty(),
    validateError
]

export const addPublicationValidator = [
    body('title', 'Title cannot be empty').notEmpty().isLength({max:25}).withMessage('Can not be overcome 25 characters'),
    body('description', 'Description cannot be empty').notEmpty().isLength({max:200}).withMessage('Can not be overcome 200 characters'),
    body('proyect', 'Proyect cannot be empty').notEmpty(),
    body('course', 'Course cannot be empty').notEmpty(),
    body('creationDate', 'Creation date cannot be empty').notEmpty().isDate().withMessage('Creation date must be a date'),
    validateError
]