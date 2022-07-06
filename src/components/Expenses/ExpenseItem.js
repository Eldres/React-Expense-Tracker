import { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = ({ title, amount, date }) => {
  const [expenseTitle, setTitle] = useState(title)

  const handleClick = () => {
    setTitle('Updated')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
