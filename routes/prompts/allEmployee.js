const initial = require('./initial');
const format = require('./format');
const inquirer = require('inquirer');
const employee = require('../../models/Employee');

const allEmployee = async () => {
    employee.findAll().then((employeeData) => {
         format(employeeData);
        //  initial();
         return true;
    })
    .catch((err) => console.error(err));
}

module.exports = allEmployee;