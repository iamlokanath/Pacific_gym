import { MyStack } from "./MyStack";
import { App } from "@serverless-stack/resources";
import { AuthStack } from "./AuthStack";

/**
 * @param {App} app
 */
export default function (app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  app.stack(AuthStack);
}
