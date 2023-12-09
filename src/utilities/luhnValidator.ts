// Instead of doing this manually, you can also use an npm package
// such as https://github.com/validatorjs/validator.js

export function luhnValidator(input: string): boolean {
  const trimmed = input.trim();

  if (!/^\d+$/.test(trimmed)) {
    return false; // BEGONE FOUL NaN!!!!
  }

  const sum: number = [...trimmed]
    .reverse()
    .reduce((sum, digit, index) => {
      let num = parseInt(digit, 10);

      if (index % 2 !== 0) {
        num *= 2;
        num = num > 9 ? num - 9 : num;
      }

      return sum + num;
    }, 0);

  return sum % 10 === 0;
}
