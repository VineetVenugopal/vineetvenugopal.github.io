(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var i,c,s,a=t(0),r=t.n(a),o=t(4),l=t.n(o),u=(t(14),t(8)),d=t(2),_=(t(15),t(9));!function(e){e[e.W_Pawn={white:!0,cssClass:"WhitePawn",letter:"P"}]="W_Pawn",e[e.W_Rook={white:!0,cssClass:"WhiteRook",letter:"R"}]="W_Rook",e[e.W_Knight={white:!0,cssClass:"WhiteKnight",letter:"N"}]="W_Knight",e[e.W_Bishop={white:!0,cssClass:"WhiteBishop",letter:"B"}]="W_Bishop",e[e.W_Queen={white:!0,cssClass:"WhiteQueen",letter:"Q"}]="W_Queen",e[e.W_King={white:!0,cssClass:"WhiteKing",letter:"K"}]="W_King",e[e.NOPIECE={white:!0,cssClass:"",letter:""}]="NOPIECE",e[e.B_Pawn={white:!1,cssClass:"BlackPawn",letter:"P"}]="B_Pawn",e[e.B_Rook={white:!1,cssClass:"BlackRook",letter:"R"}]="B_Rook",e[e.B_Knight={white:!1,cssClass:"BlackKnight",letter:"N"}]="B_Knight",e[e.B_Bishop={white:!1,cssClass:"BlackBishop",letter:"B"}]="B_Bishop",e[e.B_Queen={white:!1,cssClass:"BlackQueen",letter:"Q"}]="B_Queen",e[e.B_King={white:!1,cssClass:"BlackKing",letter:"K"}]="B_King"}(i||(i={})),function(e){e[e.Unclicked=0]="Unclicked",e[e.FirstClicked=1]="FirstClicked",e[e.SecondClicked=2]="SecondClicked"}(c||(c={})),function(e){e[e.SquareClick=0]="SquareClick"}(s||(s={}));var h=function(e){return(e.x_index+e.y_index)%2===0},C=function(e,n){return null!=e&&null!=n&&(e.x_index==n.x_index&&e.y_index==n.y_index)};function k(e,n){return e[n.y_index].squares[n.x_index]}var B=function(e,n){return k(e,n).piece},f=function(e,n,t){k(e,n).piece=t};var p={boardConfig:function(){var e=[i.W_Rook,i.W_Knight,i.W_Bishop,i.W_Queen,i.W_King,i.W_Bishop,i.W_Knight,i.W_Rook],n=[i.W_Pawn,i.W_Pawn,i.W_Pawn,i.W_Pawn,i.W_Pawn,i.W_Pawn,i.W_Pawn,i.W_Pawn],t=[i.B_Rook,i.B_Knight,i.B_Bishop,i.B_Queen,i.B_King,i.B_Bishop,i.B_Knight,i.B_Rook],c=[i.B_Pawn,i.B_Pawn,i.B_Pawn,i.B_Pawn,i.B_Pawn,i.B_Pawn,i.B_Pawn,i.B_Pawn],s=function(){return[i.NOPIECE,i.NOPIECE,i.NOPIECE,i.NOPIECE,i.NOPIECE,i.NOPIECE,i.NOPIECE,i.NOPIECE]},a=function(e,n){var t=function(e){return e-1}(e);return{squares:n.map((function(e,n){return{piece:e,position:{x_index:n,y_index:t}}}))}};return[a(1,e),a(2,n),a(3,s()),a(4,s()),a(5,s()),a(6,s()),a(7,c),a(8,t)]}(),clickState:c.Unclicked,firstClicked:null,secondClicked:null},O=Object(_.a)((function(e,n){if(n.type===s.SquareClick){if(e.clickState==c.FirstClicked){var t=e.boardConfig,i=e.firstClicked,a=JSON.parse(JSON.stringify(t)),r=n.clickSqPosition,o=B(a,i),l=B(a,r);return f(a,i,l),f(a,r,o),console.log(a),console.log(a===t),{boardConfig:a,firstClicked:i,secondClicked:n.clickSqPosition,clickState:c.SecondClicked}}return Object(d.a)(Object(d.a)({},e),{},{clickState:c.FirstClicked,firstClicked:n.clickSqPosition})}return e}),p,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),j=function(e){return e},w=t(3),P=t(1);function W(e){return Object(P.jsxs)("div",{children:["Slide to change board size",Object(P.jsx)("input",{type:"range",min:e.min,max:e.max,step:e.step,defaultValue:e.defaultValue,className:e.className,onChange:e.onChange})]})}function b(e){var n=e.piece,t=e.position,i=Object(w.c)(j),a=i.clickState,r=i.firstClicked,o=i.secondClicked,l=Object(w.b)(),u=h(t)?"BlackSquare":"WhiteSquare",d="";a===c.FirstClicked?d=C(t,r)?"SquareFirstClicked":"":a===c.SecondClicked&&(d=C(t,o)?"SquareSecondClicked":"");var _="".concat(u," ").concat(d),k=n.white?"WhiteLetter":"BlackLetter",B="SquareLetter ".concat(k," ");return Object(P.jsx)("div",{className:_,onClick:function(e){e.preventDefault(),console.log("Clicked ",t);var n={type:s.SquareClick,clickSqPosition:t};l(n)},children:Object(P.jsxs)("span",{className:B,children:[" ",n.letter," "]})})}function g(e){var n=e.squares;return Object(P.jsx)("div",{className:"Rank",children:n.map((function(e,n){return Object(P.jsx)(b,Object(d.a)({},e),n)}))})}function x(e){var n=e.boardConfig,t=e.chessBoardStyle;return Object(P.jsx)("div",{className:"ChessBoard",style:t,children:n.map((function(e,n){return Object(P.jsx)(g,Object(d.a)({},e),n)}))})}var S=function(){var e=r.a.useState(20),n=Object(u.a)(e,2),t=n[0],i=n[1],c={min:10,max:30,step:1,defaultValue:t,className:"Slider",onChange:function(e){e.preventDefault(),i(e.target.value)}};console.log("Font size is ",t);var s={"font-size":"".concat(t,"px")},a=Object(w.c)(j).boardConfig;return Object(P.jsxs)("div",{className:"App ",children:[Object(P.jsx)("div",{children:Object(P.jsx)(W,Object(d.a)({},c))}),Object(P.jsx)("div",{className:"ChessBoardWrapperDiv",children:Object(P.jsx)(x,{boardConfig:a,chessBoardStyle:s})})]})};l.a.render(Object(P.jsx)(r.a.StrictMode,{children:Object(P.jsx)(w.a,{store:O,children:Object(P.jsx)(S,{})})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.3e7ac223.chunk.js.map