import { MongoClient } from "mongodb"

const client = new MongoClient("mongodb://mongodb:27017")

export async function connectDB() {
  await client.connect()
  return client.db("communication-system")
}