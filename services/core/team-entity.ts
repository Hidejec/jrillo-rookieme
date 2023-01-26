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
        composite: ["teamName"],
      },
    },
    byTeamId: {
      index: "gsi1",
      pk: {
        field: "gsi1pk",
        composite: ["teamId"],
      },
      sk: {
        field: "gsi1sk",
        composite: ["teamName"],
      },
    },
  }
}, Configuration);

export async function getTeam(teamId: string) {
  const result = await TeamEntity.query.byTeamId({
    teamId
  }).go();

  return result.data;
}

export async function addTeam(teamName: string) {
  const result = await TeamEntity.create({
    teamId: v1(), // make sure to check for duplicates
    teamName,
  }).go();

  return result.data;
}