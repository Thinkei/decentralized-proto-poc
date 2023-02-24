// @generated by protoc-gen-connect-es v0.7.0
// @generated from file protobuf/bar/bar.proto (package ebf.bar.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BiStreamingRequest, BiStreamingResponse, ClientStreamRequest, ClientStreamResponse, ServerStreamRequest, ServerStreamResponse, UnaryRequest, UnaryResponse } from "./bar_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service ebf.bar.v1.BarService
 */
export declare const BarService: {
  readonly typeName: "ebf.bar.v1.BarService",
  readonly methods: {
    /**
     * @generated from rpc ebf.bar.v1.BarService.Unary
     */
    readonly unary: {
      readonly name: "Unary",
      readonly I: typeof UnaryRequest,
      readonly O: typeof UnaryResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ebf.bar.v1.BarService.ServerStream
     */
    readonly serverStream: {
      readonly name: "ServerStream",
      readonly I: typeof ServerStreamRequest,
      readonly O: typeof ServerStreamResponse,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc ebf.bar.v1.BarService.ClientStream
     */
    readonly clientStream: {
      readonly name: "ClientStream",
      readonly I: typeof ClientStreamRequest,
      readonly O: typeof ClientStreamResponse,
      readonly kind: MethodKind.ClientStreaming,
    },
    /**
     * @generated from rpc ebf.bar.v1.BarService.BidirectionStreaming
     */
    readonly bidirectionStreaming: {
      readonly name: "BidirectionStreaming",
      readonly I: typeof BiStreamingRequest,
      readonly O: typeof BiStreamingResponse,
      readonly kind: MethodKind.BiDiStreaming,
    },
  }
};
