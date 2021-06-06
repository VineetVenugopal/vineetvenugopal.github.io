import { createStore } from 'redux';
import {ISliderProps, ISquarePosition, ISquareProps, PIECE, IRankProps, IChessBoardProps, ClickState, IStateChangeAction, ActionType} from './interfaces';
import { getYIndex , getBoardPiece, setBoardPiece } from './misc';



function generateInitialBoard() : Array<Array<PIECE>>{
	
	
	const firstRank : Array<PIECE> = [ 
		PIECE.W_Rook, PIECE.W_Knight, PIECE.W_Bishop, PIECE.W_Queen, PIECE.W_King, PIECE.W_Bishop, PIECE.W_Knight, PIECE.W_Rook
	]; 
	const secondRank : Array<PIECE> = [
		PIECE.W_Pawn, PIECE.W_Pawn, PIECE.W_Pawn, PIECE.W_Pawn, PIECE.W_Pawn, PIECE.W_Pawn, PIECE.W_Pawn, PIECE.W_Pawn
	];
	const eighthRank : Array<PIECE> = [
		PIECE.B_Rook, PIECE.B_Knight, PIECE.B_Bishop, PIECE.B_Queen, PIECE.B_King, PIECE.B_Bishop, PIECE.B_Knight, PIECE.B_Rook
	];
	const seventhRank : Array<PIECE> = [
		PIECE.B_Pawn, PIECE.B_Pawn, PIECE.B_Pawn, PIECE.B_Pawn, PIECE.B_Pawn, PIECE.B_Pawn, PIECE.B_Pawn, PIECE.B_Pawn
	];
	
	const emptyRank = () => [PIECE.NOPIECE, PIECE.NOPIECE, PIECE.NOPIECE, PIECE.NOPIECE, PIECE.NOPIECE, PIECE.NOPIECE, PIECE.NOPIECE, PIECE.NOPIECE];
	
	const wrap = (rank : number, arr : Array<PIECE>) : IRankProps => {
		
		const y_index : number = getYIndex(rank);
		
		return {
			squares : arr.map( (e,i) :ISquareProps => {
				return {
					piece : e,
					position : { 
						x_index: i, 
						y_index: y_index
					}
				};
			})
		};
	};
	
	const board : Array<IRankProps> = [ 
		wrap(1, firstRank) , 
		wrap(2, secondRank), 
		wrap(3, emptyRank()), 
		wrap(4, emptyRank()), 
		wrap(5, emptyRank()), 
		wrap(6, emptyRank()), 
		wrap(7,seventhRank), 
		wrap(8, eighthRank)
	];
	
	return board;
};

export const initialBoardConfig :Array<IRankProps> = generateInitialBoard();


export const boardState : IBoardState = {
	boardConfig : initialBoardConfig,
	clickState : ClickState.Unclicked,
	firstClicked : null,
	secondClicked : null
};


const rootReducer = (state : IBoardState, action : IStateChangeAction) => {
	if (action.type === ActionType.SquareClick) {
		
		if (state.clickState == ClickState.FirstClicked) {
			
			const boardConfig : Array<IRankProps> = state.boardConfig;
			const firstClicked : ISquarePosition = state.firstClicked;
			
			const newBoard = JSON.parse(JSON.stringify(boardConfig));
			//const newBoard = boardConfig;
			
			const secondClicked = action.clickSqPosition;
			
			const p1 = getBoardPiece(newBoard, firstClicked);
			const p2 = getBoardPiece(newBoard, secondClicked);
			setBoardPiece(newBoard, firstClicked, p2);
			setBoardPiece(newBoard, secondClicked, p1);
			
			console.log(newBoard);
			console.log(newBoard === boardConfig);
			
			return {
				boardConfig : newBoard,
				firstClicked : firstClicked,
				secondClicked : action.clickSqPosition, 
				clickState : ClickState.SecondClicked
			};
			
		}
		else {
			return {
				...state, 
				clickState : ClickState.FirstClicked,
				firstClicked: action.clickSqPosition
			};
		}
		
		
	}
	
	return state;
};

export const store = createStore(rootReducer,  boardState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const clickSelector = (state : IBoardState) => state;

