const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://ayana2004antony:ayana1234@cluster-1.cm748cj.mongodb.net/washbay-cms?retryWrites=true&w=majority&appName=Cluster-1";

async function run() {
  try {
    const client = new MongoClient(uri);

    await client.connect();

    console.log("✅ MongoDB Connected Successfully!");

    await client.close();
  } catch (err) {
    console.error("❌ Connection Error:");
    console.error(err);
  }
}

run();