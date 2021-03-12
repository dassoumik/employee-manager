const initial = require('./initial');
const format = require('./format');
const inquirer = require('inquirer');
const employee = require('../../models/Employee');

const allEmployee = async () => {
    return new Promise(resolve => {
        employee.findAll().then(async (employeeData) => {
                await format(employeeData);
                resolve(true);
            })
            .catch((err) => console.error(err));
    });
}

module.exports = allEmployee;