import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList'; 

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
           
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
