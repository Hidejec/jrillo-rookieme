import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { addTeamPlayer } from "core/player-entity";
import { addTeam } from '../core/team-entity';

export const team: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const { teamName }: any = event.body ? JSON.parse(event.body) : {};

    // return bad request, teamName is required
    if (!teamName) return { statusCode: 400, body: JSON.stringify({ message: 'teamName is required' }) }

    const res = await addTeam(teamName);

    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify(err),
    };
  }
};

export const player: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const { playerName }: any = event.body ? JSON.parse(event.body) : {};
    const { teamId }: any = event.pathParameters ? event.pathParameters : {};

    // return bad request, playerName required
    if (!playerName) return { statusCode: 400, body: JSON.stringify({ message: 'playerName required'}) }

    const res = await addTeamPlayer(teamId, playerName);

    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify(err),
    };
  }
};