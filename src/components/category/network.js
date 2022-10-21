import { Router } from "express";
import * as Controller from "./controller"

const categoryRouter = Router()

// categoryRouter.route("/").get(Controller.findAll)
// categoryRouter.route("/").post(Controller.findAll)
categoryRouter.get("/", Controller.findAll);
categoryRouter.get("/:id", Controller.findOne);
categoryRouter.post("/", Controller.create);
categoryRouter.put("/:id", Controller.update);
categoryRouter.delete("/:id", Controller.remove);

export default categoryRouter;