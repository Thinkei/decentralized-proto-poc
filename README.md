# What is this POC about ?

This is a sample microservice to demonstrate how protobuf file organization works in the decentralized way (each service contains it's own protobuf)

# About Services

## Foo Service

NodeJS-base service, exposing `grpc` to be comsumed by other service

## Rest BFF Service

NodeJS-base BFF, consuming `grpc` from other services and exposing `REST` for client use

# Things to consider

1. How to share protobuf definition across service ?
   Protobuf sharing between the same Node services is faily simple, we need to export the service as a npm package, and later on other services will install this npm package
   For different language => TODO

2. When to generate grpc stubs ?
   grpc stubs should be generated after modifying protobuf files, and committed to git along with protobuf file changes

3. How does versioning works ?
   Through npm package version, although we need to ensure backwards-compatibility
