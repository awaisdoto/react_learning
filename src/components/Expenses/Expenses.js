import Card from '../UI/Card';
import ExpenseItem from '../Expenses/ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';


function Expenses(props) {
    const expenses = props.items;
    const [filteredYear, setFilteredYear] = useState('2020');
    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear() == filteredYear);
    const filterchangeHandler = selectedYear => {
        setFilteredYear(selectedYear);

    }

    return (
        <>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterchangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </>)

}

export default Expenses;