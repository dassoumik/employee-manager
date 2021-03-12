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
                    type: 'list',
                    message: "Enter Employee New Role: ",
                    choices() {
                        const choiceArray = [];
                        return new Promise((resolve, reject) => {
                            role.findAll().then((res) => {
                                    res.forEach((item) => {
                                        choiceArray.push(`{"role_id": ${item.role_id}, "title": "${(item.title)}"}`);
                                    })
                                    return resolve(choiceArray)
                                })
                                .catch((err) => console.error(err));
                        })
                    }
                }
            ])
            .then((updateRoleData) => {
                employee.update({
                    role_id: JSON.parse(updateRoleData.role).role_id,
                        },
                        {where: {employee_id: updateRoleData.employee_id}},
                    )

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