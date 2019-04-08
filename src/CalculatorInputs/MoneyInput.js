import React from "react";

export default function MoneyInput({ onChange, amount }) {
  return (
    <>
      <label htmlFor="money-input">Amount</label>
      <input
        id="money-input"
        placeholder="$0.00"
        value={amount}
        type="number"
        onChange={event => onChange(event.target.value)}
      />
    </>
  );
}
