import React from "react";

export default function InterestInput({ onChange, interest }) {
  return (
    <>
      <label htmlFor="interest-input">Interest Rate</label>
      <input
        id="interest-input"
        placeholder=".04125"
        value={interest}
        type="number"
        onChange={event => onChange(event.target.value)}
      />
    </>
  );
}
