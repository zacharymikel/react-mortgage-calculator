import React from "react";

export default function TermInput({ onChange, term }) {
  const years = [15, 30];
  return (
    <>
      <label htmlFor="term-input">Term</label>
      <select
        id="term-input"
        onChange={e => onChange(e.target.value)}
        value={term}
      >
        {years.map(y => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </>
  );
}
