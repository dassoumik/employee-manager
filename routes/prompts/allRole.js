const initial = require('./initial');
const format = require('./format');
const inquirer = require('inquirer');
const role = require('../../models/Role');

const allRole = async () => {
    role.findAll().then((RoleData) => {
         format(RoleData);
        //  initial();
         return true;
    })
    .catch((err) => console.error(err));
}

module.exports = allRole;