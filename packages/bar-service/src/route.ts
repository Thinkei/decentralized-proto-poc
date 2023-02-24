import { BarService } from "./gen/protobuf/bar/bar_connect"
import { BarHandlers } from "./handlers/bar"
import { ConnectRouter } from "@bufbuild/connect"

export function routes(router: ConnectRouter) {
  router.service(BarService, BarHandlers)

  return router
}
