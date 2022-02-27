// The first class is an `Employee` parent class with the following properties and methods:

const { id } = require("prelude-ls")

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
        this.emplyeeId = id
        this.email = email
    }
    getName() {
        return `${}`
    }
    getId(){
        return `${}`
    }
    getEmail(){
        return `${}`
    }
    getRole(){
        return `${role}`
    }
}

newEmployee = new Employee(`"${}", "${}", "${}"`)