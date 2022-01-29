const Intern = require('../lib/Intern');

// should create Intern obj with name, id, email, school
test('checks that Intern obj cretaed with properties', () => {
    const intern = new Intern('Zac', 1, 'zac@email.com', 'Skidmore College');

    expect(intern.name).toBe('Zac');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('zac@email.com');
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.school).toBe('Skidmore College');
});

// getRole() should override Employee method
test('checks getRole() method returns "Intern"', () => {
    const intern = new Intern('Zac', 1, 'zac@email.com', 'Skidmore College');

    expect(intern.getRole()).toBe('Intern');
});

// getSchool() should return school property
test('checks getSchool() method returns value of school property', () => {
    const intern = new Intern('Zac', 1, 'zac@email.com', 'Skidmore College');

    expect(intern.getSchool()).toBe('Skidmore College');
})