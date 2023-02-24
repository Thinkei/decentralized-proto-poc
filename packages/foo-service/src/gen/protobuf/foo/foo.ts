/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "ebf.foo.v1";

export interface Foo {
  id: string;
  data: string;
}

export interface CreateFooRequest {
  /** Required */
  data: string;
}

export interface CreateFooResponse {
  details: Foo | undefined;
}

export interface GetFooRequest {
  /** Required */
  id: string;
}

export interface GetFooResponse {
  details: Foo | undefined;
}

export interface ListFooRequest {
  page: number;
  perPage: number;
}

export interface ListFooResponse {
  foos: Foo[];
  total: number;
}

export interface DeleteFooRequest {
  id: string;
}

export interface DeleteFooResponse {
  details: Foo | undefined;
}

export interface UpdateFooRequest {
  id: string;
  data: string;
}

export interface UpdateFooResponse {
  details: Foo | undefined;
}

function createBaseFoo(): Foo {
  return { id: "", data: "" };
}

export const Foo = {
  encode(message: Foo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.data !== "") {
      writer.uint32(18).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Foo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFoo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Foo {
    return { id: isSet(object.id) ? String(object.id) : "", data: isSet(object.data) ? String(object.data) : "" };
  },

  toJSON(message: Foo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  create<I extends Exact<DeepPartial<Foo>, I>>(base?: I): Foo {
    return Foo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Foo>, I>>(object: I): Foo {
    const message = createBaseFoo();
    message.id = object.id ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseCreateFooRequest(): CreateFooRequest {
  return { data: "" };
}

export const CreateFooRequest = {
  encode(message: CreateFooRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFooRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFooRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateFooRequest {
    return { data: isSet(object.data) ? String(object.data) : "" };
  },

  toJSON(message: CreateFooRequest): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateFooRequest>, I>>(base?: I): CreateFooRequest {
    return CreateFooRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateFooRequest>, I>>(object: I): CreateFooRequest {
    const message = createBaseCreateFooRequest();
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseCreateFooResponse(): CreateFooResponse {
  return { details: undefined };
}

export const CreateFooResponse = {
  encode(message: CreateFooResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Foo.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFooResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFooResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.details = Foo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateFooResponse {
    return { details: isSet(object.details) ? Foo.fromJSON(object.details) : undefined };
  },

  toJSON(message: CreateFooResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? Foo.toJSON(message.details) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateFooResponse>, I>>(base?: I): CreateFooResponse {
    return CreateFooResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateFooResponse>, I>>(object: I): CreateFooResponse {
    const message = createBaseCreateFooResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Foo.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseGetFooRequest(): GetFooRequest {
  return { id: "" };
}

export const GetFooRequest = {
  encode(message: GetFooRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFooRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFooRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFooRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GetFooRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFooRequest>, I>>(base?: I): GetFooRequest {
    return GetFooRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetFooRequest>, I>>(object: I): GetFooRequest {
    const message = createBaseGetFooRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetFooResponse(): GetFooResponse {
  return { details: undefined };
}

export const GetFooResponse = {
  encode(message: GetFooResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Foo.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFooResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFooResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.details = Foo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFooResponse {
    return { details: isSet(object.details) ? Foo.fromJSON(object.details) : undefined };
  },

  toJSON(message: GetFooResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? Foo.toJSON(message.details) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFooResponse>, I>>(base?: I): GetFooResponse {
    return GetFooResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetFooResponse>, I>>(object: I): GetFooResponse {
    const message = createBaseGetFooResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Foo.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseListFooRequest(): ListFooRequest {
  return { page: 0, perPage: 0 };
}

export const ListFooRequest = {
  encode(message: ListFooRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== 0) {
      writer.uint32(8).int32(message.page);
    }
    if (message.perPage !== 0) {
      writer.uint32(16).int32(message.perPage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFooRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFooRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.page = reader.int32();
          break;
        case 2:
          message.perPage = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListFooRequest {
    return {
      page: isSet(object.page) ? Number(object.page) : 0,
      perPage: isSet(object.perPage) ? Number(object.perPage) : 0,
    };
  },

  toJSON(message: ListFooRequest): unknown {
    const obj: any = {};
    message.page !== undefined && (obj.page = Math.round(message.page));
    message.perPage !== undefined && (obj.perPage = Math.round(message.perPage));
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFooRequest>, I>>(base?: I): ListFooRequest {
    return ListFooRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ListFooRequest>, I>>(object: I): ListFooRequest {
    const message = createBaseListFooRequest();
    message.page = object.page ?? 0;
    message.perPage = object.perPage ?? 0;
    return message;
  },
};

function createBaseListFooResponse(): ListFooResponse {
  return { foos: [], total: 0 };
}

export const ListFooResponse = {
  encode(message: ListFooResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.foos) {
      Foo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(16).int32(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFooResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFooResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.foos.push(Foo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListFooResponse {
    return {
      foos: Array.isArray(object?.foos) ? object.foos.map((e: any) => Foo.fromJSON(e)) : [],
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: ListFooResponse): unknown {
    const obj: any = {};
    if (message.foos) {
      obj.foos = message.foos.map((e) => e ? Foo.toJSON(e) : undefined);
    } else {
      obj.foos = [];
    }
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFooResponse>, I>>(base?: I): ListFooResponse {
    return ListFooResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ListFooResponse>, I>>(object: I): ListFooResponse {
    const message = createBaseListFooResponse();
    message.foos = object.foos?.map((e) => Foo.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseDeleteFooRequest(): DeleteFooRequest {
  return { id: "" };
}

export const DeleteFooRequest = {
  encode(message: DeleteFooRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFooRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteFooRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteFooRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DeleteFooRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteFooRequest>, I>>(base?: I): DeleteFooRequest {
    return DeleteFooRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteFooRequest>, I>>(object: I): DeleteFooRequest {
    const message = createBaseDeleteFooRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteFooResponse(): DeleteFooResponse {
  return { details: undefined };
}

export const DeleteFooResponse = {
  encode(message: DeleteFooResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Foo.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFooResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteFooResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.details = Foo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteFooResponse {
    return { details: isSet(object.details) ? Foo.fromJSON(object.details) : undefined };
  },

  toJSON(message: DeleteFooResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? Foo.toJSON(message.details) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteFooResponse>, I>>(base?: I): DeleteFooResponse {
    return DeleteFooResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteFooResponse>, I>>(object: I): DeleteFooResponse {
    const message = createBaseDeleteFooResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Foo.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseUpdateFooRequest(): UpdateFooRequest {
  return { id: "", data: "" };
}

export const UpdateFooRequest = {
  encode(message: UpdateFooRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.data !== "") {
      writer.uint32(18).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFooRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFooRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateFooRequest {
    return { id: isSet(object.id) ? String(object.id) : "", data: isSet(object.data) ? String(object.data) : "" };
  },

  toJSON(message: UpdateFooRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateFooRequest>, I>>(base?: I): UpdateFooRequest {
    return UpdateFooRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateFooRequest>, I>>(object: I): UpdateFooRequest {
    const message = createBaseUpdateFooRequest();
    message.id = object.id ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseUpdateFooResponse(): UpdateFooResponse {
  return { details: undefined };
}

export const UpdateFooResponse = {
  encode(message: UpdateFooResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Foo.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFooResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFooResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.details = Foo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateFooResponse {
    return { details: isSet(object.details) ? Foo.fromJSON(object.details) : undefined };
  },

  toJSON(message: UpdateFooResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? Foo.toJSON(message.details) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateFooResponse>, I>>(base?: I): UpdateFooResponse {
    return UpdateFooResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateFooResponse>, I>>(object: I): UpdateFooResponse {
    const message = createBaseUpdateFooResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Foo.fromPartial(object.details)
      : undefined;
    return message;
  },
};

export type FooServiceService = typeof FooServiceService;
export const FooServiceService = {
  createFoo: {
    path: "/ebf.foo.v1.FooService/CreateFoo",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateFooRequest) => Buffer.from(CreateFooRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateFooRequest.decode(value),
    responseSerialize: (value: CreateFooResponse) => Buffer.from(CreateFooResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateFooResponse.decode(value),
  },
  getFoo: {
    path: "/ebf.foo.v1.FooService/GetFoo",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetFooRequest) => Buffer.from(GetFooRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetFooRequest.decode(value),
    responseSerialize: (value: GetFooResponse) => Buffer.from(GetFooResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetFooResponse.decode(value),
  },
  listFoo: {
    path: "/ebf.foo.v1.FooService/ListFoo",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFooRequest) => Buffer.from(ListFooRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListFooRequest.decode(value),
    responseSerialize: (value: ListFooResponse) => Buffer.from(ListFooResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListFooResponse.decode(value),
  },
  deleteFoo: {
    path: "/ebf.foo.v1.FooService/DeleteFoo",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteFooRequest) => Buffer.from(DeleteFooRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteFooRequest.decode(value),
    responseSerialize: (value: DeleteFooResponse) => Buffer.from(DeleteFooResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeleteFooResponse.decode(value),
  },
  updateFoo: {
    path: "/ebf.foo.v1.FooService/UpdateFoo",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateFooRequest) => Buffer.from(UpdateFooRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateFooRequest.decode(value),
    responseSerialize: (value: UpdateFooResponse) => Buffer.from(UpdateFooResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateFooResponse.decode(value),
  },
} as const;

export interface FooServiceServer extends UntypedServiceImplementation {
  createFoo: handleUnaryCall<CreateFooRequest, CreateFooResponse>;
  getFoo: handleUnaryCall<GetFooRequest, GetFooResponse>;
  listFoo: handleUnaryCall<ListFooRequest, ListFooResponse>;
  deleteFoo: handleUnaryCall<DeleteFooRequest, DeleteFooResponse>;
  updateFoo: handleUnaryCall<UpdateFooRequest, UpdateFooResponse>;
}

export interface FooServiceClient extends Client {
  createFoo(
    request: CreateFooRequest,
    callback: (error: ServiceError | null, response: CreateFooResponse) => void,
  ): ClientUnaryCall;
  createFoo(
    request: CreateFooRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateFooResponse) => void,
  ): ClientUnaryCall;
  createFoo(
    request: CreateFooRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateFooResponse) => void,
  ): ClientUnaryCall;
  getFoo(
    request: GetFooRequest,
    callback: (error: ServiceError | null, response: GetFooResponse) => void,
  ): ClientUnaryCall;
  getFoo(
    request: GetFooRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetFooResponse) => void,
  ): ClientUnaryCall;
  getFoo(
    request: GetFooRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetFooResponse) => void,
  ): ClientUnaryCall;
  listFoo(
    request: ListFooRequest,
    callback: (error: ServiceError | null, response: ListFooResponse) => void,
  ): ClientUnaryCall;
  listFoo(
    request: ListFooRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListFooResponse) => void,
  ): ClientUnaryCall;
  listFoo(
    request: ListFooRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListFooResponse) => void,
  ): ClientUnaryCall;
  deleteFoo(
    request: DeleteFooRequest,
    callback: (error: ServiceError | null, response: DeleteFooResponse) => void,
  ): ClientUnaryCall;
  deleteFoo(
    request: DeleteFooRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DeleteFooResponse) => void,
  ): ClientUnaryCall;
  deleteFoo(
    request: DeleteFooRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DeleteFooResponse) => void,
  ): ClientUnaryCall;
  updateFoo(
    request: UpdateFooRequest,
    callback: (error: ServiceError | null, response: UpdateFooResponse) => void,
  ): ClientUnaryCall;
  updateFoo(
    request: UpdateFooRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateFooResponse) => void,
  ): ClientUnaryCall;
  updateFoo(
    request: UpdateFooRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateFooResponse) => void,
  ): ClientUnaryCall;
}

export const FooServiceClient = makeGenericClientConstructor(FooServiceService, "ebf.foo.v1.FooService") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): FooServiceClient;
  service: typeof FooServiceService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
