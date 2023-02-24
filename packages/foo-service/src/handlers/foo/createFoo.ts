import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js"
import { CreateFooRequest, CreateFooResponse } from "../../gen/protobuf/foo/foo"

export async function createFoo(
  call: ServerUnaryCall<CreateFooRequest, CreateFooResponse>,
  callback: sendUnaryData<CreateFooResponse>,
) {
  const request = call.request
  const { data } = request
  callback(null, {
    details: {
      id: "1",
      data,
    },
  })
}
