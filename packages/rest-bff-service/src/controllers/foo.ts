import { Application, Router } from "express"
import { FooService } from "../service/foo"

export function createFooController() {
  const router = Router()
  router.get("/:id", async (req, res) => {
    const { id } = req.params
    const service = new FooService()
    const foo = await service.getFoo(id)
    return res.json({
      message: "success",
      data: foo,
    })
  })

  router.post("/", async (req, res) => {
    const { data } = req.body
    const service = new FooService()
    const foo = await service.createFoo(data)
    return res.json({
      message: "success",
      data: foo,
    })
  })

  router.put("/:id", async (req, res) => {
    const { id } = req.params
    const { data } = req.body
    const service = new FooService()
    const foo = await service.updateFoo(id, data)
    return res.json({
      message: "success",
      data: foo,
    })
  })

  router.get("/", async (req, res) => {
    const { perPage, page } = req.query

    const service = new FooService()
    const foo = await service.listFoo(Number(page), Number(perPage))
    return res.json({
      message: "success",
      data: foo,
    })
  })

  router.delete("/:id", async (req, res) => {
    const { id } = req.params

    const service = new FooService()
    const foo = await service.deleteFoo(id)
    return res.json({
      message: "success",
      data: foo,
    })
  })

  return router
}
