DROP DATABASE IF EXISTS managestudents;
CREATE DATABASE managestudents;
USE managestudents;



CREATE TABLE student (
  id INTEGER UNIQUE AUTO_INCREMENT,
  firstName VARCHAR(20),
  lastName VARCHAR(140),
  Age VARCHAR(140),
  PRIMARY KEY (id)
);
