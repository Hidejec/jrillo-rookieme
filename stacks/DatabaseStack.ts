import { StackContext, Table } from "@serverless-stack/resources";

export function DatabaseStack({ stack }: StackContext) {
  return new Table(stack, "Team", {
    fields: {
      teamId: "string",
      teamName: "string",
    },
    primaryIndex: { partitionKey: "teamId", sortKey: "teamName" },
  });
}
