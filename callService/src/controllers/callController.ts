import fastify, { FastifyRequest, FastifyReply } from "fastify";
import { Call } from "../models/calls";

export async function createCall(request: FastifyRequest, reply: FastifyReply) {
    const call = request.body as Call;
    console.log("Nova chamada recebida:", call);
    return reply.status(201).send({ 
        message: "Chamada criada com sucesso", data: call });
    }
