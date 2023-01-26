import uuid from "uuid";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { TeamEntity } from '../entity';

export const team: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const { body: { teamName } }: any = event;
    // return bad request, teamName is required
    if (!teamName) return { statusCode: 400 }

    const res = await TeamEntity.create({
      teamId: uuid.v1(),
      teamName
    }).go();

    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (err) {
    return {
      statusCode: 400,
    };
  }
};

export const player: APIGatewayProxyHandlerV2 = async (event) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Testing create a player to the team API.`,
  };
};