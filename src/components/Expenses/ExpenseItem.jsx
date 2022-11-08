import ExpenseDate from "./ExpenseDate";
import React from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  //o useState(props.title) é o valor inicial
  //a const[title] é o que guarda o props.title(valor inicial)
  //a const[setTitle] é a função que se pode usar para atualizar o title.

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">€ {props.amount}</div>
        </div>
      </Card>
    </li>
  );
}
