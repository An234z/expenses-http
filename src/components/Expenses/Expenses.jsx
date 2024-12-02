import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
import NewExpense from '../NewExpense/NewExpense';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2024');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredExpenses = props.data.filter(
        (expense) => expense.date.getFullYear().toString() === selectedYear
    );

    const addExpenseHandler = (newExpense) => {
        console.log('New expense added:', newExpense);
        
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={selectedYear} onYearChange={yearChangeHandler} />
            <ExpenseList expenses={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
