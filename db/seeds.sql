USE employee_DB;

INSERT INTO department (name)
VALUES
('Operations'),
('Analytical'),
('Marketing'),
('Executive'),
('Production'),

INSERT INTO  role (title, salary, department_id)
VALUES
('Associate', 30000,1),
('Supervisor', 45000, 3),
('Lead', 38000, 2),
('Floor Manager', 55000, 1),
('Director', 65000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Fatima', 'Hernandez', 1, NULL),
('Edd-Arlo', "Garcia", 1, 1),
('Ashley', 'Santos', 1, 2),
('Christopher', 'Rodriguez',3 ,2),
('AmaBeli', 'Rodriguez', 5, 2);