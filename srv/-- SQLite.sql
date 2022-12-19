-- SQLite
DROP TABLE user;
CREATE TABLE user (
   uid INTEGER PRIMARY KEY AUTOINCREMENT,
   username text NOT NULL,
   password text NOT NULL
);
PRAGMA table_info('user');
INSERT INTO user (username, password) VALUES ('admin', '1234');
SELECT * FROM user;
DELETE FROM user WHERE uid = 1;
