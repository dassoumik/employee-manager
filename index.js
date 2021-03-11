// const express = require('express');
// const routes = require('./routes');
const sequelize = require('./config/connection');
const initial = require('./routes/prompts/initial');
// const { init } = require('./models/Employee');
const newSequelize = sequelize.sequelize;
const inquirer = require('inquirer');
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(routes);
// const PORT = process.env.PORT || 3001;
// const connection = sequelize.sync({ force: false }).then(() => {});
function start() {
console.log("in start");
// turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
    //   app.listen(PORT, () => console.log('Now listening'));
    //   const initialOptions = () => {
    //     console.log("in initialOption");
    //     inquirer
    //         .prompt([{
    //             name: 'choice',
    //             type: 'rawlist',
    //             choices: [
    //                 "Add Employees",
    //                 "Add Departments",
    //                 "Add Roles",
    //                 "View All Employees",
    //                 "View All Departments",
    //                 "View All Roles",
    //                 "Update Employee Role",
    //                 "Exit"
    //             ],
    //             message: 'What would you like to do?',
    //         }, ])
    //         .then(async (answer) => {
    //             console.log(answer.choice);
    //             let status;
                // const connected = new Promise((resolve, reject) => {
                //     if (connection()) 
                //     return resolve();
                //     else
                //     return reject();});
                    
                
                // switch (answer.choice) {
                //     case ("Add Employees"):
                //         status = addEmployee();
                //         break;
                //     case ("Add Departments"):
                //         status = addDepartment();
                //         break;
                //     case ("Add Roles"):
                //         status = addRole();
                //         break;
                //     case ("View All Employees"):
                //         status = viewAllEmployee();
                //         break;
                //     case ("View All Departments"):
                //       status = async () => { await dept.viewAllDepartment;
                //             console.log("back from viewALLdept");
                //             // })    
                //             // .then(() {
                //             }   
                //             await status(); 
                //             formatOutput(status);
                //             initialOptions();
                //             // })
                //             // .catch(err) (console.error(err));
                //         break;
                //     case ("View All Roles"):
                //         status = viewAllRole();
                //         break;
                //     case ("Update Employee Role"):
                //         status = updateEmpRole();
                //         break;
                //     case ("Exit"):
                //         mDB.end();
                //         status = true;
                //         break;
                //     default:
                //         status = false;
                //         break;
                // }
                // return status;
            // })
            // .catch((err) => console.error(err));
            // };

    // });
    initial();
    return false;
};
try {
if (sequelize.connected) {
  start();
}
} catch (error)
{
    console.error('Unable to connect to the database:', error);
}


// turn on routes


