import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
 const expenses = [
  {
    id: 'id1',
    date: new Date(2024, 10, 12),
    title: 'New book',
    price: 30.99
  },
  {
    id: 'id2',
    date: new Date(2024, 10, 12),
    title: 'New jeans',
    price: 99.99
  }
 ];

 const addExpenseHandler = (expense) => {
  console.log('In App.jsx')
  console.log(expense)
 }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses data={expenses} />

    </div>
  )
}

export default App;