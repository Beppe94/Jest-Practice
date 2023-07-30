import ceasarCipher from "../scripts/ceasarCipher";

test('shift string by 3', () => {
    const cipher = ceasarCipher('Hello, World!', 3);
    expect(cipher).toMatch('Khoor, Zruog!');
})

test('shift string by 26', () => {
    const cipher = ceasarCipher('Hello, World!', 26);
    expect(cipher).toBe('Hello, World!');
})