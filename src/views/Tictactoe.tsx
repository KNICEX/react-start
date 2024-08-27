import { useState } from 'react'
import './tictactoe.css'

const Square = ({value, onClick}: {value: string, onClick:()=>void}) => {
	return <button className='square' onClick={onClick}>{value}</button>
}

const Tictactoe = () => {
	const [xIsNext, setXIsNext] = useState(true)
	const [squares, setSquares] = useState(Array(9).fill(null))
	
	const handleClick = (i: number) => {
		if (squares[i]) {
			return
		}
		const newSquares = squares.slice()
		if (xIsNext) {
			newSquares[i] = 'X'
		} else {
			newSquares[i] = 'O'
		}
		setSquares(newSquares)
		setXIsNext(!xIsNext)
	}
	
	return (
		<>
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

export default Tictactoe