import validatorCard from '../validator';

test.each([
	['true for valid user card', '2200251612663487', true],
  ['true for valid user card', '6185402091864738', true],
  ['false for invalid user card ', '7715964999', false],
  ['false for invalid user card ', '42', false],
  ['false for invalid user card ', '4200003992829919100102929010', false],
	['false for invalid user card ', '0000000000000000', false],
	['false for invalid user card ', 'fg12vbncsh', false],
])(('it should be %s'), (_, value, expected) => {
  expect(validatorCard(value)).toBe(expected);
});
