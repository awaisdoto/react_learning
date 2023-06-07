import Card from '../UI/Card';
import ExpenseItem from '../Expenses/ExpenseItem';
import './Expenses.css';


function Expenses(props) {
    const expenses = props.items;
    return (
    <>
    <Card className='expenses'>
    {expenses.map(expense => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))}
    </Card>
    </>)

}

export default Expenses;