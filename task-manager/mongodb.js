//CRUD create read update delete

const mongodb = require('mongodb')
//initialize the connection
const MongoClient = mongodb.MongoClient

// //const connectionURL = 'mongodb://root:your_own_password@localhost:27017/weatherData.city/?authMechanism=DEFAULT'
// // const connectionURL='mongodb://root:your_own_password@localhost:27017/weatherData'
const connectionURL = 'mongodb://root:your_own_password@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.3'
const databaseName = 'task-manager'


// MongoClient.connect(connectionURL, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect  to database')
//     }
//     const db = client.db(databaseName)

//     db.collection('city').insertOne({
//         location: 'Paris',
//         country: 'France'
//     })
// })

const client = new MongoClient(connectionURL)
async function main() {
    //use connect method to connect to the server
    await client.connect();
    console.log('connected successfully to the server!')

    const db = client.db(databaseName)
    //insertOne method expect a object as its first argument
    const collection = db.collection('users')
   
    const insertResult = await collection.insertOne({
        name: 'YB',
        age: 23
    })
    console.log('Inserted Documents => ', insertResult)
   
    return 'done'
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());


// const { MongoClient } = require("mongodb");

// const client = new MongoClient("mongodb://root:your_own_password@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1");

// const db = client.db('weatherData');

// async function get() {

//     const collections = await db.listCollections().toArray();
//     console.log(collections);
// }

// get()