import { Router } from "express";
import * as Controller from "./controller"

const productRouter = Router()

// productRouter.route("/").get(Controller.findAll)
// productRouter.route("/").post(Controller.findAll)
productRouter.get("/", Controller.findAll);
productRouter.get("/:id", Controller.findOne);
productRouter.post("/", Controller.create);
productRouter.put("/:id", Controller.update);
productRouter.delete("/:id", Controller.remove);

export default productRouter;