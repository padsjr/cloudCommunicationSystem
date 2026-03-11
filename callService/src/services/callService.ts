import { Call } from "../models/calls";
import { publishMissedCall } from "../producers/rabbitProducer";

export class CallService {

  async createCall(call: Call) {

  console.log("Nova chamada registrada:", call)

  if (call.status === "PERDIDA") {
    await publishMissedCall(call)
  }

  return {
    message: "Call registered successfully",
    data: call
  }
}

}