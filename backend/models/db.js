const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://ahmadelraqab:zkSCjNYfTehBntlq@cluster0.0twja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function connect() {

    try {
        await client.connect();

    } catch (e) {
        console.error(e);
    }

    return client
}

connect()

module.exports = client