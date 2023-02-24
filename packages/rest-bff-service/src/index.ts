import express from "express"
import { registerRoute } from "./route"

function main() {
  const app = express()
  app.use(express.json())
  registerRoute(app)
  app.listen(3000)
  console.log("App listen on port 3000")
}

main()
