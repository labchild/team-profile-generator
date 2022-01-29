const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    // methods reutns github user name
    getGithub() {
        return this.github;
    };
};

module.exports = Engineer;