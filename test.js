let {MongoClient} = require('mongodb');

async function main(){
    let client = new MongoClient("mongodb+srv://<username>:<password>@cluster0.so1ntwj.mongodb.net/?retryWrites=true&w=majority");
    try{
        await client.connect();
        await listDatabases(client);
    }
    catch(e){
        console.log(e);
    }
    finally{
        await client.close();
    }   
};

main().catch(console.error);

async function listDatabases(client){
    let databaseList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databaseList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
};
