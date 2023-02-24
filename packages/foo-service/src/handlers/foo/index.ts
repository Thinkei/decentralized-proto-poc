import { FooServiceServer } from "../../gen/protobuf/foo/foo"
import { createFoo } from "./createFoo"
import { deleteFoo } from "./deleteFoo"
import { getFoo } from "./getFoo"
import { listFoo } from "./listFoo"
import { updateFoo } from "./updateFoo"

export const handers: FooServiceServer = {
  createFoo,
  updateFoo,
  listFoo,
  deleteFoo,
  getFoo,
}
