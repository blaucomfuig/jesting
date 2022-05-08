import { cloneArray } from "../cloneArray";

test('should return an exact copy from [1, 2, 3]', () => {
    const array = [1, 2, 3];
    expect(cloneArray(array)).toBe(array);
})

// 1. Correr el test y comprobar si pasa exitosamente o no
// 2. Explicar por qué ha funcionado (o no)