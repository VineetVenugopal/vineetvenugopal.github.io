(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{10:function(n,e,i){},11:function(n,e,i){},13:function(n,e,i){"use strict";i.r(e);var t,a,c=i(1),o=i.n(c),s=i(4),r=i.n(s),_=(i(10),i(5)),u=i(2),B=(i(11),i(0));!function(n){n[n.Black=0]="Black",n[n.White=1]="White"}(t||(t={})),function(n){n[n.W_Pawn=0]="W_Pawn",n[n.W_Rook=1]="W_Rook",n[n.W_Knight=2]="W_Knight",n[n.W_Bishop=3]="W_Bishop",n[n.W_Queen=4]="W_Queen",n[n.W_King=5]="W_King",n[n.NOPIECE=6]="NOPIECE",n[n.B_Pawn=7]="B_Pawn",n[n.B_Rook=8]="B_Rook",n[n.B_Knight=9]="B_Knight",n[n.B_Bishop=10]="B_Bishop",n[n.B_Queen=11]="B_Queen",n[n.B_King=12]="B_King"}(a||(a={}));var l,d=function(n){return(n.x_index+n.y_index)%2==0};function h(){var n=[a.W_Rook,a.W_Knight,a.W_Bishop,a.W_Queen,a.W_King,a.W_Bishop,a.W_Knight,a.W_Rook],e=[a.W_Pawn,a.W_Pawn,a.W_Pawn,a.W_Pawn,a.W_Pawn,a.W_Pawn,a.W_Pawn,a.W_Pawn],i=[a.B_Rook,a.B_Knight,a.B_Bishop,a.B_Queen,a.B_King,a.B_Bishop,a.B_Knight,a.B_Rook],t=[a.B_Pawn,a.B_Pawn,a.B_Pawn,a.B_Pawn,a.B_Pawn,a.B_Pawn,a.B_Pawn,a.B_Pawn],c=function(){return[a.NOPIECE,a.NOPIECE,a.NOPIECE,a.NOPIECE,a.NOPIECE,a.NOPIECE,a.NOPIECE,a.NOPIECE]},o=function(n,e){var i=function(n){return n-1}(n);return{squares:e.map((function(n,e){return{piece:n,position:{x_index:e,y_index:i}}}))}};return[o(1,n),o(2,e),o(3,c()),o(4,c()),o(5,c()),o(6,c()),o(7,t),o(8,i)]}!function(n){n[n.Unclicked=0]="Unclicked",n[n.FirstClicked=1]="FirstClicked",n[n.SecondClicked=2]="SecondClicked"}(l||(l={}));h(),l.Unclicked;function p(n){return Object(B.jsxs)("div",{children:["Slide to change board size",Object(B.jsx)("input",{type:"range",min:n.min,max:n.max,step:n.step,defaultValue:n.defaultValue,className:n.className,onChange:n.onChange})]})}function W(n){var e=n.piece,i=n.position,t=new Map([[a.W_Pawn,"P"],[a.W_Rook,"R"],[a.W_Knight,"N"],[a.W_Bishop,"B"],[a.W_Queen,"Q"],[a.W_King,"K"],[a.B_Pawn,"P"],[a.B_Rook,"R"],[a.B_Knight,"N"],[a.B_Bishop,"B"],[a.B_Queen,"Q"],[a.B_King,"K"],[a.NOPIECE,""]]),c=d(i)?"BlackSquare":"WhiteSquare",o="".concat(c);return Object(B.jsx)("div",{className:o,onClick:function(n){n.preventDefault(),console.log("Clicked ",i)},children:Object(B.jsxs)("span",{className:"SquareLetter",children:[" ",t.get(e)," "]})})}function P(n){var e=n.squares;return Object(B.jsx)("div",{className:"Rank",children:e.map((function(n,e){return Object(B.jsx)(W,Object(u.a)({},n),e)}))})}function j(n){var e=n.boardConfig,i=n.chessBoardStyle;return Object(B.jsx)("div",{className:"ChessBoard",style:i,children:e.map((function(n,e){return Object(B.jsx)(P,Object(u.a)({},n),e)}))})}console.log("Initial board",h());var g=function(){var n=o.a.useState(20),e=Object(_.a)(n,2),i=e[0],t=e[1],a={min:10,max:30,step:1,defaultValue:i,className:"Slider",onChange:function(n){n.preventDefault(),t(n.target.value)}};console.log("Font size is ",i);var c={"font-size":"".concat(i,"px")};return Object(B.jsxs)("div",{className:"App ",children:[Object(B.jsx)("div",{children:Object(B.jsx)(p,Object(u.a)({},a))}),Object(B.jsx)("div",{className:"ChessBoardWrapperDiv",children:Object(B.jsx)(j,{boardConfig:h(),chessBoardStyle:c})})]})};r.a.render(Object(B.jsx)(o.a.StrictMode,{children:Object(B.jsx)(g,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.6d345548.chunk.js.map