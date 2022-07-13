import mysql from 'mysql2';

const pool = mysql.createPool({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
});

export const promisePool = pool.promise();
