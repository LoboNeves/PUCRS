const { MongoClient } = require('mongodb');

let client = null;
let database = null;

const connect = async (uri, dbName) => {
    if (database) return database;
    client = new MongoClient(uri, { maxPoolSize: 10 });
    await client.connect();
    database = client.db(dbName);
    console.log("Connected to MongoDB");
    return database;
};

function getDb() {
    if (!database) throw new Error("Database not connected");
    return database;
}

function getCollection(name) {
    return getDb().collection(name);
}

async function close() {
    if (client) await client.close();
    client = null;
    database = null;
}

module.exports = { connect, getDb, getCollection, close };