DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;

--department table 
CREATE TABLE department( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name: VARCHAR(30) NOT NULL;
);

-- role table
CREATE TABLE role(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER,
    INDEX dep_ind (department_id),
    CONSTRAINT fk_departtment FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

-- empolyee table

CREATE TABLE employee(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    INDEX role_ind (role_id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    manager_id INTEGER,
    INDEX manager_ind (manager_id),
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);