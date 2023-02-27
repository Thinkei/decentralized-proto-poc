import { BarService as BarServiceImpl } from "@poc/bar-service/build/gen"
import { createPromiseClient, PromiseClient } from "@bufbuild/connect"
import { createConnectTransport } from "@bufbuild/connect-node"

export class BarService {
  client: PromiseClient<typeof BarServiceImpl>
  constructor() {
    const transport = createConnectTransport({
      httpVersion: "2",
      baseUrl: process.env.BAR_URL ?? "http://localhost:8001",
    })
    this.client = createPromiseClient(BarServiceImpl, transport)
  }

  async unary(data: string) {
    const res = await this.client.unary({
      data,
    })
    return res.data
  }

  async serverStream(data: string) {
    const iterable = this.client.serverStream({ data })
    const response = []
    for await (let res of iterable) {
      response.push(res.data)
    }
    return response
  }

  async clientStream(data: string) {
    // TODO: To be implemented
    return "To be implemented"
  }

  async biStreaming(data: string) {
    // TODO: To be implemented
    return "To be implemented"
  }
}
