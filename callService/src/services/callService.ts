import { Call } from "../models/calls";

export class CallService {

  createCall(call: Call) {
    console.log("Nova chamada registrada:", call)

    return {
      message: "Call registered successfully",
      data: call
    }
  }

}