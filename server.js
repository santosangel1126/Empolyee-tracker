const inquirer = require ('inquirer');
const { connection } = require('.df/connection');
require('console.table');
const db = require('./db/db');

const question = [
    {
     type: 'list',
     name: 'choices',
     message: 'Where Would you like yo start?',
     choices: ['View all Departments',
              'View all Roles',
            'View all Empolyees',
        'Add Department',
    'Add New Employee',
    'Update Employee Role',
'Exit'
]
},
]
function start() {
    inquirer.prompt(questions)
    .then((answers)=> {
const {choices } = answers;
if(choices === "view all Departments") {
    viewAllDepartments();
}
if (choices === "View all Roles"){
    viewAllRoles();
}
if(choices === "View all Employees"){
    viewAllEmployees();
}
if(choices === "Add Department"){
    addDepartment();
}
if(choices === "Add New Role "){
    addRole();
}
if(choices === " Add New Employee"){
    addEmployee();
}
if(choices === " Update Employee Role "){
    updateEmployee();
}
if(choices === "Exit") {
    connection.end();
}
    })
}

// View all Departments 
async function viewAllDepartments(){
    const departments = await db.viewDepartments();
    console.table(departments);
    start();
}

// View All Roles 
async function viewAllRoles(){
    const roles = await db.viewAllRoles();
    console.table(roles);
    start();
}

//View all Employees 
async function viewAllEmployees(){
    console.table(addEmployees);
    start();
}

// Create new Department 
newDepartment = () => {
    return inquirer.prompt([{
        type: ' input',
        name: 'addDept',
        message: " What department would you like to add?",
        validate: addDept => {
            if (addDept){
                return true;
            }else {
                console.log('Pleas enter a department name');
                return false;
            }
        }
    }
  ])
}
async function addDepartment(){
    newDepartment().then(response =>
        {
            const department = db.addDepartment(response.addDept);
            console.table(department);
            start();
        })}

        // Create new Role 
        newRole = () => {
            return inquirer
            .prompt([
                {
                    type: "input",
                    message: "New role name",
                    name: "roleName"
                },
                {
                    type:"input",
                    message: "What is the salary for this role?",
                    name: "deptID"
                }
            ])
        }
        async function addRole(){
            newrole().then (response =>
            {

                newRole().then(response =>
                {
                    const role = db.addRole(response.roleName, response.salaryTotal,response.deptID);
                    console.table(role);
                })
            })

            }
        