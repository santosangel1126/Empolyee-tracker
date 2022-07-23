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
                    start();
                })
            });

            }

            //create new Employeee 
            newEmployee = () => {
                return inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Employee's First Name",
                        name: 'first_name'
                    },
                    {
                        type:'input',
                        message: "Employee's Last Name",
                        name: 'last_name'
                    },
                    {
                        type:'input',
                        message:"Employee's Manager's ID",
                        name: "manager_id"
                    }
                ])
            }
            async function addEmployee(){
                newEmployee().then(response =>
                    {
                        const employee = db.addEmployee(response.first_name, response.last_name, response.role_id, response.manager_id)
                        console.table(employee);
                    })
            }

            //Update Employee 
            async function updateEmployee(){
                //View all the employees
                const employees = await db.viewAllEmployees();
                //View all the roles 
                const roles = await db.viewAllRoles();
                const employeeName = [];
                const employeeRole = [];

                // Display employee list 
                const list = employees.forEach(employee => {
                    empolyeeName.push(employee.fisrt_name)
                });
                //Update new role 
                const updateRole = roles.foreach(role => {
                    employeeRole.push(role.title)
                });

                inquirer.prompt([
                    {
                        type:'list',
                        name:'name',
                        message:'Which employee would you like to update?',
                        choices: employeeName
                
                    },
                    {
                        type: 'list',
                        name: 'role',
                        message: "Which employee's new role?",
                        choices: employeeRole
                    }
                ]).then((answer) =>{
                    //store the new role_id and the employeee id 
                    let newTitleId, employeeId;
                    // store the new role_id that matches the role title 
                    roles.forEach((role)=>{
                        if(answer.role === role.title) {
                            newTitleId = role.id;
                        }
                    });
                    //store the employeeId that matches the first name 
                    employees.forEach((employee)=>{
                        if(answer.name === employee.fisrt_name) {
                            employeeId = employeeId
                        }
                    })
                    //Updates employee new role 
                    db.updateEmployeeRole(employeeId, newTitleId);
                    start();
                })
                
            }
        
start();