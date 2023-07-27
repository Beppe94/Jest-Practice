import capitalize from "../scripts/capitalize"

test('First letter capitalized', () => {
    const capitalized = capitalize('hello world');

    expect(capitalized).toBe('Hello world');
})