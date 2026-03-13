import { startConsumer } from "./consumer/callConsumer"

async function start() {
  await startConsumer()
}

start()