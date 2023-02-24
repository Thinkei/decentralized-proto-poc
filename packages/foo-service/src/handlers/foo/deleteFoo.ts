import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js"
import { DeleteFooRequest, DeleteFooResponse } from "../../gen/protobuf/foo/foo"

export async function deleteFoo(
  call: ServerUnaryCall<DeleteFooRequest, DeleteFooResponse>,
  callback: sendUnaryData<DeleteFooResponse>,
) {
  const request = call.request
  const { id } = request
  callback(null, {
    details: {
      id,
      data: "delete_foo_data",
    },
  })
}
