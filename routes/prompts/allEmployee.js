const format = require('./format');
const employee = require('../../models/Employee');

const allEmployee = async () => {
    return new Promise(async resolve => {
        employee.findAll()
            .then(async (employeeData) => {
                await format(employeeData);
                resolve(true);
            })
            .catch((err) => console.error(err));

    })
}

module.exports = allEmployee;