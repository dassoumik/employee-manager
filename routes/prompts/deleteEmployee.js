const inquirer = require('inquirer');
const employee = require('../../models/Employee');

const deleteEmployee = () => {
    return new Promise(resolve => {
        inquirer
            .prompt([{
                    name: 'employee_id',
                    type: 'rawlist',
                    message: "Choose Employee to be deleted: ",
                    choices() {
                        const choiceArray = [];
                        return new Promise(resolve => {
                            employee.findAll({attributes: ['employee_id', 'first_name', 'last_name']}).then(async (result) => {
                                result.forEach((item) => {
                                    const choiceItem = {};
                                    choiceItem.value = item.employee_id;
                                    choiceItem.name = `${(item.first_name)}  ${(item.last_name)}`;
                                    choiceArray.push(choiceItem);
                                })
                                resolve(choiceArray);
                            })
                        })
                    }
                },
            ])
            .then((employeeData) => {
                employee.destroy({where: {
                        employee_id: [JSON.parse(employeeData.employee_id)],
                 } }, )
                    .then((employeeCreatedData) => {
                        console.log("Employee Deleted");
                        resolve(true);
                    })
                    .catch((err) => console.error(err));
                return true;
            })

            .catch((err) => console.error(err))
    });
};

module.exports = deleteEmployee;