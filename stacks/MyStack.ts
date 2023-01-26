import { StackContext, Api, use } from "@serverless-stack/resources";
import { DatabaseStack } from "./DatabaseStack";
import TeamRoutes from '../services/team/routes';
import PlayerRoutes from '../services/player/routes';

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
  const playerAPI = new Api(stack, "Player", {
    routes: PlayerRoutes,
  });

  stack.addOutputs({
    TeamAPIEndpoint: teamAPI.url,
    PlayerAPIEndpoint: playerAPI.url,
  });
}
