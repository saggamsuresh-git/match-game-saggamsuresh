// GameOver

import './index.css'

const GameOver = props => {
  const {score, resetGame} = props

  const replayGame = () => {
    resetGame()
  }

  return (
    <div className="game-over-screen">
      <div className="score-card">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="trophy"
          />
        </div>
        <div className="score-and-restart-button-container">
          {/* <div className="score-container"> */}
          <p>YOUR SCORE</p>
          <p>{score}</p>
          {/* </div> */}
          <button onClick={replayGame} type="button" className="reset-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameOver
