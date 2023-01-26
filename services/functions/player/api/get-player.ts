import { APIGatewayProxyHandlerV2 } from "aws-lambda";

const index: APIGatewayProxyHandlerV2 = async (event) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Get Player Info.`,
  };
};

export default index;