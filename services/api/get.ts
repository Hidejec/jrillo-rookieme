import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { getTeamPlayers } from "core/player-entity";
import { getTeam } from "core/team-entity";

export const team: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const { teamId }: any = event.pathParameters ? event.pathParameters : {};

    const res = await getTeam(teamId);

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

export const teamPlayers: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const { teamId }: any = event.pathParameters ? event.pathParameters : {};

    const res = await getTeamPlayers(teamId);

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