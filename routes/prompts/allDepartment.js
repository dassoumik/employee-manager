const initial = require('./initial');
const format = require('./format');
const inquirer = require('inquirer');
const department = require('../../models/Department');

const allDepartment = async () => {
    return new Promise(resolve => {
        department.findAll().then(async (departmentData) => {
                await format(departmentData);
                resolve(true);
            })
            .catch((err) => console.error(err));
    });
}

module.exports = allDepartment;