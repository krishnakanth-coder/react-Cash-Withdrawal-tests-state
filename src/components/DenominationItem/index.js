// Write your code here
import './index.css'

const DenominationItem = props => {
  const {amount, withDraw} = props
  const withdrawMany = () => {
    withDraw(amount)
  }
  return (
    <li className="list-item">
      <button className="button" type="button" onClick={withdrawMany}>
        {amount}
      </button>
    </li>
  )
}
export default DenominationItem
