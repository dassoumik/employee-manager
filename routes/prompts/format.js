const cTable = require('console.table');

const format = (dbFetchData) => {
    return new Promise(resolve => {
        formatDisplay = [];
        for (const item of dbFetchData) {
            formatDisplay.push(item.dataValues);
        }
        console.table(formatDisplay);
        resolve(true);
    });
}

module.exports = format;