import { StackContext, Api, use } from "@serverless-stack/resources";
import { DatabaseStack } from "./DatabaseStack";
import TeamRoutes from '../services/core/routes';

// rename this to ApiStack
// create separate stack for database and other service
export function MyStack({ stack }: StackContext) {
  const table = use(DatabaseStack);

  const teamAPI = new Api(stack, "Team", {
    defaults: {
      function: {
        bind: [table],
      },
    },
    routes: TeamRoutes,
  });
  teamAPI.attachPermissions(['dynamodb']);

  // add more APIs if needed

  stack.addOutputs({
    TeamAPIEndpoint: teamAPI.url
  });
}
