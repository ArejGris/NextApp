import { MongoClient } from "mongodb"
export async function connect(){
 return await  MongoClient.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1')
}