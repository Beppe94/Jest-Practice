import reverse from "../scripts/reverse";

test('Reverse string', () => {
    const reversedString = reverse('Hello world');
    expect(reversedString).toBe('dlrow olleH');
})