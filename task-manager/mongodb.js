//CRUD create read update delete

//initialize the connection
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// using distructure, grab xxx from object mongodb
const { MongoClient, ObjectID } = require('mongodb')


const connectionURL = 'mongodb://root:your_own_password@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.3'
const databaseName = 'task-manager'


const client = new MongoClient(connectionURL)

async function main() {
    //use connect method to connect to the server
    await client.connect();
    console.log('connected successfully to the server!')

    const db = client.db(databaseName)
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
    const find = await db.collection('users').find({ age: '23' })
    console.log(find.toArray((user) => {return user}))
    return 'done'
}

main()
    .then(console.log)
    // .catch(console.error)
    // .finally(() => client.close());
