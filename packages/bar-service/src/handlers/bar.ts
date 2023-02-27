import { BarService } from "../gen/protobuf/bar/bar_connect"
import { UnaryRequest, ServerStreamRequest, ClientStreamRequest, BiStreamingRequest } from "../gen/protobuf/bar/bar_pb"
import { ServiceImpl } from "@bufbuild/connect"

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const BarHandlers: ServiceImpl<typeof BarService> = {
  unary: (req: UnaryRequest) => {
    return {
      data: `You said ${(req as UnaryRequest).data}`,
    }
  },

  async *serverStream(req: ServerStreamRequest) {
    yield { data: `Server received request: ${req.data}` }
    await delay(150)
    yield { data: "Server will continue to send 2 more responses" }
    await delay(150)
    yield { data: "Server will continue to send 1 more response" }
    await delay(150)
    yield { data: "This is the last response" }
  },

  async clientStream(reqs: AsyncIterable<ClientStreamRequest>) {
    let result = []
    for await (const req of reqs) {
      result.push(req.data)
    }
    return {
      data: result.join(" | "),
    }
  },

  async *bidirectionStreaming(reqs: AsyncIterable<BiStreamingRequest>) {
    for await (const req of reqs) {
      yield {
        data: `Server received ${req.data}`,
      }
    }
  },
}
