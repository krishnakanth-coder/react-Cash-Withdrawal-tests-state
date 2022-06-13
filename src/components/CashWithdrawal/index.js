// Write your code here

import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWitdrawal extends Component {
  state = {balance: 2000}

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    const withDraw = value =>
      this.setState(prevBalance => ({
        balance: prevBalance.balance - value,
      }))

    return (
      <div className="container">
        <div className="cash-card">
          <div className="profile-card">
            <h1 className="logo">S</h1>
            <h1 className="user-name">Sarah Williams</h1>
          </div>
          <div className="balance-card">
            <p className="balance-text">Your Balance</p>
            <p className="balance-amount">{balance}</p>
          </div>
          <p className="balance-in-rupees">In Rupees</p>
          <p className="withdraw-header">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-group">
            {denominationsList.map(amountValue => (
              <DenominationItem
                amount={amountValue.value}
                key={amountValue.id}
                withDraw={withDraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWitdrawal
