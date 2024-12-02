import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2024');

    const yearChangeHandler = (year) => {
        console.log('Selected year:', year);
        setSelectedYear(year); 
    };

    const filteredExpenses = props.data.filter(
        (expense) => expense.date.getFullYear().toString() === selectedYear
    );

    return (
        <Card className="expenses">
           
            <ExpensesFilter selectedYear={selectedYear} onYearChange={yearChangeHandler} />
            
           
            {filteredExpenses.map((expense) => {
                console.log(expense); 
                return (
                    <ExpenseItem
                        key={expense.id} 
                        title={expense.title}
                        price={expense.price}
                        date={expense.date}
                    />
                );
            })}
        </Card>
    );
};

export default Expenses;
