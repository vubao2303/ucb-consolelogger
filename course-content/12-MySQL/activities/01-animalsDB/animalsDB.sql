-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS animals_db;
-- Creates the "animals_db" database --
CREATE DATABASE animals_db;

-- Makes it so all of the following code will affect animals_db --
USE animals_db;

-- Creates the table "people" within animals_db --
CREATE TABLE people (
  id INTEGER NOT NULL AUTO_INCREMENT,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  has_pet BOOLEAN NOT NULL,
  -- Makes a sting column called "pet_name" --
  pet_name VARCHAR(30),
  -- Makes an numeric column called "pet_age" --
  pet_age INTEGER(10),
  PRIMARY KEY (id)
);



-- Creates new rows containing data in all named columns --
INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Jerome", TRUE, "Farley", 5);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("B", TRUE, "Fluffy", 06);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Sammy", TRUE, "Feynman",08);

INSERT INTO people (name, has_pet)
VALUES ("Muhammad", FALSE);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Muhammad", TRUE, "Birdy",08);

-- Updates the row where the column name is peter --
-- UPDATE people
-- SET has_pet = true, pet_name = "Fluffy McFluff Fluff", pet_age = 2
-- WHERE name = "Muhammad";

-- Updates the row where the column name is peter --
UPDATE people
SET has_pet = true, pet_name = "Fluffy McFluff Fluff", pet_age = 2
WHERE id = 4;


SELECT * FROM people;




