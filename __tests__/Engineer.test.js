const Engineer = require('../lib/Engineer');

// test Engineer creation to include name, id, email, and github username
test ('checks an Engineer obj is created with properties', () => {
    const engineer = new Engineer('Zac', 1, 'zac@email.com', 'zacsolomon');

    expect(engineer.name).toBe('Zac');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('zac@email.com');
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.github).toBe('zacsolomon');
});

// overrides Employee method getRole()
test('checks that getRole() method returns "Engineer"', () => {
    const engineer = new Engineer('Zac', 1, 'zac@email.com', 'zacsolomon');

    expect(engineer.getRole()).toBe('Engineer');
});

// getGithub returns github username
test('checks that getGithub() returns value of github property', () => {
    const engineer = new Engineer('Zac', 1, 'zac@email.com', 'zacsolomon');

    expect(engineer.getGithub()).toBe('zacsolomon');
})