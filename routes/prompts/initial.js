const inquirer = require('inquirer');
const allDepartment = require('./allDepartment');
const allEmployee = require('./allEmployee');
const allRole = require('./allRole');
const addEmployee = require('./addEmployee');
const addDepartment = require('./addDepartment');


let status;

function initial() {

    inquirer
        .prompt([{
            name: 'choice',
            type: 'rawlist',
            choices: [
                "Add Employees",
                "Add Departments",
                "Add Roles",
                "View All Employees",
                "View All Departments",
                "View All Roles",
                "Update Employee Role",
                "Exit"
            ],
            message: 'What would you like to do?',
        }, ])
        .then(async (answer) => {
            console.log(answer.choice);
            // return answer.choice;
            //     // let status;
            //     // const connected = new Promise((resolve, reject) => {
            //     //     if (connection()) 
            //     //     return resolve();
            //     //     else
            //     //     return reject();});


            switch (answer.choice) {
                case ("Add Employees"):
                    status = async () => {
                        const reuslt = await addEmployee();
                        initial();
                    }
                    status();
                    break;
                case ("Add Departments"):
                    status = async () => {
                        const result = await addDepartment();
                        initial();
                    };
                    status();
                    break;
                case ("View All Employees"):
                    try {
                        allEmployee();
                    } catch {
                        (err) => console.error(err)
                    }
                    initial();
                    break;
                case ("View All Departments"):
                    allDepartment();
                    initial();
                    break;
                case ("View All Roles"):
                    allRole();
                    initial();
                    break;
                    //     //     case ("Update Employee Role"):
                    //     //         status = updateEmpRole();
                    //     //         break;
                    //     //     case ("Exit"):
                    //     //         mDB.end();
                    //     //         status = true;
                    //     //         break;
                    //     //     default:
                    //     //         status = false;
                    //     //         break;
                    //     // }
                    //     // return status;
            }
        })
        .catch((err) => console.error(err));
}

module.exports = initial