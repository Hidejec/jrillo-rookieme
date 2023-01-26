import { StackContext, Api } from "@serverless-stack/resources";
import TeamRoutes from '../services/functions/team/routes';

export function MyStack({ stack }: StackContext) {
  const api = new Api(stack, "Team", {
    routes: TeamRoutes,
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
