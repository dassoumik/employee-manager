const inquirer = require('inquirer');
const department = require('../../models/Department');
const role = require('../../models/Role');
const employee = require('../../models/Employee');


const deptBudget = () => {
    return new Promise(resolve => {
            
        employee.findAll().then(empFindAllData => {
            
        })
        .catch((err) => console.error(err))
});
}
module.exports = deptBudget;