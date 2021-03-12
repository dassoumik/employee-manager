const initial = require('./initial');
const format = require('./format');
const inquirer = require('inquirer');
const employee = require('../../models/Employee');

const viewByManager = async () => {
    return new Promise(resolve => {
        employee.findAll({ attributes: ['manager_id', 'first_name', 'last_name',],
            order: [['manager_id', 'ASC']]
        }).then(async (employeeData) => {
                await format(employeeData);
                resolve(true);
            })
            .catch((err) => console.error(err));
    });
}

module.exports = viewByManager;