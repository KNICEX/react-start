import { useState } from 'react'
import './tictactoe.css'

const Square = ({value, onClick}: {value: string|null, onClick:()=>void}) => {
	return <button className='square' onClick={onClick}>{value}</button>
}

const calculateWinner = (squares: Array<string|null>) => {
	const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i ++) {
	const [a, b, c] = lines[i]
	if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
		return squares[a]
	}
  }
  return null
}

const Board = ({xIsNext, squares, onPlay}: {xIsNext: boolean, squares: Array<string|null>, onPlay:(arg0: Array<string|null>)=>void }) => {
	const winner = calculateWinner(squares)
	let status;
	if (winner) {
		status = 'Winner: ' + winner
	} else {
		status = 'Next player: ' + (xIsNext ? 'X' : 'O')
	}

	const handleClick = (i: number) => {
		if (squares[i] || calculateWinner(squares)) {
			return
		}
		const nextSquares = squares.slice()
		if (xIsNext) {
			nextSquares[i] = 'X'
		} else {
			nextSquares[i] = 'O'
		}
		onPlay(nextSquares)
	}
	
	return (
		<>
			<div className="status">{status}</div>
			<div className="board-row">
				<Square value={squares[0]} onClick={() => handleClick(0)}></Square>
				<Square value={squares[1]} onClick={() => handleClick(1)}></Square>
				<Square value={squares[2]} onClick={() => handleClick(2)}></Square>
			</div>
			<div className="board-row">
				<Square value={squares[3]} onClick={() => handleClick(3)}></Square>
				<Square value={squares[4]} onClick={() => handleClick(4)}></Square>
				<Square value={squares[5]} onClick={() => handleClick(5)}></Square>
			</div>
			<div className="board-row">
				<Square value={squares[6]} onClick={() => handleClick(6)}></Square>
				<Square value={squares[7]} onClick={() => handleClick(7)}></Square>
				<Square value={squares[8]} onClick={() => handleClick(8)}></Square>
			</div>
		</>
	)
}

const Game = () => {
	const [history, setHistory] = useState([Array(9).fill(null)])
	const [currentMove, setCurrentMove] = useState(0)
	const xIsNext = (currentMove % 2) === 0

	const currentSquares = history[currentMove]
	const handlePlay = (nextSquares: Array<string|null>)=> {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
		setHistory(nextHistory)
		setCurrentMove(nextHistory.length - 1)
	}

	const jumpTo = (nextMove: number) => {
		setCurrentMove(nextMove)
	}

	const moves = history.map((_, move) => {
		let description
		if (move > 0) {
			description = 'Go to move #' + move
		} else {
			description = 'Go to game start'
		}
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		)
	})
	return (
		<div className="game">
			<div className="game-board">
				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}></Board>
			</div>
			<div className="game-info">
				<ol>{moves}</ol>
			</div>
		</div>
	)
}

export default Game