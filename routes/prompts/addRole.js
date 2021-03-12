const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const role = require('../../models/Role');
const department = require('../../models/Department');


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
                    type: 'rawlist',
                    message: "Enter Department ID: ",
                    choices() {
                        const choiceArray = [];
                        return new Promise(resolve => {
                            department.findAll().then((result) => {
                                result.forEach(item => {
                                    choiceItem = {};
                                    choiceItem.name = item.dept_name;
                                    choiceItem.value = item.dept_id;
                                    choiceArray.push(choiceItem);
                                })
                                resolve(choiceArray);
                            })
                        })
                    }
                },
            ])
            .then((roleData) => {
                role.create({
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