//----------Vanilla JS ONLY	----------//
var player1 = {
	playerName: 'player1',
	leftMargin: 0,
	score: 0,
	divBox: document.getElementById('player1')
};
var player2 = {
	playerName: 'player2',
	leftMargin: 0,
	score: 0,
	divBox: document.getElementById('player2')
};
var stillRacing = true;

console.log(player1);
console.log(player2);

const body = document.querySelector('body');
const theHead = document.querySelector('header');
const defMargin = '25vh 0 25vh ';


//----------				----------//
// - Create finish line - //
var finishLine = document.createElement('div');
finishLine.style.float = 'right';
finishLine.style.borderRight = '6px solid red';
finishLine.style.height = '75vh';
finishLine.style.marginTop = '-85vh';
body.appendChild(finishLine);


//----------				----------//
// - 'ready?' header & players - //
var readyGo = document.createElement('h1');
readyGo.innerHTML = 'ready?';
readyGo.style.color = 'red';
theHead.appendChild(readyGo);
player1.divBox = document.getElementById('player1');
player2.divBox = document.getElementById('player2');

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
	  	console.log(player1);
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
	player1.leftMargin += 5;
	player1.divBox.style.margin = defMargin + player1.leftMargin + 'vw';

	// - Check finish line - //
	if (player1.leftMargin >= 90) {
		stillRacing = false;
		readyGo.innerHTML = 'PLAYER 1 WINS';
		body.style.backgroundColor = 'pink';
	}
}
function movePlayer2 () {
	player2.leftMargin += 5;
	player2.divBox.style.margin = defMargin + player2.leftMargin + 'vw';

	// - Check finish line (>=90vw) - //
	if (player2.leftMargin >= 90) {
		stillRacing = false;
		readyGo.innerHTML = 'PLAYER 2 WINS';
		body.style.backgroundColor = 'lightBlue';
	}
}