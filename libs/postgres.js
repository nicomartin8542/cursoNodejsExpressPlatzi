import pg from 'pg';

const getConnection = async () => {
  const { Client } = pg;
  const client = new Client({
    host: 'localhost',
    port: 5433,
    user: 'nico',
    password: 'admin123',
    database: 'my_store',
  });

  await client.connect();
  return client;
};

export default getConnection;
