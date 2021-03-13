const inquirer = require('inquirer');
const department = require('../../models/Department');
const Role = require('../../models/Role');

const deleteDepartment = () => {
    return new Promise(resolve => {
            inquirer
                .prompt([{
                    name: 'department_id',
                    type: 'rawlist',
                    message: "Choose Department to be deleted: ",
                    choices() {
                        const choiceArray = [];
                        return new Promise(resolve => {

                            department.findAll().then(async (result) => {
                                result.forEach((item) => {
                                    const choiceItem = {};
                                    choiceItem.value = item.dept_id;
                                    choiceItem.name = item.dept_name;
                                    choiceArray.push(choiceItem);
                                })
                                resolve(choiceArray);
                            })
                        })
                    }
                }, ])
                .then((departmentData) => {
                    Role.update({
                        dept_id: null
                    }, {
                        where: {
                            dept_id: [JSON.parse(departmentData.department_id)]
                        }
                    }).then(updRoleData => {
                        department.destroy({
                                where: {
                                    dept_id: [JSON.parse(departmentData.department_id)],
                                }
                            }, )
                            .then((departmentCreatedData) => {
                                console.log("Department Deleted");
                                resolve(true);
                            })
                    })
                })
                .catch((err) => console.error(err));
            return true;
        })
        .catch((err) => console.error(err))
};

module.exports = deleteDepartment;