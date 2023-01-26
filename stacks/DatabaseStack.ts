import { StackContext, Table } from "@serverless-stack/resources";

export function DatabaseStack({ stack }: StackContext) {
  return new Table(stack, "Team", {
    fields: {
      teamId: "string",
      teamName: "string",
    },
    primaryIndex: { partitionKey: "teamId", sortKey: "teamName" },
  });

  // add more tables if needed
  // microservice - usually 1 table per service (e.g. Team microservice)
  // for this example, we return 1 table only
}
