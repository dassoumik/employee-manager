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
  FOREIGN KEY(dept_id) REFERENCES department(dept_id) ON DELETE SET NULL,
  PRIMARY KEY(role_id)
);

-- Creates the table "employee" within employee_db --
CREATE TABLE employee (
  employee_id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id  INT,
  manager_id INT,
  FOREIGN KEY(role_id) REFERENCES role(role_id) ON DELETE SET NULL,
  FOREIGN KEY(manager_id) REFERENCES employee(employee_id) ON DELETE SET NULL,
  PRIMARY KEY(employee_id)
);

INSERT INTO department (dept_name) 
values 
('Software Services'),
('Finance'),
('Human Resource'),
('Admin'),
('Infrastructure');


INSERT INTO role (title, salary, dept_id) 
values 
('Programmer Analyst',80000.00,1),
('Technology Analyst',100000.00,1),
('Technology Archietect',120000.00,1),
('Program Manager',100000.00,1),
('Financial Analyst',60000.00,2),
('Finance Manager',100000.00,2),
('Finance Head',140000.00,2),
('HR Assistant',60000.00,3),
('HR Manager',100000.00,3),
('Admin Assistant',50000.00,4),
('Admin Manager',75000.00,4),
('Infra Assistant',60000.00,5),
('Infra Lead',70000.00,5),
('Infra Manager',80000.00,5);


INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values 
('Binge','Crosby',4,null),
('Bille','Haley',2,1),
('Celiene','Dion',3,2),
('Nick','Jonas',4,1),
('Don','Bradman',6,null),
('Katheriene','Clerk',9,null),
('Bon','Jovi',11,null),
('Timothy','Hudson',14,null),
('Carolyn','Smith',13,9),
('Samule','Dosan',10,7),
('Dorothy', 'Gomes',8,6),
('Katty','Gomez',5,5);