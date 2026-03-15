export const createCallSchema = {
  body: {
    type: "object",
    required: ["caller", "receiver", "status"],
    properties: {
      caller: { type: "string" },
      receiver: { type: "string" },
      status: {
        type: "string",
        enum: ["ATENDIDA", "PERDIDA", "FALHOU"]
      }
    }
  }
}