// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {changeFeedBack: true}

  showResult = () => {
    this.setState({changeFeedBack: false})
  }

  render() {
    const {changeFeedBack} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="feedback-bg-container">
        {changeFeedBack ? (
          <div className="feedback-card-container">
            <h1 className="feedback-card-heading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="list-container">
              {emojis.map(eachItem => (
                <li key={eachItem.id} className="list-card">
                  <button
                    type="button"
                    className="btn"
                    onClick={this.showResult}
                  >
                    <img
                      src={eachItem.imageUrl}
                      alt={eachItem.name}
                      className="image-card"
                    />
                    <span className="name-card">{eachItem.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="feedback-card-container">
            <img src={loveEmojiUrl} alt="Love Emoji" className="image-card" />
            <h1 className="feedback-card-heading">Thank You</h1>
            <p className="text-card">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
