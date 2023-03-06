import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  schema: process.env.GQL_ENDPOINT,
  documents: ["gql/queries/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "gql/.generated/": {
      preset: "client",
    },
  },
};

export default config;
