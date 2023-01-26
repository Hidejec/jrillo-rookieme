import { StackContext, Api } from "@serverless-stack/resources";
import TeamRoutes from '../services/team/routes';
import PlayerRoutes from '../services/player/routes';

// rename this to ApiStack
// create separate stack for database and other service
export function MyStack({ stack }: StackContext) {
  const teamAPI = new Api(stack, "Team", {
    routes: TeamRoutes,
  });
  const playerAPI = new Api(stack, "Player", {
    routes: PlayerRoutes,
  });
  stack.addOutputs({
    TeamAPIEndpoint: teamAPI.url,
    PlayerAPIEndpoint: playerAPI.url,
  });
}
