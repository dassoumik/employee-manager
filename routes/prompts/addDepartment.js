const initial = require('./initial');
const callInitial = require('./callInitial');
const inquirer = require('inquirer');
// const {sequelize} = require('../../config/connection');
const department = require('../../models/Department');
console.log(typeof(initial), "initial");

const addDepartment = () => {
    return new Promise(resolve => {
    inquirer
        .prompt([{
            name: 'dept_name',
            type: 'input',
            message: "Enter Department Name: "
        }, ])
        .then((departmentData) => {
            department.create(
                {
                  dept_name:departmentData.dept_name,
                },
              )
                .then((departmentCreatedData) => {
                console.log("Department Added!");
                // callInitial();
                resolve(true);
                })
                .catch((err) => console.error(err));
                return true;
            })
    
        .catch((err) => console.error(err))
})
};

module.exports = addDepartment;
