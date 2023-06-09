import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    const expensesContent =
        props.items.length > 0 ?
            props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            )
            :
            <p>No Expenses Found!</p>
        ;

    if(expensesContent.length > 0) {
    return (
        <ul className='expenses-list'>
            {expensesContent.map(expense => <li >{expense}</li>)}
        </ul>
    )

}

    else {
        return <h2 className='expenses-list__fallback '>Found No Expenses</h2>
    }
}





export default ExpensesList;