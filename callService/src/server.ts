import Fastify from 'fastify';
import { callRoutes } from "./routes/callRoutes";

const fastify = Fastify({
    logger: true,
})
fastify.get('/', async () => { return { status: 'Serviço de comunicação rodando' }; });

fastify.register(callRoutes)

const start = async () => {
    try {
        await fastify.listen({ port: 3000, host: '0.0.0.0' });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();