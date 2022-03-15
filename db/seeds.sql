
INSERT INTO department (id,name)
VALUES 
(1,'Systems and Technology'),
(2,'gamer specialist'),
(3,'Legal'),
(4,'Engineering');

INSERT INTO role (title, salary, department_id)
VALUES
('Legal Team Lead', 78000, 1),
('Software Engineer', 67000, 2),
('Web Developer', 30000, 3),
('games Rep', 40000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Isiah', 'Olvera', 1, null),
('Peter', 'Parker', 2, 1),
('Tony', 'Stark', 3, null),
('Steve', 'Rogers', 4, 1);

