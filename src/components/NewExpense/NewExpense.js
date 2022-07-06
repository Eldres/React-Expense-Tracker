import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: parseInt(Math.random()).toString()
    }
    onAddExpense(expenseData)
    setIsEditing(false)
  }

  const handleEditingStart = () => {
    setIsEditing(true)
  }

  const handleEditingStop = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={handleEditingStart}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={handleSaveExpenseData}
          onCancel={handleEditingStop}
        />
      )}
    </div>
  )
}

export default NewExpense
