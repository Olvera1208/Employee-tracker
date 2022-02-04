
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
('Legal Team Lead', 78000, 1),
('Software Engineer', 67000, 2),
('Web Developer', 30000, 3),
('Manager', 15000, 4),
('Lead Engineer', 10000, 5),
('Sales Rep', 40000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Isiah', 'Olvera', 1, 980),
('Peter', 'Parker', 2, 760),
('Tony', 'Stark', 3, 445),
('Steve', 'Rogers', 4, 157),
('Peter', 'Quill', 5, 853),
('Clint', 'Barton', 6, 657);