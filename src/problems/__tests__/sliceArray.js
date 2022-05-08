import { sliceArray } from '../sliceArray';

const coders = ['Andrea', 'Jael', 'Armando', 'Alex', 'Andrés'];

test('should return coders without Andrés', () => {
    expect(sliceArray(coders, 1)).toEqual(['Andrea', 'Jael', 'Armando', 'Alex']);
});

test('should return coders without Andrés and Alex', () => {
    expect(sliceArray(coders, 2)).toEqual(['Andrea', 'Jael', 'Armando']);
});

test('should return coders without Andrés, Alex, Armando and Jael', () => {
    expect(sliceArray(coders, 4)).toEqual(['Andrea']);
});

// 1. Correr el test y comprobar si pasa exitosamente o no
// 2. Explicar por qué han pasado (o no)
// 3. Si es necesario, corregir y cambiar el código