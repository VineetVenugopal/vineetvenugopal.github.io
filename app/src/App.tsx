import React from 'react';
import logo from './logo.svg';
import './App.scss';
import piecesImg from './pieces.png';
import {initialBoardConfig, store as Store , clickSelector} from './state';
import {
	ISliderProps, ISquarePosition, ISquareProps, PIECE, IRankProps, 
	IChessBoardProps, IStateChangeAction, ActionType, ClickState
} from './interfaces';
import { isBlackSquare, areSameSquares } from './misc';
import { Provider, useSelector, useDispatch } from 'react-redux';


export function handleSquareClick(sqPosition : ISquarePosition) {

	
};

function Slider(props : ISliderProps) {
	return <div>
			Slide to change board size 
			<input type="range" 	
			min={props.min} 
			max={props.max}  
			step={props.step}
			defaultValue={props.defaultValue}
			className={props.className} 
			onChange={props.onChange} />
		</div>;
};

function Square({piece, position} : ISquareProps) {

	const squareColorClass = isBlackSquare(position) ? 'BlackSquare' : 'WhiteSquare';
	const pieceClass = piece.cssClass;
	
	const clazz = `${pieceClass} ${squareColorClass}`;
	
	return <div className={clazz}> </div>;
};

function LetterSquare({piece, position} : ISquareProps) {

	//console.log('The state has been changed to ', Store.getState());
	
	const { clickState, firstClicked, secondClicked } = useSelector(clickSelector);
	const dispatch = useDispatch();

	const squareColorClass = isBlackSquare(position) ? 'BlackSquare' : 'WhiteSquare';	
	
	let clickClass = ''; 
	if (clickState === ClickState.FirstClicked) {
		clickClass = areSameSquares(position, firstClicked) ? 'SquareFirstClicked' : ''; 
	}
	else if (clickState === ClickState.SecondClicked) {
		clickClass = areSameSquares(position, secondClicked) ? 'SquareSecondClicked' : ''; 
	}
	
	const clazz = `${squareColorClass} ${clickClass}`;
	
	const letterColorClass = piece.white ? 'WhiteLetter' : 'BlackLetter';
	const letterClass = `SquareLetter ${letterColorClass} `;
	
	const handleClick = e => {
		e.preventDefault();
		
		console.log('Clicked ' , position);
		
		//handleSquareClick(position);
		const action : IStateChangeAction = {
			type : ActionType.SquareClick,
			clickSqPosition : position
		};
		
		dispatch(action);
		//store.dispatch(action);
	
		//console.log('The state has been changed to ', store.getState());
	};
	
	return <div className={clazz} onClick={handleClick}>
		<span className={letterClass}> { piece.letter} </span>
	</div>;
};


function Rank({squares} : IRankProps) {
	return (
		<div className="Rank">
			{ 
				squares.map( (sqProps,i) => <LetterSquare key={i} {...sqProps}  />)
			}
		</div>
	);
};


function ChessBoard({boardConfig , chessBoardStyle} : IChessBoardProps) {
	
	return (
		<div className="ChessBoard" style={chessBoardStyle}>
			{
				boardConfig.map( (rankProps, i) => {
					return <Rank key={i} {...rankProps} />;
				})
			}
		</div>
	);
};

function App() {
	
	const [ fontSize , setFontSize ] = React.useState(20); // in px
	
	const sliderProps : ISliderProps = {
		min : 10,
		max : 30,
		step : 1,
		defaultValue : fontSize,
		className : 'Slider',
		onChange : (e) => {
			e.preventDefault();
			setFontSize(e.target.value);
		}
	};
	
	console.log('Font size is ' , fontSize);
	
	const chessBoardStyle = { "font-size" : `${fontSize}px`};

	const { boardConfig } = useSelector(clickSelector);
	
	return (		
		<div className="App ">
			<div>
				<Slider {...sliderProps} />
			</div>
			
			<div className="ChessBoardWrapperDiv" >
				<ChessBoard boardConfig={boardConfig} chessBoardStyle={chessBoardStyle}/>
			</div>
		</div>
	);
}

export default App;