import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

    if (props.isLoading) {
        return <p className='expenses-list__fallback'><b>Fetching expenses data...</b></p>; 
    }


    if (!props.filteredExpenses || props.filteredExpenses.length === 0) {
        return <p className="expenses-list__fallback">No expenses found.</p>;
    }

    return (
        <ul className='expenses-list'>
            {
                props.filteredExpenses.map((expense) => (
                    <ExpenseItem 
                        expenseData={expense} 
                        key={expense.id} 
                    />
                ))
            }
        </ul>
    );
};

export default ExpensesList;
