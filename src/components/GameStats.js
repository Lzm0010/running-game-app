import React, { Component } from 'react'
import '../GameStats.css'

class GameStats extends Component {
  render() {

    return (
      <div className="stats-container">
          <div className="lives">
            <div>
                <img className="current-player-image" src={this.props.stats.playerAvatar} alt={this.props.stats.playerName}/>
                <h3 className="player-name">{this.props.stats.playerName}</h3>
            </div>
            <h4 >X {this.props.stats.lives}</h4>
          </div>
        <div className="stats-div">
          <div className="pause-button">
            
          </div>
          
          <div className="score">
            <h5>Score</h5>
            <h4>{Math.round(this.props.stats.score)}</h4>
          </div>
          <div className="high-score">
            <h5>High Score</h5>
            <h4>{this.props.stats.highScore}</h4>
          </div>
          <div className="distance">
            <h5>Distance</h5>
            <h4>{(this.props.stats.distance).toFixed(2)}</h4>
          </div>
          <div className="timer">
            <h5>Timer</h5>
            <h4>{(this.props.stats.timer)}</h4>
          </div>
        </div>
      </div>
    )
  }

}

export default GameStats