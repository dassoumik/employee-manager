const initial = require('./initial');
const format = require('./format');
const inquirer = require('inquirer');
console.log("in all Employee 1");
const employee = require('../../models/Employee');

const allEmployee = async () => {
    employee.findAll().then((employeeData) => {
         format(employeeData);
        // initial();
        // return false;
    })
    .catch((err) => console.error(err));
}

module.exports = allEmployee;