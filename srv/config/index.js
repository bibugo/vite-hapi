export default {
  server: {
    host: '127.0.0.1',
    port: process.env.PORT || 3000,
  },
  JWT: {
    secret: process.env.JWT_SECRET || 'some_shared_secret',
    algorithm: 'HS512',
    maxAgeSec: 14400, // 4 hours
  },
  database: {
    filename: './db/sqlite/db.sqlite3',
  },
};
