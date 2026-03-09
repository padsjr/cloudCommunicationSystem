import { FastifyInstance } from 'fastify';
import { createCall } from '../controllers/callController';


export async function callRoutes(fastify: FastifyInstance) {
    fastify.post('/calls', createCall);
}