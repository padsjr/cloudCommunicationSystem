import { FastifyInstance } from 'fastify';
import { createCall } from '../controllers/callController';
import { createCallSchema } from '../schemas/createCallSchema';



export async function callRoutes(fastify: FastifyInstance) {
    fastify.post('/calls',{ schema: createCallSchema }, createCall);
}


