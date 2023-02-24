// @generated by protoc-gen-es v1.0.0
// @generated from file protobuf/bar/bar.proto (package ebf.bar.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message ebf.bar.v1.UnaryRequest
 */
export declare class UnaryRequest extends Message<UnaryRequest> {
  /**
   * @generated from field: string data = 1;
   */
  data: string;

  constructor(data?: PartialMessage<UnaryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ebf.bar.v1.UnaryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnaryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnaryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnaryRequest;

  static equals(a: UnaryRequest | PlainMessage<UnaryRequest> | undefined, b: UnaryRequest | PlainMessage<UnaryRequest> | undefined): boolean;
}

/**
 * @generated from message ebf.bar.v1.UnaryResponse
 */
export declare class UnaryResponse extends Message<UnaryResponse> {
  /**
   * @generated from field: string data = 1;
   */
  data: string;

  constructor(data?: PartialMessage<UnaryResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ebf.bar.v1.UnaryResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnaryResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnaryResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnaryResponse;

  static equals(a: UnaryResponse | PlainMessage<UnaryResponse> | undefined, b: UnaryResponse | PlainMessage<UnaryResponse> | undefined): boolean;
}

/**
 * @generated from message ebf.bar.v1.ServerStreamRequest
 */
export declare class ServerStreamRequest extends Message<ServerStreamRequest> {
  /**
   * @generated from field: string data = 1;
   */
  data: string;

  constructor(data?: PartialMessage<ServerStreamRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ebf.bar.v1.ServerStreamRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServerStreamRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServerStreamRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServerStreamRequest;

  static equals(a: ServerStreamRequest | PlainMessage<ServerStreamRequest> | undefined, b: ServerStreamRequest | PlainMessage<ServerStreamRequest> | undefined): boolean;
}

/**
 * @generated from message ebf.bar.v1.ServerStreamResponse
 */
export declare class ServerStreamResponse extends Message<ServerStreamResponse> {
  /**
   * @generated from field: string data = 1;
   */
  data: string;

  constructor(data?: PartialMessage<ServerStreamResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ebf.bar.v1.ServerStreamResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServerStreamResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServerStreamResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServerStreamResponse;

  static equals(a: ServerStreamResponse | PlainMessage<ServerStreamResponse> | undefined, b: ServerStreamResponse | PlainMessage<ServerStreamResponse> | undefined): boolean;
}

/**
 * @generated from message ebf.bar.v1.ClientStreamRequest
 */
export declare class ClientStreamRequest extends Message<ClientStreamRequest> {
  /**
   * @generated from field: string data = 1;
   */
  data: string;

  constructor(data?: PartialMessage<ClientStreamRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ebf.bar.v1.ClientStreamRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamRequest;

  static equals(a: ClientStreamRequest | PlainMessage<ClientStreamRequest> | undefined, b: ClientStreamRequest | PlainMessage<ClientStreamRequest> | undefined): boolean;
}

/**
 * @generated from message ebf.bar.v1.ClientStreamResponse
 */
export declare class ClientStreamResponse extends Message<ClientStreamResponse> {
  /**
   * @generated from field: string data = 1;
   */
  data: string;

  constructor(data?: PartialMessage<ClientStreamResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ebf.bar.v1.ClientStreamResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientStreamResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientStreamResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientStreamResponse;

  static equals(a: ClientStreamResponse | PlainMessage<ClientStreamResponse> | undefined, b: ClientStreamResponse | PlainMessage<ClientStreamResponse> | undefined): boolean;
}

/**
 * @generated from message ebf.bar.v1.BiStreamingRequest
 */
export declare class BiStreamingRequest extends Message<BiStreamingRequest> {
  /**
   * @generated from field: string data = 1;
   */
  data: string;

  constructor(data?: PartialMessage<BiStreamingRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ebf.bar.v1.BiStreamingRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BiStreamingRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BiStreamingRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BiStreamingRequest;

  static equals(a: BiStreamingRequest | PlainMessage<BiStreamingRequest> | undefined, b: BiStreamingRequest | PlainMessage<BiStreamingRequest> | undefined): boolean;
}

/**
 * @generated from message ebf.bar.v1.BiStreamingResponse
 */
export declare class BiStreamingResponse extends Message<BiStreamingResponse> {
  /**
   * @generated from field: string data = 1;
   */
  data: string;

  constructor(data?: PartialMessage<BiStreamingResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ebf.bar.v1.BiStreamingResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BiStreamingResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BiStreamingResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BiStreamingResponse;

  static equals(a: BiStreamingResponse | PlainMessage<BiStreamingResponse> | undefined, b: BiStreamingResponse | PlainMessage<BiStreamingResponse> | undefined): boolean;
}

