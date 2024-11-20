import ExpenseDate from '../Expenses/ExpenseDate';
import Card from "../UI/Card"
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const{date, title, price} = props;
console.log(price)
    return (
        <Card className='expense-item'>
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className="expense-item__price">{price}</div>
            </div>
        </Card>
    );
};

export default ExpenseItem;
