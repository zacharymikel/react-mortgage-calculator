export function calculate(amount, term, interest) {
  // Total loan cost in a fixed mortage is:
  // r * p * n / (1 - (1 + r)^-n)

  // where r = interest rate / 12
  // n = number of payments or term * 12
  // p = principal

  console.log("here");

  const r = interest / 12;
  const n = term * 12;
  const p = amount;

  const total = (r * p * n) / (1 - Math.pow(1 + r, -n));
  const monthlyPayment = total / n;

  return {
    total,
    monthlyPayment
  };
}
