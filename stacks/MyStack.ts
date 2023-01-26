import { StackContext, Api } from "@serverless-stack/resources";
import TeamRoutes from '../services/functions/team/routes';
import PlayerRoutes from '../services/functions/player/routes';

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
