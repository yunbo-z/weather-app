//CRUD create read update delete

//initialize the connection
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// using distructure, grab xxx from object mongodb
const { MongoClient, ObjectID } = require('mongodb')


const connectionURL = 'mongodb://root:your_own_password@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.3'

const client = new MongoClient(connectionURL)

async function main() {
    //use connect method to connect to the server
    // await client.connect();
    
    const db = client.db('task-manager')
    const collectionName = db.collection('users')
    //insertOne method expect a object as its first argument
    // await db.collection('tasks').insertMany([
    //     {
    //         discription: 'book 1',
    //         completed: false,
    //     }, {
    //         discription: 'book 2',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         console.log('unable to connect')
    //     }
    //     console.log(result.ops)
    // })

    // find document
    const query = { age: 23 }
    const users = collectionName.find(query)
    if ((await collectionName.countDocuments(query)) === 0){
        console.log('no documents found!')
    }

    //for await...of syntax: iterate through results rather than returning all documents at once.
    // for await (const doc of users) {
    //     console.dir(doc)
    // }

    // all documents matched by a query to be held in memory at the same time
    console.log(await users.toArray())
}

main()
    .then(console.log)
    .catch(console.dir)
    .finally(() => client.close());
