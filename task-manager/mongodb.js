//CRUD create read update delete

const mongodb = require('mongodb')
//initialize the connection
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect  to database')
    }

    console.log('Connected correctly!')
})

