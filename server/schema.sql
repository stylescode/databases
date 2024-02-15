DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS rooms;

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  room_name VARCHAR(40) NOT NULL
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(40) NOT NULL
);

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  created_by INT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  user_message VARCHAR(140) NOT NULL,
  room INT NOT NULL,
  FOREIGN KEY (room) REFERENCES rooms(id),
  FOREIGN KEY (created_by) REFERENCES users(id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

