const inquirer = require('inquirer');
const employee = require('../../models/Employee');


const updateEmpRole = () => {
    return new Promise(resolve => {
        inquirer
            .prompt([{
                    name: 'employee_id',
                    type: 'rawlist',
                    message: "Choose Employee: ",
                    choices() {
                        const choiceArray = [];
                        return new Promise((resolve, reject) => {
                            employee.findAll().then((res) => {
                                res.forEach((item) => {
                                    const choiceItem = {};
                                    choiceItem.value = item.employee_id;
                                    choiceItem.name = item.first_name + " " + item.last_name;
                                    choiceArray.push(choiceItem);
                                })
                                resolve(choiceArray);
                            })
                        })
                    }
                },
                {
                    name: 'manager',
                    type: 'rawlist',
                    message: "Choose Employee New Manager: ",
                    choices() {
                        const choiceArray = [];
                        return new Promise((resolve, reject) => {
                            employee.findAll().then((res) => {
                                res.forEach((item) => {
                                    const choiceItem = {};
                                    choiceItem.value = item.employee_id;
                                    choiceItem.name = `${item.first_name}  ${item.last_name}`;
                                    choiceArray.push(choiceItem);
                                })
                                resolve(choiceArray);
                            })
                            // choiceArray.push(null);
                        })
                    }
                },
            ])
            .then((updateRoleData) => {
                employee.update({
                        manager_id: JSON.parse(updateRoleData.manager),
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