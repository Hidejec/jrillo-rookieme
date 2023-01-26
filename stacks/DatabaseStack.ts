import { StackContext, Table } from "@serverless-stack/resources";

export function DatabaseStack({ stack }: StackContext) {
  const team = new Table(stack, "Team", {
    fields: {
      teamId: "string",
      teamName: "string",
      gsi1pk: "string",
      gsi1sk: "string",
    },
    primaryIndex: { partitionKey: "teamId", sortKey: "teamName" },
    globalIndexes: {
      gsi1: {
        partitionKey: "gsi1pk",
        sortKey: "gsi1sk",
      },
    },
  });

  const player = new Table(stack, "Player", {
    fields: {
      playerId: "string",
      teamId: "string",
      playerName: "string",
      gsi1pk: "string",
      gsi1sk: "string",
    },
    primaryIndex: { partitionKey: "playerId", sortKey: "playerName" },
    globalIndexes: {
      gsi1: {
        partitionKey: "gsi1pk",
        sortKey: "gsi1sk",
      },
    },
  });

  return {
    team, 
    player
  }
}
// add more tables if needed
// microservice - usually 1 table per service (e.g. Team microservice)
