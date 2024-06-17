const neo4j = require('neo4j-driver');
require('dotenv').config(); // Load environment variables from .env file

// Debug: Print environment variables to ensure they are loaded correctly
console.log('NEO4J_URI:', process.env.NEO4J_URI);
console.log('NEO4J_USER:', process.env.NEO4J_USER);
console.log('NEO4J_PASSWORD:', process.env.NEO4J_PASSWORD);

const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

const session = driver.session();

async function testConnection() {
  try {
    const result = await session.run('RETURN "Connection successful" AS message');
    console.log(result.records[0].get('message'));
  } catch (error) {
    console.error('Connection failed', error);
  } finally {
    await session.close();
    await driver.close();
  }
}

testConnection();
