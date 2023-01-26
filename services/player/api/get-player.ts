/*
  If the API code logic is too large, we can separate 
  it from the normal get.ts file. Create get-player.ts
  file that consists of the get player logic only.
  So we can prevent a bloated get.ts file.
*/
  
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const index: APIGatewayProxyHandlerV2 = async (event) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Get Player Info.`,
  };
};