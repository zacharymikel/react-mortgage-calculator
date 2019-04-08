import React from "react";

export default function Sum({ amount, payment }) {
  return (
    <div>
      Total: {amount}, Monthly Payment: {payment}
    </div>
  );
}
