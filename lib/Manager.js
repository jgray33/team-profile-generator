// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

const Employee = require("./Employee");

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`

class Manager extends Employee {
    constructor(employeeName, id, email, officeNumber) {
        super(employeeName, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager