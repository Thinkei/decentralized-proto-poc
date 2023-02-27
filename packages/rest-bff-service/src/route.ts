import { Application } from "express"
import { createBarController } from "./controllers/bar"
import { createFooController } from "./controllers/foo"

export function registerRoute(app: Application) {
  app.use("/foo", createFooController())
  app.use("/bar", createBarController())
}
