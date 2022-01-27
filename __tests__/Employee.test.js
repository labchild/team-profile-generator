const Employee = require('../lib/Employee');

// check class creates person obj
test('checks employee obj is created', () => {
    const employee = new Employee('Zac');

    expect(employee.name).toBe('Zac');
});