class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // methods to bequeth to descendents
    getRole() {
        return this.constructor.name;
    };

    getName() {
        return this.name;
    };

    getEmail() {
        return this.email;
    };

    getId() {
        return this.id;
    }
}

module.exports = Employee;