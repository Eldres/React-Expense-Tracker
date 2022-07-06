import { useState } from 'react'
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesList from './ExpensesList'

const Expenses = ({ items: expenseItems }) => {
  const [filteredYear, setFilteredYear] = useState('2022')

  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = expenseItems.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={handleFilterChange}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses
