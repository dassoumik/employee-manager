const initial = require('./initial');
const format = require('./format');
const inquirer = require('inquirer');
const employee = require('../../models/Department');

const allDepartment = async () => {
    employee.findAll().then((departmentData) => {
         format(departmentData);
        //  initial();
         return true;
    })
    .catch((err) => console.error(err));
}

module.exports = allDepartment;