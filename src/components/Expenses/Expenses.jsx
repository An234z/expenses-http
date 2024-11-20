import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card"
import './Expenses.css';

const Expenses = (props) => {
    const { data } = props;

    return (
        <Card className="expenses">
            {data.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    price={expense.price}
                    date={expense.date}
                />
            ))}
        </Card>
    );
};

export default Expenses;
