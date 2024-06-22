// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  balanceChange = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bid-container">
        <div className="small-container">
          <div className="container1">
            <p className="image">S</p>
            <p className="user-name">Sarah Williams</p>
          </div>
          <div className="container2">
            <p className="balance-text">Your Balance</p>
            <div className="container2-1">
              <p className="balance">{balance}</p>
              <p className="balance-in-ruppes">in Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="sum-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-Container">
            {denominationsList.map(each => (
              <DenominationItem
                itemDetails={each}
                key={each.id}
                balanceChange={this.balanceChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
