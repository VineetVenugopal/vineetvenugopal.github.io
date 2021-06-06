import {ISquareProps, PIECE, IRankProps} from './interfaces';

export const X_POSITIONS : string = 'abcdefgh';

export function getXIndex(file : string) : number {
	
	const lower = file.toLowerCase();

	return X_POSITIONS.indexOf(lower) ;
}

export const getFile = (index : number) : string =>  X_POSITIONS[index];
export const getYIndex = (rank: number) : number =>  rank - 1;
export const getRank = (index : number) : number => index + 1;
export const isBlackSquare = ({x_index, y_index}) :  ISquarePosition => (x_index + y_index) % 2 === 0;

export const BOARD_SIZE : number = 8 ;

export const areSameSquares = (a : ISquarePosition, b : ISquarePosition) => {
	
	if (a == null || b == null) return false;
	
	return a.x_index == b.x_index && a.y_index == b.y_index
}

// board : Array<IRankProps>, 
		//

export function getBoardSquareProps(board : Array<IRankProps>, position : ISquarePosition ) : ISquareProps {
	const rank : IRankProps = board[position.y_index];
	
	const sqProps : ISquareProps = rank.squares[position.x_index];
	
	return sqProps;
}

export const getBoardPiece = (
		board : Array<IRankProps>, 
		position : ISquarePosition
	) : PIECE => getBoardSquareProps(board, position).piece;

export const setBoardPiece = (
		board : Array<IRankProps>, 
		position : ISquarePosition, 
		piece : PIECE
	) : void  => { 
		
	const sqProps : ISquareProps = getBoardSquareProps(board, position);
	
	sqProps.piece = piece;
};
