(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{10:function(n,e,i){},12:function(n,e,i){"use strict";i.r(e);var t,a,o=i(1),_=i.n(o),c=i(4),B=i.n(c),s=(i(9),i(3)),r=(i(10),i(0));!function(n){n[n.Black=0]="Black",n[n.White=1]="White"}(t||(t={})),function(n){n[n.W_Pawn=0]="W_Pawn",n[n.W_Rook=1]="W_Rook",n[n.W_Knight=2]="W_Knight",n[n.W_Bishop=3]="W_Bishop",n[n.W_Queen=4]="W_Queen",n[n.W_King=5]="W_King",n[n.NOPIECE=6]="NOPIECE",n[n.B_Pawn=7]="B_Pawn",n[n.B_Rook=8]="B_Rook",n[n.B_Knight=9]="B_Knight",n[n.B_Bishop=10]="B_Bishop",n[n.B_Queen=11]="B_Queen",n[n.B_King=12]="B_King"}(a||(a={}));var h=new Map([[a.W_Pawn,"WhitePawn"],[a.W_Rook,"WhiteRook"],[a.W_Knight,"WhiteKnight"],[a.W_Bishop,"WhiteBishop"],[a.W_Queen,"WhiteQueen"],[a.W_King,"WhiteKing"],[a.B_Pawn,"BlackPawn"],[a.B_Rook,"BlackRook"],[a.B_Knight,"BlackKnight"],[a.B_Bishop,"BlackBishop"],[a.B_Queen,"BlackQueen"],[a.B_King,"BlackKing"],[a.NOPIECE,""]]);function u(){var n=[a.W_Rook,a.W_Knight,a.W_Bishop,a.W_Queen,a.W_King,a.W_Bishop,a.W_Knight,a.W_Rook],e=[a.W_Pawn,a.W_Pawn,a.W_Pawn,a.W_Pawn,a.W_Pawn,a.W_Pawn,a.W_Pawn,a.W_Pawn],i=[a.B_Rook,a.B_Knight,a.B_Bishop,a.B_Queen,a.B_King,a.B_Bishop,a.B_Knight,a.B_Rook],t=[a.B_Pawn,a.B_Pawn,a.B_Pawn,a.B_Pawn,a.B_Pawn,a.B_Pawn,a.B_Pawn,a.B_Pawn],o=function(){return[a.NOPIECE,a.NOPIECE,a.NOPIECE,a.NOPIECE,a.NOPIECE,a.NOPIECE,a.NOPIECE,a.NOPIECE]},_=function(n,e){var i=function(n){return n-1}(n);return{squares:e.map((function(n,e){return{piece:n,position:{x_index:e,y_index:i}}}))}};return[_(1,n),_(2,e),_(3,o()),_(4,o()),_(5,o()),_(6,o()),_(7,t),_(8,i)]}function W(n){var e,i=n.piece,t=n.position,a=((e=t).x_index+e.y_index)%2==0?"BlackSquare":"WhiteSquare",o=h.get(i),_="".concat(o," ").concat(a);return Object(r.jsx)("div",{className:_,children:" "})}function P(n){var e=n.squares;return Object(r.jsx)("div",{className:"Rank",children:e.map((function(n,e){return Object(r.jsx)(W,Object(s.a)({},n),e)}))})}function p(n){var e=n.boardConfig,i=n.chessBoardStyle;return Object(r.jsx)("div",{className:"ChessBoard",style:i,children:e.map((function(n,e){return Object(r.jsx)(P,Object(s.a)({},n),e)}))})}console.log("Initial board",u());var l=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("div",{children:Object(r.jsx)(p,{boardConfig:u(),chessBoardStyle:{"font-size":"15px"}})}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"range",min:"1",max:"100",value:"50",class:"slider",id:"myRange"})})]})};B.a.render(Object(r.jsx)(_.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root"))},9:function(n,e,i){}},[[12,1,2]]]);
//# sourceMappingURL=main.d38ef3db.chunk.js.map