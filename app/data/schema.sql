DROP DATABASE IF EXISTS friends_db;

CREATE DATABASE friends_db;

USE friends_db;

CREATE TABLE profiles (
user_id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
photo VARCHAR(100),
scores VARCHAR(50) NOT NULL,
PRIMARY KEY (user_id)
);

CREATE TABLE questions (
  question_id INT NOT NULL AUTO_INCREMENT,
  receive_id INT,
  o1 INT,
  o2 INT,
  o3 INT,
  o4 INT,
  o5 INT
);