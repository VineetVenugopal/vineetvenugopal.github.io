import React , {useState} from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import logo from './logo.svg';
import './App.scss';
import './Toggle.scss';
import piecesImg from './pieces.png';
import {initialBoardConfig, store as Store , clickSelector} from './state';
import {
	ISliderProps, ISquarePosition, ISquareProps, PIECE, IRankProps, 
	IChessBoardProps, IStateChangeAction, ActionType, ClickState,
	IContext
} from './interfaces';
import { isBlackSquare, areSameSquares } from './misc';


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

const ToggleButton = (props) => {
	
	const { value, onToggle } = props;
	
	const [toggle, setToggle] = useState(value);
	
	const triggerToggle = () => {
		onToggle(!toggle);
		setToggle(!toggle);
		
	};
	
	const toggleClasses = classNames('wrg-toggle', {
        'wrg-toggle--checked': toggle
    });
    
	
    return(
        <div className={toggleClasses} onClick={triggerToggle} >
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check">
                    .
                </div>
                <div className="wrg-toggle-uncheck">
                   .
                </div>
            </div>
            <div className="wrg-toggle-circle"></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
        </div>
    )
};



function Square({piece, position} : ISquareProps) {

	const { clickState, firstClicked, secondClicked } = useSelector(clickSelector);
	const dispatch = useDispatch();

	const squareColorClass = classNames({
		BlackSquare : isBlackSquare(position),
		WhiteSquare : !isBlackSquare(position),
		SquareFirstClicked : clickState === ClickState.FirstClicked && areSameSquares(position, firstClicked),
		SquareSecondClicked : clickState === ClickState.SecondClicked && areSameSquares(position, secondClicked)
	});
	
	const pieceClass = piece.cssClass;
	
	const clazz = `${pieceClass} ${squareColorClass}`;
	
	const handleClick = e => {
		e.preventDefault();
		
		const action : IStateChangeAction = {
			type : ActionType.SquareClick,
			clickSqPosition : position
		};
		
		dispatch(action);
	};
	
	return <div className={clazz} onClick={handleClick}> </div>;
};

function LetterSquare({piece, position} : ISquareProps) {

	const { clickState, firstClicked, secondClicked } = useSelector(clickSelector);
	const dispatch = useDispatch();

	const clazz = classNames({
		BlackSquare : isBlackSquare(position),
		WhiteSquare : !isBlackSquare(position),
		SquareFirstClicked : clickState === ClickState.FirstClicked && areSameSquares(position, firstClicked),
		SquareSecondClicked : clickState === ClickState.SecondClicked && areSameSquares(position, secondClicked)
	});
	
	const letterColorClass = piece.white ? 'WhiteLetter' : 'BlackLetter';
	const letterClass = `SquareLetter ${letterColorClass} `;
	
	const handleClick = e => {
		e.preventDefault();
		
		const action : IStateChangeAction = {
			type : ActionType.SquareClick,
			clickSqPosition : position
		};
		
		dispatch(action);
		
	};
	
	return (
		<div className={clazz} onClick={handleClick}>
			<span className={letterClass}> { piece.letter} </span>
		</div>
	);
};

function GenericSquare(){
	
}

	
const initialContext : IContext = {
	isSquareImgType : true,
	toggleSqImgType : () => console.log('Toggled!')
};

const ThemeContext = React.createContext(initialContext);

function Rank({squares} : IRankProps) {
	return (
		<div className="Rank">
			{ 
				squares.map( (sqProps,i) => (
					<ThemeContext.Consumer>
					{
						({isSquareImgType}) => {
							if (isSquareImgType) return <Square key={i} {...sqProps}  />;
							else return <LetterSquare key={i} {...sqProps}  />;
						}
					}
					</ThemeContext.Consumer>
				))
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
	
	const [ themeContext, setThemeContext ] = React.useState({
		isSquareImgType : true
	});
	
	const onToggle = () => {
		setThemeContext({
			isSquareImgType : !themeContext.isSquareImgType
		});
	};
	
	
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
	
	/*
	const initialContext : IContext = {
		isSquareImgType : true,
		toggleSqImgType : () => {
			this.isSquareImgType = !this.isSquareImgType;
		}
	};
	*/
	
	
	return (
		<ThemeContext.Provider value={themeContext} >
			<div className="App ">
				<div>
					<Slider {...sliderProps} />
				</div>
				<div>
					Change square image : 
					<ThemeContext.Consumer >
						{
							(ctx : IContext) => (
								<ToggleButton value={ctx.isSquareImgType} onToggle={onToggle} />
							)
						}
					</ThemeContext.Consumer>
				</div>
				
				<div className="ChessBoardWrapperDiv" >
					<ChessBoard boardConfig={boardConfig} chessBoardStyle={chessBoardStyle}/>
				</div>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;