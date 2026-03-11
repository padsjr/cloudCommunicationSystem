import fastify, { FastifyRequest, FastifyReply } from "fastify";
import { Call } from "../models/calls";
import { CallService } from "../services/callService";

const callService = new CallService();

export async function createCall(request: FastifyRequest, reply: FastifyReply) {
    const call = request.body as Call;
    const result = callService.createCall(call);
    return reply.status(201).send(result);
}
