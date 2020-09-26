import paymentSystem from '../paymentSystem';

test.each([
	['It is visa', 4023222255551234, 'visa'],
	['It is mastercard', 5155555523456213, 'mastercard'],
	['It is american', 3745456785511235, 'american'],
	['It is jcb', 3566002020360505, 'jcb'],
	['It is mir', 2200123456781234, 'mir'],
	['It is discover', 6011111111111117, 'discover'],
	['It is diners', 38520000023237, 'diners'],
	['Еhere is no such card', 1213146498321354, null],
])(('it should be %s'), (_, value, expected) => {
  expect(paymentSystem(value)).toBe(expected);
});
