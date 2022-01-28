const Employee = require('../lib/Employee');

// Employee class return obj with passed property values
test('checks employee obj is created with name, id, email', () => {
    const employee = new Employee('Zac', 1, 'zac@email.com');

    expect(employee.name).toBe('Zac');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
});

// method getRole should return 'employee'
test('checks method getRole() returns "Employee"', () => {
    const employee = new Employee('Zac', 1, 'zac@mail.com');

    expect(employee.getRole()).toBe('Employee');
});

// method getName() return employee's name
test('checks getName() returns Employee obj name property', () => {
    const employee = new Employee('Zac', 1, 'zac@gmail.com');

    expect(employee.getName()).toBe('Zac');
});

// method getEmail() should return employee's email address
test('checks getName() returns value of email property', () => {
    const employee = new Employee('Zac', 1, 'zac@gmail.com');

    expect(employee.getEmail()).toBe('zac@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});

// method getId() should return id
test('checks getId() returns value of id property', () => {
    const employee = new Employee('Zac', 1, 'zac@gmail.com');

    expect(employee.getId()).toBe(1);
    expect(employee.getId()).toEqual(expect.any(Number));
})