import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js"
import { UpdateFooRequest, UpdateFooResponse } from "../../gen/protobuf/foo/foo"

export async function updateFoo(
  call: ServerUnaryCall<UpdateFooRequest, UpdateFooResponse>,
  callback: sendUnaryData<UpdateFooResponse>,
) {
  const request = call.request
  const { data, id } = request

  if (!id) {
    return callback(
      {
        code: 400,
        message: "id is required",
      },
      null,
    )
  }
  callback(null, {
    details: {
      id,
      data,
    },
  })
}
