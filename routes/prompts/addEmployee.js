const inquirer = require('inquirer');
const employee = require('../../models/Employee');

const addEmployee = () => {
    return new Promise(resolve => {
    inquirer
        .prompt([{
                name: 'first_name',
                type: 'input',
                message: "Enter Employee First Name: "
            },
            {
                name: 'last_name',
                type: 'input',
                message: "Enter Employee Last Name: "
            },
            {
                name: 'role_id',
                type: 'input',
                message: "Enter Employee Role: "
            },
            {
                name: 'manager_id',
                type: 'input',
                message: "Enter Employee Manager: "
            },
        ])
        .then((employeeData) => {
            employee.create(
                {
                  first_name: employeeData.first_name,
                  last_name: employeeData.last_name,
                  role_id: employeeData.role_id,
                  manager_id: employeeData.manager_id,
                },
                
              )
            
                .then((employeeCreatedData) => {
                console.log("Employee Added");
                resolve(true);
                })
                .catch((err) => console.error(err));
                return true;
            })
    
        .catch((err) => console.error(err))
    });
};

module.exports = addEmployee;
