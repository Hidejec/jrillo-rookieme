import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const team: APIGatewayProxyHandlerV2 = async (event) => {
  // use electrodb with dynamodb
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Testing create a team API.`,
  };
};

export const player: APIGatewayProxyHandlerV2 = async (event) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Testing create a player to the team API.`,
  };
};