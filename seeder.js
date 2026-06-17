// seeder.js
const { MongoClient } = require('mongodb');

async function seed() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error('MONGO_URI not set');
    process.exit(1);
  }

  // Derive DB name from URI path if present, otherwise default to 'test'
  let dbName = 'test';
  try {
    const path = uri.split('?')[0].split('/').pop();
    if (path) dbName = path;
  } catch (e) {}

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db(dbName);

    // Example seed collection and documents — replace or extend as needed
    const planets = db.collection('planets');
    const docs = [
      { name: 'Mercury', order: 1 },
      { name: 'Venus', order: 2 },
      { name: 'Earth', order: 3 },
      { name: 'Mars', order: 4 },
      { name: 'Jupiter', order: 5 },
      { name: 'Saturn', order: 6 },
      { name: 'Uranus', order: 7 },
      { name: 'Neptune', order: 8 }
    ];

    for (const d of docs) {
      await planets.updateOne({ name: d.name }, { $set: d }, { upsert: true });
    }

    console.log('Seeding complete');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed', err);
    process.exit(2);
  } finally {
    await client.close();
  }
}

seed();
