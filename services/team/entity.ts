import DynamoDB from "aws-sdk/clients/dynamodb";
import { Entity } from 'electrodb';

const client = new DynamoDB.DocumentClient();
const table = 'Team';

export const TeamEntity = new Entity({
  model: {
    entity: 'team',
    version: '1',
    service: 'rookieme'
  },
  attributes: {
    teamId: {
      type: 'string',
    },
    teamName: {
      type: 'string'
    }
  },
  indexes: {
    teamId: {
      pk: {
        field: "pk",
        composite: ["teamId"],
      },
    },
  }
}, {client, table});