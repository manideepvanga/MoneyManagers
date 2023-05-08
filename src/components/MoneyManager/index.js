import {v4} from 'uuid'
import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import './index.css'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionlist: [],
  }

  Titleupdate = event => {
    this.setState({title: event.target.value})
  }

  Amountupdate = event => {
    this.setState({amount: event.target.value})
  }

  OptionIdupdate = event => {
    this.setState({optionId: event.target.value})
  }

  AddTransaction = event => {
    event.preventDefault()
    const {title, amount, optionId, transactionlist} = this.state
    const obj = transactionTypeOptions.find(each => each.optionId === optionId)
    const {displayText} = obj

    const newobj = {
      id: v4(),
      title,
      amount: parseInt(amount),
      option: displayText,
    }
    this.setState(prevState => ({
      transactionlist: [...prevState.transactionlist, newobj],
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  GetIncome = () => {
    const {amount, transactionlist} = this.state
    let incomeamount = 0
    transactionlist.forEach(each => {
      if (each.option === 'Income') {
        incomeamount += each.amount
      }
    })
    return incomeamount
  }

  GetExpenses = () => {
    const {amount, transactionlist} = this.state
    let expensesamount = 0
    transactionlist.forEach(each => {
      if (each.option === 'Expenses') {
        expensesamount += each.amount
      }
    })
    return expensesamount
  }

  GetBalance = () => {
    const {amount, transactionlist} = this.state
    let expensesamount = 0
    let incomeamount = 0
    let balance = 0
    transactionlist.forEach(each => {
      if (each.option === 'Income') {
        incomeamount += each.amount
      } else if (each.option === 'Expenses') {
        expensesamount += each.amount
      }
    })
    balance = incomeamount - expensesamount
    return balance
  }

  deleted = ides => {
    const {transactionlist} = this.state
    const newlist = transactionlist.filter(each => each.id !== ides)
    this.setState({transactionlist: newlist})
  }

  render() {
    const incomeamount = this.GetIncome()
    const expensesamount = this.GetExpenses()
    const balance = this.GetBalance()
    const {title, amount, optionId, transactionlist} = this.state

    return (
      <div className="container">
        <div className="content">
          <div className="top1">
            <h1>Hi,Manideep</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <ul className="unorder">
            <MoneyDetails
              income={incomeamount}
              balance={balance}
              expenses={expensesamount}
            />
          </ul>
          <div className="bottomsection">
            <div className="bottom1">
              <h1>Add Transaction</h1>
              <form type="form" onSubmit={this.AddTransaction}>
                <label htmlFor="title">TITLE</label>
                <input
                  value={title}
                  onChange={this.Titleupdate}
                  id="title"
                  type="text"
                  placeholder="TITLE"
                />
                <label htmlFor="amount">AMOUNT</label>
                <input
                  value={amount}
                  onChange={this.Amountupdate}
                  id="amount"
                  type="text"
                  placeholder="AMOUNT"
                />
                <label htmlFor="type">TYPE</label>
                <select onChange={this.OptionIdupdate} value={optionId}>
                  <option value={transactionTypeOptions[0].optionId}>
                    {transactionTypeOptions[0].displayText}
                  </option>
                  <option value={transactionTypeOptions[1].optionId}>
                    {transactionTypeOptions[1].displayText}
                  </option>
                </select>
                <button className="addbutton" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="bottom2">
              <h1>History</h1>
              <ul className="unorder2">
                <li className="listitemcontainer">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>type</p>
                  <img
                    className="deleted"
                    src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                  />
                </li>
                {transactionlist.map(each => (
                  <TransactionItem
                    item={each}
                    key={each.id}
                    deleted={this.deleted}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
