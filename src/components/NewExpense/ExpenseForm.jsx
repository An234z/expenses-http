import { Fragment, useRef, useState } from "react";
import "./ExpenseForm.css";
import Error from "../UI/Error";

const ExpenseForm = (props) => {
  const [error, setError] = useState(null); 

  const titleInputRef = useRef();
  const priceInputRef = useRef();
  const dateInputRef = useRef();

  const errorHandler = () => {
    console.log("Error modal closed!"); 
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

   
    if (
      enteredTitle.trim().length === 0 ||
      enteredPrice.trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      const errorData = {
        title: "Invalid input",
        message: "Please enter a valid title or price or date (non-empty values)",
      };

      console.log(errorData); 
      setError(errorData);
      return; 
    }

    const expenseData = {
      title: enteredTitle,
      price: parseFloat(enteredPrice),
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    props.onCancel();

   
    titleInputRef.current.value = "";
    priceInputRef.current.value = "";
    dateInputRef.current.value = "";
  };

  return (
    <Fragment>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div>
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" ref={titleInputRef} />
            </div>
            <div className="new-expense__control">
              <label>Price</label>
              <input type="number" ref={priceInputRef} />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input type="date" ref={dateInputRef} />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
            <button type="button" onClick={props.onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ExpenseForm;
