-- Drops the databases if exists currently --
DROP DATABASE IF EXISTS employee_db;

-- Creates the database --
CREATE DATABASE employee_db;

-- Makes it so all of the following code will affect employee_db --
USE employee_db;

-- Creates the table "department" within employee_db --
CREATE TABLE department (
  dept_id INT AUTO_INCREMENT NOT NULL,
  dept_name VARCHAR(30),
  PRIMARY KEY(dept_id)
);

-- Creates the table "role" within employee_db --
CREATE TABLE role (
  role_id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL,
  dept_id INT,
  FOREIGN KEY(dept_id) REFERENCES department(dept_id),
  PRIMARY KEY(role_id)
);

-- Creates the table "employee" within employee_db --
CREATE TABLE employee (
  employee_id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id  INT,
  manager_id INT,
  FOREIGN KEY(role_id) REFERENCES role(role_id),
  FOREIGN KEY(manager_id) REFERENCES employee(employee_id),
  PRIMARY KEY(employee_id)
);
