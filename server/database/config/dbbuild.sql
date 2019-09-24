BEGIN;

DROP TABLE IF EXISTS users, languages, channels, user_channel, user_interest, messages CASCADE;

CREATE TABLE languages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE interests (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  isActive BOOLEAN NOT NULL,
  bio VARCHAR(255),
  avatar_path VARCHAR(255),
  native_lang_id INTEGER NOT NULL REFERENCES languages (id),
  learning_lang_id INTEGER NOT NULL REFERENCES languages (id)
);

CREATE TABLE channels (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE user_interest (
  interest_id INTEGER NOT NULL REFERENCES interests (id),
  user_id INTEGER NOT NULL REFERENCES users (id)
);

CREATE TABLE user_channel (
  channel_id INTEGER NOT NULL REFERENCES channels (id),
  user_id INTEGER NOT NULL REFERENCES users (id)
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users (id),
  channel_id INTEGER NOT NULL REFERENCES channels (id),
  content VARCHAR(255) NOT NULL,
  sent_at TIMESTAMPTZ NOT NULL
);

COMMIT;
