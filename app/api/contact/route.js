import { MongoClient } from "mongodb"
async function connect(){
 return await  MongoClient.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1')
}
export async function POST(req){
const data=await req.json()
console.log(data)
const {name,email,message}=data
let client
try{
  client=await connect()
}catch(error){
    return new Response(JSON.stringify(error))
}

try{const db=client.db('portfolio')
 db.collection('messages').insertOne(
    {
        name,email,message
    }
 )

}catch(error){
return new Response(JSON.stringify(error))
 }
return new Response(JSON.stringify(data))
}