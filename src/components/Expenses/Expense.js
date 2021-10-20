import React, { useState } from "react";
import "./Expense.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expense(props) {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onRecievedYear={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList item={filteredExpenses}></ExpenseList>
      </Card>
    </div>
  );
}

export default Expense;
