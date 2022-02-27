// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

const Employee = require("./employee");

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`

class Intern extends Employee {
    constructor(employeeName, id, email, school) {
        super(employeeName, id, email)
        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
} 

module.exports = Intern