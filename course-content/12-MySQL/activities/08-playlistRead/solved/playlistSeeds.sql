DROP DATABASE IF EXISTS play_listDB;
CREATE DATABASE play_listDB;

USE play_listDB;

CREATE TABLE songs(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45),
  artist VARCHAR(45),
  genre VARCHAR(45),
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Human", "Krewella", "Dance");

INSERT INTO songs (title, artist, genre)
VALUES ("TRNDSTTR","Black Coast", "Dance");

INSERT INTO songs (title, artist, genre)
VALUES ("Who's Next", "The Who", "Classic Rock");

INSERT INTO songs (title, artist, genre)
VALUES ("Yellow Submarine", "The Beatles", "Classic Rock");

