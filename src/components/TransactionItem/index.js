import './index.css'

const TransactionItem = props => {
  const {item, deleted} = props
  const {id, amount, title, option} = item
  const deletestart = () => {
    deleted(id)
  }
  return (
    <li className="transactionitem">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{option}</p>
      <button onClick={deletestart} className="deletebutton">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}
export default TransactionItem
