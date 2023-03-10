// @generated by protoc-gen-connect-es v0.8.0 with parameter "target=ts,import_extension="
// @generated from file protobuf/bar/bar.proto (package ebf.bar.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BiStreamingRequest, BiStreamingResponse, ClientStreamRequest, ClientStreamResponse, ServerStreamRequest, ServerStreamResponse, UnaryRequest, UnaryResponse } from "./bar_pb";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service ebf.bar.v1.BarService
 */
export const BarService = {
  typeName: "ebf.bar.v1.BarService",
  methods: {
    /**
     * @generated from rpc ebf.bar.v1.BarService.Unary
     */
    unary: {
      name: "Unary",
      I: UnaryRequest,
      O: UnaryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ebf.bar.v1.BarService.ServerStream
     */
    serverStream: {
      name: "ServerStream",
      I: ServerStreamRequest,
      O: ServerStreamResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc ebf.bar.v1.BarService.ClientStream
     */
    clientStream: {
      name: "ClientStream",
      I: ClientStreamRequest,
      O: ClientStreamResponse,
      kind: MethodKind.ClientStreaming,
    },
    /**
     * @generated from rpc ebf.bar.v1.BarService.BidirectionStreaming
     */
    bidirectionStreaming: {
      name: "BidirectionStreaming",
      I: BiStreamingRequest,
      O: BiStreamingResponse,
      kind: MethodKind.BiDiStreaming,
    },
  }
} as const;

