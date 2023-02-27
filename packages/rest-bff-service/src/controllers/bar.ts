import { BarService } from "../service/bar"
import { Router } from "express"

export function createBarController() {
  const router = Router()

  router.post("/unary", async (req, res) => {
    const data = req.body.data
    const service = new BarService()
    const response = await service.unary(data)
    res.send({
      message: "success",
      data: response,
    })
  })

  router.post("/server-stream", async (req, res) => {
    const data = req.body.data
    const service = new BarService()
    const response = await service.serverStream(data)
    res.send({
      message: "success",
      data: response,
    })
  })

  router.post("/client-stream", async (req, res) => {
    const data = req.body.data
    const service = new BarService()
    const response = await service.clientStream(data)
    res.send({
      message: "success",
      data: response,
    })
  })

  router.post("/bi-streaming", async (req, res) => {
    const data = req.body.data
    const service = new BarService()
    const response = await service.biStreaming(data)
    res.send({
      message: "success",
      data: response,
    })
  })

  return router
}
