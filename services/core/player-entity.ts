import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { EntityConfiguration } from "electrodb";
import { Entity } from 'electrodb';
import { v1 } from 'uuid';
import { Table } from "@serverless-stack/node/table";

const Client = new DynamoDBClient({
  region: 'ap-southeast-1'
});

const Configuration: EntityConfiguration = {
  table: Table.Player.tableName,
  client: Client,
};

const PlayerEntity = new Entity({
  model: {
    entity: 'Player',
    version: '1',
    service: 'rookieme'
  },
  attributes: {
    playerId: {
      type: 'string',
      required: true,
      readOnly: true
    },
    teamId: {
      type: 'string',
      required: true,
      readOnly: true
    },
    playerName: {
      type: 'string',
      required: true,
    }
  },
  indexes: {
    primary: {
      pk: {
        field: "pk",
        composite: ["playerId"],
      },
      sk: {
        field: "sk",
        composite: ["playerName"],
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
        composite: ["playerId"],
      },
    },
  }
}, Configuration);

export async function addTeamPlayer(teamId: string, playerName: string) {
  const result = await PlayerEntity.create({
    playerId: v1(), // make sure to check for duplicates
    teamId,
    playerName,
  }).go();

  return result.data;
}

export async function getTeamPlayers(teamId: string) {
  const result = await PlayerEntity.query.byTeamId({
    teamId
  }).go();

  return result.data;
}