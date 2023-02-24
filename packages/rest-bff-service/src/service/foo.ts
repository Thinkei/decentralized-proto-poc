import {
  CreateFooResponse,
  DeleteFooResponse,
  FooServiceClient,
  GetFooResponse,
  ListFooResponse,
  UpdateFooResponse,
} from "@poc/foo-service/src/gen/protobuf/foo/foo"
import { ChannelCredentials } from "@grpc/grpc-js"

export class FooService {
  client: FooServiceClient
  constructor() {
    this.client = new FooServiceClient("localhost:10000", ChannelCredentials.createInsecure(), {})
  }

  async getFoo(id: string) {
    return await new Promise<GetFooResponse>((resolve, reject) => {
      this.client.getFoo({ id }, (err, response) => {
        if (err) {
          reject(err)
        }
        resolve(response)
      })
    })
  }

  async createFoo(data: string) {
    return await new Promise<CreateFooResponse>((resolve, reject) => {
      this.client.createFoo({ data }, (err, response) => {
        if (err) {
          reject(err)
        }
        resolve(response)
      })
    })
  }

  async updateFoo(id: string, data: string) {
    return await new Promise<UpdateFooResponse>((resolve, reject) => {
      this.client.updateFoo({ id, data }, (err, response) => {
        if (err) {
          reject(err)
        }
        resolve(response)
      })
    })
  }

  async listFoo(page: number, perPage: number) {
    return await new Promise<ListFooResponse>((resolve, reject) => {
      this.client.listFoo({ page, perPage }, (err, response) => {
        if (err) {
          reject(err)
        }
        resolve(response)
      })
    })
  }

  async deleteFoo(id: string) {
    return await new Promise<DeleteFooResponse>((resolve, reject) => {
      this.client.deleteFoo({ id }, (err, response) => {
        if (err) {
          reject(err)
        }
        resolve(response)
      })
    })
  }
}
