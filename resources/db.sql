-- Database creation
DROP DATABASE IF EXISTS restaurant;
CREATE DATABASE IF NOT EXISTS restaurant;
USE restaurant;

-- Creation of the tables

CREATE TABLE details(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) UNIQUE NOT NULL,
    direccion VARCHAR(30) NOT NULL,
    telefono INT(9) UNIQUE NOT NULL,
    created_at DATETIME,
    updated_at DATETIME
);