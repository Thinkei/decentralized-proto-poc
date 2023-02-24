import express from "express"
import { registerRoute } from "./route"
import dotenv from "dotenv"

dotenv.config()

function main() {
  const app = express()
  app.use(express.json())
  registerRoute(app)

  const port = process.env.PORT ?? 3000
  app.listen(port)
  console.log(`App listen on port ${port}`)
}

main()
