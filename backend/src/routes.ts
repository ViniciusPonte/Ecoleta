import express from "express";

import PointsControllers from "./controllers/PointsControllers";
import ItemsControllers from "./controllers/ItemsControllers";

const routes = express.Router();
const pointController = new PointsControllers();
const itemsController = new ItemsControllers();

// Listar os itens
routes.get("/items", itemsController.index);

routes.post("/points", pointController.create);
routes.get("/points", pointController.index);
routes.get("/points/:id", pointController.show);

export default routes;
