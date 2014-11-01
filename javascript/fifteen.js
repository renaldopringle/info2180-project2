/*WARNING USING PROTOTYPE VERS. <script src="http://ajax.googleapis.com/ajax/libs/prototype/1.7.2.0/prototype.js"></script>*/

var shufflebutton = document.getElementById("shufflebutton");

var puzzlepiece = $$('#puzzlearea div');
//console.log(puzzlepiece);
//var piece = document.getElementsByClassName("puzzlepiece");



$$('#puzzlearea div').each(function (piece) {
    piece.setStyle({
        position: 'relative',
        'float': 'left',
        left: '0px',
        top: '0px'
    });
    piece.addClassName('puzzlepiece');
});
var puzzle = document.getElementsByClassName("puzzlepiece");
for (var i = 0; i < puzzle.length; i++) {
    puzzle[i].setStyle({backgroundColor: "red"});
}
function moveright(piece) {
    var i = piece.getStyle('left');
    i = (i.split("p"));
    i = (i[0]);
    i += 100;
    i = i + "px";
    piece.setStyle({'left': i});
}
function moveleft(piece) {
    var i = piece.getStyle('left');
    i = (i.split("p"));
    i = (i[0]);
    i -= 100;
    i = i + "px";
    piece.setStyle({'left': i});
}
function moveup(piece) {
    var i = piece.getStyle('left');
    i = (i.split("p"));
    i = (i[0]);
    i -= 100;
    i = i + "px";
    piece.setStyle({'top': i});
}
function movedown(piece) {
    var i = piece.getStyle('left');
    i = (i.split("p"));
    i = (i[0]);
    i += 100;
    i = i + "px";
    piece.setStyle({'top': i});
}


$$('.puzzlepiece').each(function (piece) {
    piece.on('click', function () {
        moveleft(piece);
        console.log(piece);
    });
});


function shuffle(x,shufflebutton) {
    shufflebutton.addEventListener("click", function () {
        for (var i = x.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = x[i];
            x[i] = x[j];
            x[j] = temp;
        }
        console.log(x);
        return x;
    });
}
puzzle = shuffle(puzzle,shufflebutton);
