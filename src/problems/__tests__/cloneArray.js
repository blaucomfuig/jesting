import { cloneArray } from "../cloneArray";

test('should return an exact copy from [1, 2, 3]', () => {
    const array = [1, 2, 3];
    expect(cloneArray(array)).toBe(array);
})

// 1. Run the tests
// 2. Have they passed succesfully ? Why ? Why not ?
// 3. If necessary, feel free to correct and change the code