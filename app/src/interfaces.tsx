

export enum PIECE {
	W_Pawn = {
		white : true,
		cssClass : 'WhitePawn',
		letter : 'P'
	}, 
	W_Rook = {
		white : true,
		cssClass : 'WhiteRook',
		letter : 'R'
	},
	W_Knight = {
		white : true,
		cssClass : 'WhiteKnight',
		letter : 'N'
	}, 
	W_Bishop = {
		white : true,
		cssClass : 'WhiteBishop',
		letter : 'B'
	}, 
	W_Queen = {
		white : true,
		cssClass : 'WhiteQueen',
		letter : 'Q'
	}, 
	W_King = {
		white : true,
		cssClass : 'WhiteKing',
		letter : 'K'
	}, 
	NOPIECE = {
		white : true,
		cssClass : '',
		letter : ''
	}, 
	B_Pawn = {
		white : false,
		cssClass : 'BlackPawn',
		letter : 'P'
	}, 
	B_Rook = {
		white : false,
		cssClass : 'BlackRook',
		letter : 'R'
	}, 
	B_Knight = {
		white : false,
		cssClass : 'BlackKnight',
		letter : 'N'
	}, 
	B_Bishop = {
		white : false,
		cssClass : 'BlackBishop',
		letter : 'B'
	}, 
	B_Queen = {
		white : false,
		cssClass : 'BlackQueen',
		letter : 'Q'
	}, 
	B_King = {
		white : false,
		cssClass : 'BlackKing',
		letter : 'K'
	}
}

export interface ISquarePosition { x_index: number, y_index: number}

export enum ClickState {
	Unclicked, FirstClicked, SecondClicked
}

export interface IBoardState {
	boardConfig : Array<IRankProps>;
	clickState : ClickState;
	firstClicked : ISquarePosition;
	secondClicked : ISquarePosition;
}



export interface ISliderProps {
	min : number;
	max : number;
	step : number;
	defaultValue : number;
	className : string;
	onChange : any;
};


export interface IRankProps {
	squares : Array<ISquareProps>
}


export interface IChessBoardProps {
	boardConfig : Array<IRankProps>;
	chessBoardStyle : any;
}


export interface ISquareProps {
	piece : PIECE,
	position? : ISquarePosition,
	onClick? : () => ISquarePosition;
}

export interface IStateChangeAction {
	type : ActionType;
	clickSqPosition? : ISquarePosition;
};

export enum ActionType {
	SquareClick
}

export interface IContext {
	isSquareImgType : boolean;
	onSquareTypeToggle? : () => void;
}