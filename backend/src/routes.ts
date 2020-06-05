import express from "express";
import { celebrate, Joi } from "celebrate";
import multer from "multer";
import multerConfig from "./config/multer";

import PointsControllers from "./controllers/PointsControllers";
import ItemsControllers from "./controllers/ItemsControllers";

const routes = express.Router();
const upload = multer(multerConfig);

const pointController = new PointsControllers();
const itemsController = new ItemsControllers();

// Listar os itens
routes.get("/items", itemsController.index);

routes.post(
  "/points",
  upload.single("image"),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  pointController.create
);
routes.get("/points", pointController.index);
routes.get("/points/:id", pointController.show);

export default routes;
