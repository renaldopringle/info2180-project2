/*WARNING USING PROTOTYPE VERS. <script src="http://ajax.googleapis.com/ajax/libs/prototype/1.7.2.0/prototype.js"></script>*/

var puzzlepiece = $$('#puzzlearea div');
console.log(puzzlepiece);

function shuffle() {
    var x = document.getElementById("shufflebutton");
    x.addEventListener("click", function () {
        /*for (var i = puzzlepiece.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = puzzlepiece[i];
            puzzlepiece[i] = puzzlepiece[j];
            puzzlepiece[j] = temp;
        }*/
        console.log('shuffle');
    });
}
shuffle();

$$('#puzzlearea div').each(function (piece) {
    piece.setStyle({
        position: 'relative',
        'float': 'left'
    });
    piece.addClassName('puzzlepiece');
});

function moveright(piece) {
    piece.setStyle({'left': '100px'});
}
function moveleft(piece) {
    piece.setStyle({left: '-100px'});
}
function moveup(piece) {
    piece.setStyle({top: '-100px'});
}
function movedown(piece) {
    piece.setStyle({top: '100px'});
}

/*$$('.puzzlepiece').each(function(piece) {
    piece.observe('click', function(event) {
        moveright(piece);
    });
});*/

/*$$('.puzzlepiece').each(function(piece) {
    piece.addEventListener("click", function() {
        moveright(piece);
    });
});*/

/*$$('.puzzlepiece').each(function(piece) {
    piece.on('click', function() {
        moveright(piece);
    });
});*/
$$('.puzzlepiece').each(function (piece) {
    piece.on('click', function () {
        moveleft(piece);
        console.log(piece);
    });
});
