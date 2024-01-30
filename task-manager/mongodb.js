//CRUD create read update delete

const mongodb = require('mongodb')
//initialize the connection
const MongoClient = mongodb.MongoClient

//const connectionURL = 'mongodb://root:your_own_password@localhost:27017/weatherData.city/?authMechanism=DEFAULT'
// const connectionURL='mongodb://root:your_own_password@localhost:27017/weatherData'
const connectionURL = 'mongodb://root:your_own_password@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, {}, (error, client) => {
    if (error) {
        console.log('Unable to connect  to database')
    }
    console.log('Connected correctly!')
})

// const { MongoClient } = require("mongodb");

// const client = new MongoClient("mongodb://root:your_own_password@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1");

// const db = client.db('weatherData');

// async function get() {

//     const collections = await db.listCollections().toArray();
//     console.log(collections);
// }

// get()