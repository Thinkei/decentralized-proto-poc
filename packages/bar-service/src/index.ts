import { connectNodeAdapter } from "@bufbuild/connect-node"
import http2 from "http2"
import { stdout } from "process"
import dotenv from "dotenv"
import { routes } from "./route"

dotenv.config()

function main() {
  const handler = connectNodeAdapter({
    routes,
  })

  const port = process.env.PORT ?? 8001

  http2
    .createSecureServer(
      {
        allowHTTP1: true,
      },
      handler,
    )
    .listen(process.env.PORT ?? 8001, () => {
      stdout.write(`The server is listening on https://localhost:${port}\n`)
    })
}

main()
