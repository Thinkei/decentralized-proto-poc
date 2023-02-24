import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js"
import { ListFooRequest, ListFooResponse } from "../../gen/protobuf/foo/foo"

export async function listFoo(
  call: ServerUnaryCall<ListFooRequest, ListFooResponse>,
  callback: sendUnaryData<ListFooResponse>,
) {
  const request = call.request
  const { page, perPage } = request
  callback(null, {
    total: 1,
    foos: [
      {
        id: "1",
        data: "list_fooo",
      },
    ],
  })
}
