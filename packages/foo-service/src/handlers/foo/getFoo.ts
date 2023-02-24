import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js"
import { GetFooRequest, GetFooResponse } from "../../gen/protobuf/foo/foo"

export async function getFoo(
  call: ServerUnaryCall<GetFooRequest, GetFooResponse>,
  callback: sendUnaryData<GetFooResponse>,
) {
  const request = call.request
  const { id } = request
  callback(null, {
    details: {
      id,
      data: "get_foo_data",
    },
  })
}
