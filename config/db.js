import dotenv from 'dotenv';
dotenv.config(); // Load env vars before creating pool

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

pool.on('connect', () => {
  console.log('‚úÖ Connected to Neon Postgres database');
});

pool.on('error', (err) => {
  console.error('‚ùå Unexpected database error:', err);
  process.exit(-1);
});

export default {
  query: (text, params) => pool.query(text, params),
  pool
};
