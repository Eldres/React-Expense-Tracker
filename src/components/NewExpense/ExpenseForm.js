import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')
  // const [enteredDate, setEnteredDate] = useState('')
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  })

  const handleTitleChange = (event) => {
    // setEnteredTitle(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value
      }
    })
  }

  const handleAmountChange = (event) => {
    // setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value
      }
    })
  }

  const handleDateChange = (event) => {
    // setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    }
    // reset data to allow for new inputs
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            min="0.01"
            step="0.01"
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            min="2019-01-01"
            max="2025-12-31"
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
