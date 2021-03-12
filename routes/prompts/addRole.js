const inquirer = require('inquirer');
const role = require('../../models/Role');

const addRole = () => {
    return new Promise(resolve => {
        inquirer
        .prompt([{
                name: 'title',
                type: 'input',
                message: "Enter Role Title: "
            },
            {
                name: 'salary',
                type: 'input',
                message: "Enter Annual Salary: "
            },
            {
                name: 'dept_id',
                type: 'input',
                message: "Enter Department ID: "
            },
        ])
        .then((roleData) => {
            role.create(
                {
                    title: roleData.title,
                    salary: roleData.salary,
                    dept_id: roleData.dept_id,
                },
                
              )
            
                .then((roleCreatedData) => {
                console.log("Role Added");
                resolve(true);
                })
                .catch((err) => console.error(err));
                return true;
            })
    
        .catch((err) => console.error(err))
    });
};

module.exports = addRole;
