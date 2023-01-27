export const stringToNumber = (amount: string): number => {
  if (!amount) {
    return 0;
  }
  return parseFloat(amount.toString().replace(/,/g, ''));
};
