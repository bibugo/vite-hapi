import Database from 'better-sqlite3';
import config from '../config/index.js';

const db = new Database(config.database.filename, { verbose: console.log });
db.pragma('journal_mode = WAL');

export default db;
