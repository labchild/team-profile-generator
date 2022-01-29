const Manager = require('../lib/Manager');

// Manager class should create obj with name, id, email, office number
test('checks Manager creates obj with properties', () => {
    const manager = new Manager('Zac', 1, 'zac@email.com', '1');

    expect(manager.name).toBe('Zac');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('zac@email.com');
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.office).toBe('1');
});

// getRole() overwrites Employee method
test('check that getRole returns "Manager"', () => {
    const manager = new Manager('Zac', 1, 'zac@email.com', '1');

    expect(manager.getRole()).toBe('Manager');
})