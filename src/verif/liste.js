import Joi from "joi";

export const contactVerif = Joi.object({
    nom: Joi.string().min(4).max(255).required().pattern(/^([A-Z])([a-zA-Z]+)( )([A-Z])([a-zA-Z]+)$/).messages({
        "string.empty" : "Le champ nom ne peut pas etre vide",
        "string.min" : "Le champ nom ne peut pas avoir moin de 4 caractères et une majuscule pour le nom et le prénom",
        "string.max" : "Le champ nom ne peut pas avoir plus de 255 caractères",
        "string.pattern.base" : "Le champs nom doit contenir le nom et prénom",
    }),
    mail: Joi.string().min(4).max(255).email({ tlds: {allow: false}}).required().messages({
        "string.empty" : "Le champ mail ne peut pas etre vide",
        "string.min" : "Le champ mail ne peut pas avoir moin de 4 caractères",
        "string.max" : "Le champ mail ne peut pas avoir plus de 255 caractères",
        "string.email" : "Le champ mail doit etre un email valide, exemple : votre@mail.fr",
    }),
    adresse: Joi.string().min(4).max(500).required().messages({
        "string.empty" : "Le champ adresse ne peut pas etre vide",
        "string.min" :  "Le champ adresse ne peut pas avoir moin de 4 caractères",
        "string.max" : "Le champ adresse ne peut pas avoir plus de 500 caractères",
    }),
    commentaire: Joi.string().min(4).max(1000).regex(/^[^<>]*$/).allow('').optional()
    .messages({
        "string.pattern.base" : "Le champ commentaire ne peut pas contenir les caractères suivants : < >",
        "string.min" :  "Le champ commentaire ne peut pas avoir moin de 4 caractères",
        "string.max" : "Le champ commentaire ne peut pas avoir plus de 1000 caractères",
    }),
    articles: Joi.required(),
})