//  Dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
// Modules
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class Employee{
    constructor(employeeName, id, email){
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
        console.log("App Start")
        }
    promptUser(){
        inquirer
        .prompt ([
            {
                type: "input",
                name: "employeeName",
                message: "Enter Employee Name."
            },
            {
                type:"input",
                name: "id",
                message: "Enter Employee's ID"
            },
            {
                type:"input",
                name: "email",
                message: "Enter Employee Email "
            }
        ]) 
        .then( val => {
            employeeName = val.employeeName;
            id =  val.id;
            email = val.email;
        })
    }
    // getName(employeeName){
    //     console.log(employeeName);
    // }


    //  getID(id){
    //     console.log(id);
    //  }
// getEmail();
// getRole();

start(){
    this.promptUser();
    // this.getName();
    // this.getID();
}

}



module.exports = Employee;