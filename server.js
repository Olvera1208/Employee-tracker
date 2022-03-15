const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');

// creates connection to sql database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password',
  database: 'employees_db'
})

// prompts user with list of options to choose from
const beginPrompt = () => {
  inquirer
    .prompt({
      name: 'beginPrompt',
      type: 'list',
      message: 'Welcome to our employee database! What would you like to do?',
      choices: [
        'View all employees',
        'View all roles',
        'Add an employee',
        'View all departments',
        'Add a department',
        'Add a role',
        'Update employee role',
      ]
    })
    .then((answers) => {
      switch (answers.beginPrompt) {
        case 'View all employees':
          viewAllDepartments();
          break;
        case 'View all roles':
          viewAllEmployees();
          break;
        case 'Add an employee':
          addEmployee();
        case 'View all departments':
          viewRoles();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Quit':
          quit();
      }
    });
};

// view all departments
const viewAllDepartments = () => {
  db.query('SELECT * FROM department', (err, res) => {
    if (err) {
    } else {
      console.table(res)
    }
    beginPrompt();
  })
};


// view all employees 
const viewAllEmployees = () => {
  db.query('SELECT first_name, last_name FROM employee', (err, res) => {
    if (err) {
    } else {
      console.table(res)
    }
    beginPrompt();
  })
};

// view all roles in the database
const viewRoles = () => {
  db.query('SELECT title FROM role', (err, res) => {
    if (err) {
    } else {
      console.table(res)
    }
    beginPrompt();
  })
};

// add an employee to the database
const addEmployee = () => {
  inquirer
    .prompt([{
        name: 'first_name',
        type: 'input',
        message: "What is the employee's fist name? ",
      },
      {
        name: 'last_name',
        type: 'input',
        message: "What is the employee's last name? "
      },
      {
        name: 'manager_id',
        type: 'input',
        message: "What is the employee's manager's ID? "
      },
    ])
    .then((answers) => {
      db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) values ('${answers.firstName}', '${answers.lastName}', '${answers.newRoleId}', '${answers.newManId}')`,
        (err, res) => {
          if (err) {
          } else {
            console.table(res)
          }
          beginPrompt();
        });
    });
};

// add a department to the database
const addDepartment = () => {
  inquirer
    .prompt([{
      name: 'newDepartment',
      type: 'input',
      message: 'Which department would you like to add?'
    }])
    .then((answers) => {
      db.query(`INSERT INTO department(name) values ('${answers.newDepartment}')`, (err, res) => {
        if (err) {
        } else {
          console.table(res)
        }
        beginPrompt();
      });
    });
};


// add a role to the database
const addRole = () => {

  inquirer
    .prompt([{
        name: 'new_role',
        type: 'input',
        message: "What new role would you like to add?"
      },
      {
        name: 'salary',
        type: 'input',
        message: 'What is the salary of this role? (Enter a number)'
      },
      {
        type: "input",
        name: "newDepId",
        message: "Enter Department ID",
      }
    ])
    .then((answers) => {
      db.query(`INSERT INTO role(title, salary, department_id) values ('${answers.newRole}', '${answers.newSalary}', '${answers.newDepId}')`,
        (err, res) => {
          if (err) {
          } else {
            console.table(res)
          }
          beginPrompt();
        });
    });
};


const quit = () => {
  process.exit();
};

beginPrompt();