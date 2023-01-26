import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { addTeam } from '../core/entity';

export const team: APIGatewayProxyHandlerV2 = async (event) => {
  const { teamName }: any = event.body ? JSON.parse(event.body) : {};

  // return bad request, teamName is required
  if (!teamName) return { statusCode: 400, body: 'teamName is required' }

  const res = await addTeam(teamName);

  return {
    statusCode: 200,
    body: JSON.stringify(res),
  };
};

export const player: APIGatewayProxyHandlerV2 = async (event) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Testing create a player to the team API.`,
  };
};