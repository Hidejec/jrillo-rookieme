import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const team: APIGatewayProxyHandlerV2 = async (event) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Testing get team.`,
  };
};