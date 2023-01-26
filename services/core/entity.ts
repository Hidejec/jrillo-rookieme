import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { EntityConfiguration } from "electrodb";
import { Entity } from 'electrodb';
import { v1 } from 'uuid';
import { Table } from "@serverless-stack/node/table";

const Client = new DynamoDBClient({
  region: 'ap-southeast-1'
});

const Configuration: EntityConfiguration = {
  table: Table.Team.tableName,
  client: Client,
};

const TeamEntity = new Entity({
  model: {
    entity: 'Team',
    version: '1',
    service: 'rookieme'
  },
  attributes: {
    teamId: {
      type: 'string',
      required: true,
      readOnly: true
    },
    teamName: {
      type: 'string',
      required: true,
    }
  },
  indexes: {
    primary: {
      pk: {
        field: "pk",
        composite: ["teamId"],
      },
      sk: {
        field: "sk",
        composite: [],
      },
    },
    byTeam: {
      index: "gsi1",
      pk: {
        field: "gsi1pk",
        composite: ["teamName"],
      },
      sk: {
        field: "gsi1sk",
        composite: ["teamId"],
      },
    },
  }
}, Configuration);

export async function addTeam(teamName: string) {
  const result = await TeamEntity.create({
    teamId: v1(),
    teamName,
  }).go();

  return result.data;
}