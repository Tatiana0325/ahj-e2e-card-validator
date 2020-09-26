export default function validatorCard (num) {
  if (/[^0-9-\s]+/.test(num) || num.length < 13) return false;
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    let cardNum = Number(num[i]);

    if ((num.length - i) % 2 === 0) {
      cardNum *= 2;

      if (cardNum > 9) {
        cardNum -= 9;
      }
    }

    sum += cardNum;
  }

  return (sum !== 0) && (sum % 10 === 0);
}
