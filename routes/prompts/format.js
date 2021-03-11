const cTable = require('console.table');

function format(resultSet) {
    console.table(resultSet);
    return true;
}

module.exports = format;