const inquirer = require('inquirer');
const employee = require('../../models/Employee');
const role = require('../../models/Role');

const deleteRole = () => {
    return new Promise(resolve => {
            inquirer
                .prompt([{
                    name: 'role_id',
                    type: 'rawlist',
                    message: "Choose Role to be deleted: ",
                    choices() {
                        const choiceArray = [];
                        return new Promise(resolve => {
                            role.findAll({
                                attributes: ['role_id', 'title']
                            }).then(async (result) => {
                                result.forEach((item) => {
                                    const choiceItem = {};
                                    choiceItem.value = item.role_id;
                                    choiceItem.name = item.title;
                                    choiceArray.push(choiceItem);
                                })
                                resolve(choiceArray);
                            })
                        })
                    }
                }, ])
                .then((roleData) => {
                    role.destroy({
                            where: {
                                role_id: [JSON.parse(roleData.role_id)],
                            }
                        }, )
                        .then((roleDestroyData) => {
                            console.log("Role Deleted");
                            resolve(true);
                        })



                })
                .catch((err) => console.error(err));
            return true;
        })

        .catch((err) => console.error(err))
}


module.exports = deleteRole;