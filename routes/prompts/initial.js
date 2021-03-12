const inquirer = require('inquirer');
const allDepartment = require('./allDepartment');
const allEmployee = require('./allEmployee');
const allRole = require('./allRole');
const addEmployee = require('./addEmployee');
const addDepartment = require('./addDepartment');
const addRole = require('./addRole');
const updateEmpRole = require('./updateEmpRole');
const viewByManager = require('./viewByManager');

const {
    sequelize
} = require('../../config/connection');




let status;

function initial() {

    inquirer
        .prompt([{
            name: 'choice',
            type: 'rawlist',
            choices: [
                "Add Employee",
                "Add Department",
                "Add Role",
                "View All Employees",
                "View All Departments",
                "View All Roles",
                "Update Employee Role",
                "View Employees by Manager",
                "Exit"
            ],
            message: 'What would you like to do?',
        }, ])
        .then(async (answer) => {
            console.log(answer.choice);
            switch (answer.choice) {
                case ("Add Employee"):
                    status = async () => {
                        const reuslt = await addEmployee();
                        initial();
                    }
                    status();
                    break;
                case ("Add Department"):
                    status = async () => {
                        const result = await addDepartment();
                        initial();
                    };
                    status();
                    break;
                case ("Add Role"):
                    status = async () => {
                        const result = await addRole();
                        initial();
                    };
                    status();
                    break;
                case ("View All Employees"):
                    status = async () => {
                        const result = await allEmployee();
                        initial();
                    };
                    status();
                    break;
                case ("View All Departments"):
                    status = async () => {
                        const result = await allDepartment();
                        initial();
                    };
                    status();
                    break;
                case ("View All Roles"):
                    status = async () => {
                        const result = await allRole();
                        initial();
                    };
                    status();
                    break;
                case ("Update Employee Role"):
                    status = async () => {
                        const result = await updateEmpRole();
                        initial();
                    };
                    status();
                    break;
                case ("View Employees by Manager"):
                    status = async () => {
                        const result = await viewByManager();
                        initial();
                    };
                    status();
                    break;
                case ("Exit"):
                    status = async () => await sequelize.close();
                    status();
                    break;
                default:
                    status = false;
                    break;
            }
        })
        .catch((err) => console.error(err));
}

module.exports = initial