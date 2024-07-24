import { Client } from '@elastic/elasticsearch';
import dotenv from 'dotenv';
//elastic search to find best route
dotenv.config();

const client = new Client({ node: process.env.ELASTICSEARCH_URL });

export const indexOrder = async (order: any) => {
  try {
    await client.index({
      index: 'orders',
      id: order._id,
      body: order,
    });
  } catch (error) {
    console.error('Error indexing order', error);
  }
};

export const searchOrders = async (query: string) => {
  try {
    const { body } = await client.search({
      index: 'orders',
      body: {
        query: {
          multi_match: {
            query,
            fields: ['customerName', 'deliveryAddress'],
          },
        },
      },
    });
    return body.hits.hits;
  } catch (error) {
    console.error('Error searching orders', error);
    return [];
  }
};
