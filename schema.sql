DROP DATABASE IF EXISTS managestudent;
CREATE DATABASE managestudent;
USE managestudent;

DROP TABLE IF EXISTS student;

CREATE TABLE student (
  id INTEGER UNIQUE AUTO_INCREMENT,
  firstName VARCHAR(20),
  lastName VARCHAR(140),
  Age VARCHAR(140),
  PRIMARY KEY (id)
)
INSERT INTO student (firstName,lastName,Age) VALUES("fawez","ferjaoui",28);