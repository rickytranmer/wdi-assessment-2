//----------Vanilla JS ONLY	----------//
var player1Left = 0;
var player2Left = 0;
var stillRacing = true;

//ADD - Player objects {playerNjame, leftMargin, score}

const body = document.querySelector('body');
const theHead = document.querySelector('header');
const defMargin = '25vh 0 25vh ';
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');


//----------				----------//
// - 'ready?' header - //
var readyGo = document.createElement('h1');
readyGo.innerHTML = 'ready?';
readyGo.style.color = 'red';
theHead.appendChild(readyGo);

//----------				----------//
// - Create finish line - //
var finishLine = document.createElement('div');
finishLine.style.float = 'right';
finishLine.style.borderRight = '6px solid red';
finishLine.style.height = '85vh';
finishLine.style.marginTop = '-85vh';
body.appendChild(finishLine);

//----------				----------//
// - 'GO!' header - //
setTimeout( function() {
	readyGo.innerHTML = 'GO!';
	readyGo.style.color = 'green';
	finishLine.style.borderRight = '6px solid green';

	// - Add event listener for keyup, hone in on 'F' & 'J' for player inputs
	document.addEventListener('keyup', function(event) {
	  const keyName = event.key;
	  console.log(keyName + ' pressed');
	  if ((stillRacing) && (keyName === 'f')) {	
	  	console.log('player1:');
	  	movePlayer1();
	  } else if ((stillRacing) && (keyName === 'j')) {	
	  	console.log('player2:');
	  	console.log(player2);
	  	movePlayer2();
	  }
	});

	//ADD - Add listener for click on squares (alternate movement method)
}, 2000);


//----------				----------//
// - Move players - //
function movePlayer1 () {
	player1Left += 5;
	player1.style.margin = defMargin + player1Left + 'vw';

	// - Check finish line - //
	if (player1Left >= 90) {
		stillRacing = false;
		setTimeout( function() { alert('PLAYER 1 WINS') }, 125);
	}
}
function movePlayer2 () {
	player2Left += 5;
	player2.style.margin = defMargin + player2Left + 'vw';

	// - Check finish line (>=90vw) - //
	if (player2Left >= 90) {
		stillRacing = false;
		setTimeout( function() { alert('PLAYER 2 WINS') }, 125);
	}
}
