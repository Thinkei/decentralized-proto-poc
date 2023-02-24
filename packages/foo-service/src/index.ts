import { globalHandlers } from "./handlers/index"
import { Server, ServerCredentials } from "@grpc/grpc-js"
import { FooServiceService } from "./gen/protobuf/foo/foo"
import dotenv from "dotenv"

dotenv.config()

async function main() {
  const server = new Server()
  server.addService(FooServiceService, globalHandlers)

  const port = process.env.PORT ?? 8000
  await new Promise<void>((resolve, reject) => {
    server.bindAsync(`0.0.0.0:${port}`, ServerCredentials.createInsecure(), (err, port) => {
      if (err) {
        reject(err)
      }
      console.log("GRPC server listing on port", port)
      resolve()
    })
  })
  await server.start()
}

main()
