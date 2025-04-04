const factorial = require('../index.js');

describe('Basic factorial test', () => {
	test('factorial of 0 is 1', () => {
		expect(factorial(0)).toBe(1);
	});

	test('factorial of 1 is 1', () => {
		expect(factorial(1)).toBe(1);
	});

	test('factorial of 2 is 2', () => {
		expect(factorial(2)).toBe(2);
	});

	test('factorial of 3 is 6', () => {
		expect(factorial(3)).toBe(6);
	});

	test('factorial of 4 is 24', () => {
		expect(factorial(4)).toBe(24);
	});

	test('factorial of 5 is 120', () => {
		expect(factorial(5)).toBe(120);
	});

	test('factorial of -1 is NaN', () => {
		expect(factorial(-1)).toBeNaN();
	});

	test('factorial of "string" is NaN', () => {
		expect(factorial('string')).toBeNaN();
	});

	test('factorial of null is NaN', () => {
		expect(factorial(null)).toBeNaN();
	});
});
