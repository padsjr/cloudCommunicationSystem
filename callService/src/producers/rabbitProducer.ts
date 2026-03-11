import amqp from "amqplib"

const QUEUE = "chamadas_perdidas"

export async function publishMissedCall(call: any) {
  const connection = await amqp.connect("amqp://localhost")
  const channel = await connection.createChannel()

  await channel.assertQueue(QUEUE)

  channel.sendToQueue(
    QUEUE,
    Buffer.from(JSON.stringify(call))
  )

  console.log("Evento enviado para fila:", call)

  await channel.close()
  await connection.close()
}