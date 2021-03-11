const inquirer = require('inquirer');
const allEmployee = require('./allEmployee');

const initial = () => {

    inquirer
        .prompt([{
            name: 'choice',
            type: 'rawlist',
            choices: [
                "Add Employees",
                "Add Departments",
                "Add Roles",
                "View All Employees",
                "View All Departments",
                "View All Roles",
                "Update Employee Role",
                "Exit"
            ],
            message: 'What would you like to do?',
        }, ])
        .then(async (answer) => {
            console.log(answer.choice);
            // return answer.choice;
        //     // let status;
        //     // const connected = new Promise((resolve, reject) => {
        //     //     if (connection()) 
        //     //     return resolve();
        //     //     else
        //     //     return reject();});
                
            
            switch (answer.choice) {
        //     //     case ("Add Employees"):
        //     //         status = addEmployee();
        //     //         break;
        //     //     case ("Add Departments"):
        //     //         status = addDepartment();
        //     //         break;
        //     //     case ("Add Roles"):
        //     //         status = addRole();
        //     //         break;
                case ("View All Employees"):
                    status = allEmployee();
                    break;
        //     //     case ("View All Departments"):
        //     //       status = async () => { await dept.viewAllDepartment;
        //     //             console.log("back from viewALLdept");
        //     //             // })    
        //     //             // .then(() {
        //     //             }   
        //     //             await status(); 
        //     //             formatOutput(status);
        //     //             initialOptions();
        //     //             // })
        //     //             // .catch(err) (console.error(err));
        //     //         break;
        //     //     case ("View All Roles"):
        //     //         status = viewAllRole();
        //     //         break;
        //     //     case ("Update Employee Role"):
        //     //         status = updateEmpRole();
        //     //         break;
        //     //     case ("Exit"):
        //     //         mDB.end();
        //     //         status = true;
        //     //         break;
        //     //     default:
        //     //         status = false;
        //     //         break;
        //     // }
        //     // return status;
            }    
    })
        .catch((err) => console.error(err));
        };
module.exports = initial;