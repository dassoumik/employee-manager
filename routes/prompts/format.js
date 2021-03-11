const cTable = require('console.table');

const format = (dbFetchData) => {
    formatDisplay = [];
    for(const item of dbFetchData){
        formatDisplay.push(item.dataValues);
    }
    console.table(formatDisplay);
    return true;
}

module.exports = format;