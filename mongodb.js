const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const database='e-com';
const client=new MongoClient(url);

async function dbConnect(){
    let result= await client.connect();
    let db=result.db(database);
    return db.collection('products');
    // let collection=db.collection('products');
    // let response=await collection.find({}).toArray();
    // console.log(response);
}

module.exports=dbConnect;