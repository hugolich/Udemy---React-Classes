import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [userTitle, setUserTitle] = useState(""); //define o useState a null
  const titleChangeHandler = function (event) {
    setUserTitle(event.target.value);
  };

  const [userAmount, setUserAmount] = useState(""); //define o useState a null
  const amountChangeHandler = function (event) {
    setUserAmount(event.target.value);
  };

  const [userDate, setUserDate] = useState(""); //define o useState a null
  const dateChangeHandler = function (event) {
    setUserDate(event.target.value);
  };

  const submitFormHandler = function (event) {
    event.preventDefault(); //faz com que a página nao recarregue quando o button type="submit" for clicado

    const expenseData = {
      //objeto com os nomes que quisermos (title,amount,date)
      //os nomes aseguir ao objeto é que teem de ser iguais aos do State lá em cima
      title: userTitle,
      amount: userAmount,
      date: new Date(userDate),
    };

    props.onSaveExpenseData(expenseData);
    setUserTitle("");
    setUserAmount("");
    setUserDate("");
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new_expense__control">
          <label>Title</label>
          <input type="text" value={userTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new_expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new_expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
