// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// Other classes will extend employee 


class Employee {
    constructor(employeeName, id, email) {
        this.employeeName = employeeName
        this.employeeId = id
        this.email = email
    }
    getName() {
        return this.employeeName
    }
    getId(){
        return this.employeeId
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
}

module.exports = Employee


