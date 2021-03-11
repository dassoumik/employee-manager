const initial = require('./initial');
const inquirer = require('inquirer');
// const connection = require('../../config/connection');
// const { Sequelize } = require('sequelize');
console.log("in all Employee 1");
// const employee = require('../../models/Employee');
const employee = require('../../models/Employee');
// const { Model, DataTypes } = require('sequelize');



 const allEmployee = async () => {
     console.log("all employee");
    // em.query('SELECT * FROM employee', (err, res) => {
    //     if (err) throw err;
    //     // Log all results of the SELECT statement
    employee.findAll().then((employeeData) => {
console.log(employeeData);
        // format(employeeData);
        // initial();
        // return false;
    })
    .catch((err) => console.error(err));
}

module.exports = allEmployee;