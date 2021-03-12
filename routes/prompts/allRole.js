const format = require('./format');
const inquirer = require('inquirer');
const role = require('../../models/Role');

const allRole = async () => {
    return new Promise(resolve => {
        role.findAll().then(async (RoleData) => {
                await format(RoleData);
                resolve(true);
            })
            .catch((err) => console.error(err));
    });
}

module.exports = allRole;