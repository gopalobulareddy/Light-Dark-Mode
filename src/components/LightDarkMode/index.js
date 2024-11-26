// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isChange: false,
  }

  onChange = () => {
    this.setState(prevState => ({isChange: !prevState.isChange}))
  }

  getButtonText = () => {
    const {isChange} = this.state

    return isChange ? 'Dark Mode' : 'Light Mode'
  }
  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Click to Change Mode</h1>
          <button type="button" onClick={this.onChange} className="btn-1">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
