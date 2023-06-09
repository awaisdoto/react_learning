import Card from '../UI/Card';
import ExpenseItem from '../Expenses/ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';


function Expenses(props) {
    const expenses = props.items;
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterchangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        
    }
   
    return (
    <>
    <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterchangeHandler} />
    {expenses.map(expense => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))}
    </Card>
    </>)

}

export default Expenses;