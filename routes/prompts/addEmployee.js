const inquirer = require('inquirer');
const employee = require('../../models/Employee');
const role = require('../../models/Role');

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
                    type: 'rawlist',
                    message: "Enter Employee Role: ",
                    choices() {
                        const choiceArray = [];
                        return new Promise(resolve => {
                            role.findAll().then(async (result) => {
                                result.forEach((item) => {
                                    const choiceItem = {};
                                    choiceItem.name = item.title;
                                    choiceItem.value = item.role_id;
                                    choiceArray.push(choiceItem);
                                })
                                resolve(choiceArray)
                            })

                        })
                    }
                },
                {
                    name: 'manager_id',
                    type: 'rawlist',
                    message: "Enter Employee Manager: ",
                    choices() {
                        const choiceArray = [];
                        return new Promise(resolve => {
                            employee.findAll().then(async (result) => {
                                result.forEach((item) => {
                                    const choiceItem = {};
                                    choiceItem.value = item.employee_id;
                                    choiceItem.name = `${(item.first_name)}  ${(item.last_name)}`;
                                    choiceArray.push(choiceItem);
                                })
                                // console.log(choiceArray)
                                resolve(choiceArray)
                            })
                        })
                    }
                },
            ])
            .then((employeeData) => {
                employee.create({
                        first_name: employeeData.first_name,
                        last_name: employeeData.last_name,
                        role_id: JSON.parse(employeeData.role_id),
                        manager_id: JSON.parse(employeeData.manager_id),
                    }, )
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