import { DatabaseStack } from "./DatabaseStack";
import { MyStack } from "./MyStack";
import { App } from "@serverless-stack/resources";

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  app.stack(DatabaseStack)
     .stack(MyStack); // rename to ApiStack
}
