const inquirer = require('inquirer');
const employee = require('../../models/Employee');
const role = require('../../models/Role');

const updateEmpRole = () => {
    return new Promise(resolve => {
        inquirer
            .prompt([{
                    name: 'employee_id',
                    type: 'input',
                    message: "Enter Employee ID: "
                },
                {
                    name: 'role',
                    type: 'rawlist',
                    message: "Enter Employee New Role: ",
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
                            .catch((err) => console.error(err));
                    },
                },
            ])
            .then((updateRoleData) => {
                employee.update({
                        role_id: JSON.parse(updateRoleData.role),
                    }, {
                        where: {
                            employee_id: updateRoleData.employee_id
                        }
                    }, )

                    .then((employeeUpdatedData) => {
                        console.log("Employee Role Updated");
                        resolve(true);
                    })
                    .catch((err) => console.error(err));
                return true;
            })

            .catch((err) => console.error(err))
    });
};

module.exports = updateEmpRole;