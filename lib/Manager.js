const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.office = officeNumber;
    }

    // override Employee method getRole for Manager
    getRole() {
        return this.constructor.name;
    }
};

module.exports = Manager;