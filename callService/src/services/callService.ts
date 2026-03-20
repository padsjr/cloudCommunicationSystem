import { Call } from "../models/calls";
import { publishMissedCall } from "../producers/rabbitProducer";
import { connectDB } from "../database/mongo";

export class CallService {

  async createCall(call: Call) {

    const db = await connectDB()
    await db.collection("calls").insertOne(call)

  console.log("Nova chamada registrada:", call)

  if (call.status === "PERDIDA") {
    await publishMissedCall(call)
  }

  return {
    message: "Nova chamada registrada:",
    data: call
  }
}

}