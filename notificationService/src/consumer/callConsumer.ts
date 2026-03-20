import amqp from "amqplib"

const QUEUE = "missed_calls"

export async function startConsumer() {

  const connection = await amqp.connect("amqp://rabbitmq")
  const channel = await connection.createChannel()

  await channel.assertQueue(QUEUE)

  console.log("Notification Service aguardando mensagens...")

  channel.consume(QUEUE, (msg) => {

    if (msg) {
      const call = JSON.parse(msg.content.toString())

      console.log("Chamada perdida recebida:", call)

      channel.ack(msg)
    }

  })

}