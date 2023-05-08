import './index.css'

const MoneyDetails = props => {
  const {income, balance, expenses} = props
  return (
    <>
      <li className="listitem color1">
        <div>
          <img
            className="img1"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
        </div>
        <div>
          <p>Your Balance</p>
          <p>Rs {balance}</p>
        </div>
      </li>

      <li className="listitem color2">
        <div>
          <img
            className="img1"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
        </div>
        <div>
          <p>Your Income</p>
          <p>Rs {income}</p>
        </div>
      </li>
      <li className="listitem color3">
        <div>
          <img
            className="img1"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
        </div>
        <div>
          <p>Your Expenses</p>
          <p>Rs {expenses}</p>
        </div>
      </li>
    </>
  )
}
export default MoneyDetails
