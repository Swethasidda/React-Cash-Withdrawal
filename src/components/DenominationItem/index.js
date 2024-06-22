// Write your code here
import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  render() {
    const {itemDetails, balanceChange} = this.props
    const {value} = itemDetails
    const onChange = () => {
      balanceChange(value)
    }
    return (
      <li className="list-container">
        <button type="button" className="button" onClick={onChange}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
