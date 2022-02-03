
INSERT INTO department (name)
VALUES 
('Systems and Technology'),
('Finance'),
('Legal'),
('Human Resources'),
('Engineering'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Legal Team Lead', 90000, 1),
('Software Engineer', 70000, 2),
('Web Developer', 50000, 3),
('Manager', 70000, 4),
('Lead Engineer', 60000, 5),
('Sales Rep', 40000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Isiah', 'Olvera', 1, 458),
('Peter', 'Parker', 2, 276),
('Tony', 'Stark', 3, 486),
('Steve', 'Rogers', 4, 126),
('Peter', 'Quill', 5, 724),
('Clint', 'Barton', 6, 157);