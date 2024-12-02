import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const [editForm, setEditForm] = useState(false); 

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setEditForm(false);
    };

    const showFormHandler = () => {
        setEditForm(true); 
    };

    const cancelHandler = () => {
        setEditForm(false); 
    };

    return (
        <div className="new-expense">
            {!editForm && (
                <button onClick={showFormHandler}>Add New Expense</button>
            )}

            {editForm && (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler} 
                />
            )}
        </div>
    );
};

export default NewExpense;
