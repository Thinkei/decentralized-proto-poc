import { Application } from "express"
import { createFooController } from "./controllers/foo"

export function registerRoute(app: Application) {
  app.use("/foo", createFooController())
}
