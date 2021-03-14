const inquirer = require('inquirer');
const department = require('../../models/Department');

const addDepartment = () => {
  return new Promise(resolve => {
    inquirer
      .prompt([{
        name: 'dept_name',
        type: 'input',
        message: "Enter Department Name: "
      }, ])
      .then((departmentData) => {
        department.create({
            dept_name: departmentData.dept_name,
          }, )
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