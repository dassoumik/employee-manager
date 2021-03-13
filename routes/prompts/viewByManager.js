const initial = require('./initial');
const format = require('./format');
const inquirer = require('inquirer');
const employee = require('../../models/Employee');
const choiceArray = [];

const viewByManager = async () => {
    return new Promise(resolve => {
        inquirer
            .prompt([{
                name: "manager",
                type: 'list',
                message: 'Choose one Manager',
                choices() {
                    return new Promise(resolve => {
                        employee.aggregate('manager_id', 'DISTINCT', {
                                plain: false
                            }, {
                                allowNull: false
                            })
                            .then(async (employeeData) => {
                                for (const item of employeeData) {
                                    if (item.DISTINCT != null) {
                                        choiceArray.push(item.DISTINCT);
                                    }
                                }
                                employee.findAll({
                                    where: {
                                        employee_id: choiceArray
                                    }
                                }).then(employeeManager => {
                                    const choiceArray = [];
                                    for (const element of employeeManager) {
                                        const choiceItem = {};
                                        choiceItem.value = element.dataValues.employee_id;
                                        choiceItem.name = `${element.dataValues.first_name} ${element.dataValues.last_name}`;
                                        choiceArray.push(choiceItem);
                                    }
                                    resolve(choiceArray);
                                })
                            }).catch(err => console.error(err));
                    })
                },
            }])
            .then(({
                manager
            }) => {
                employee.findAll({
                    where: {
                        manager_id: manager
                    }
                }).then(async employeeManagerWise => {
                    await format(employeeManagerWise);

                    resolve(true)
                });
            });

    });
};

module.exports = viewByManager;