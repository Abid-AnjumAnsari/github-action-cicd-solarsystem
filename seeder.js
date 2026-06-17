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
    const planets = db.collection('planets');

    const docs = [
      { id: 0, name: 'Sun', description: 'The star at the center of our Solar System.', image: '/images/sun.png', velocity: '0 km/h', distance: '0 km' },
      { id: 1, name: 'Mercury', description: 'The smallest planet, closest to the Sun.', image: '/images/mercury.png', velocity: '47.36 km/s', distance: '57.9 million km' },
      { id: 2, name: 'Venus', description: 'The hottest planet with a thick toxic atmosphere.', image: '/images/venus.png', velocity: '35.02 km/s', distance: '108.2 million km' },
      { id: 3, name: 'Earth', description: 'Our home planet, the only known place with life.', image: '/images/earth.png', velocity: '29.78 km/s', distance: '149.6 million km' },
      { id: 4, name: 'Mars', description: 'The red planet, known for its rusty surface.', image: '/images/mars.png', velocity: '24.07 km/s', distance: '228 million km' },
      { id: 5, name: 'Jupiter', description: 'The largest planet, a gas giant.', image: '/images/jupiter.png', velocity: '13.07 km/s', distance: '778.5 million km' },
      { id: 6, name: 'Saturn', description: 'Famous for its prominent ring system.', image: '/images/saturn.png', velocity: '9.68 km/s', distance: '1.434 billion km' },
      { id: 7, name: 'Uranus', description: 'An ice giant with a tilted rotation axis.', image: '/images/uranus.png', velocity: '6.80 km/s', distance: '2.871 billion km' },
      { id: 8, name: 'Neptune', description: 'The farthest planet, a cold ice giant.', image: '/images/neptune.png', velocity: '5.43 km/s', distance: '4.495 billion km' }
    ];

    for (const d of docs) {
      await planets.updateOne({ id: d.id }, { $set: d }, { upsert: true });
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