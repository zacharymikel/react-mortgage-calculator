import React, { Component } from "react";

import MoneyInput from "../CalculatorInputs/MoneyInput";
import InterestInput from "../CalculatorInputs/InterestInput";
import TermInput from "../CalculatorInputs/TermInput";
import Sum from "./Sum";

import * as mortgageService from "../_services/mortgage.service";

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 100000,
      interest: 0.04125,
      term: 30
    };
  }

  handleMoneyChange = amount => {
    this.setState({ amount: amount });
    this.calculateAmounts();
  };

  handleInterestChange = interest => {
    this.setState({ interest: interest });
    this.calculateAmounts();
  };

  handleTermChange = term => {
    this.setState({ term: term });
    this.calculateAmounts();
  };

  calculateAmounts = () => {
    const { amount, interest, term } = this.state;
    const { total, monthlyPayment } = mortgageService.calculate(
      amount,
      interest,
      term
    );

    console.log({ total, monthlyPayment });

    this.setState({
      total: total,
      monthlyPayment: monthlyPayment
    });
  };

  render() {
    const { total, monthlyPayment, amount, interest, term } = this.state;

    return (
      <div>
        <MoneyInput onChange={this.handleMoneyChange} amount={amount} />
        <InterestInput
          onChange={this.handleInterestChange}
          interest={interest}
        />
        <TermInput onChange={this.handleTermChange} term={term} />

        <Sum amount={total} payment={monthlyPayment} />
      </div>
    );
  }
}
