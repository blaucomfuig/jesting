let coders = ['Andrea', 'Jael', 'Armando', 'Alex', 'Andrés'];

test('should add Joan to the coders list', () => {
    coders.push('Joan');
    expect(coders).toEqual(['Andrea', 'Jael', 'Armando', 'Alex', 'Andrés', 'Joan']);
});

test('should have initial length of 5', () => {
    expect(coders.length).toBe(5);
});


// 1. Run the tests
// 2. Have they passed succesfully ? Why ? Why not ?
// 3. If necessary, feel free to correct and change the code