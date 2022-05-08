let coders = ['Andrea', 'Jael', 'Armando', 'Alex', 'Andrés'];

test('should add Joan to the coders list', () => {
    coders.push('Joan');
    expect(coders).toEqual(['Andrea', 'Jael', 'Armando', 'Alex', 'Andrés', 'Joan']);
});

test('should have initial length of 5', () => {
    expect(coders.length).toBe(5);
});


// 1. Correr el test y comprobar si pasa exitosamente o no
// 2. Explicar por qué han pasado (o no)
// 3. Si es necesario, corregir y cambiar el código