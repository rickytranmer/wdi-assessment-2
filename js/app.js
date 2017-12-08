//----------Vanilla JS ONLY	----------
var player1Left = 0;
var player2Left = 0;

const body = document.querySelector('body');
const theHead = document.querySelector('header');
const defMargin = '25vh 0 25vh ';
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

//----------				----------
//ADD - Change 'ready?' to 'go!' after timeout
var readyGo = document.createElement('h1');
readyGo.innerHTML = 'ready?';
theHead.appendChild(readyGo);
setTimeout( function() {
	readyGo.innerHTML = 'GO!';

	// - Add event listener for keyup, hone in on 'F' & 'J' for player inputs
	document.addEventListener('keyup', function(event) {
	  const keyName = event.key;
	  console.log(keyName + ' pressed');
	  if (keyName === 'f') {	
	  	console.log(player1);
	  	movePlayer1();
	  } else if (keyName === 'j') {	
	  	console.log(player2);
	  	movePlayer2();
	  }
	});
}, 2000);

//ADD - Create finish line


//ADD - Add listener for click on squares (alternate movement method)


//ADD - Move player
function movePlayer1 () {
	player1Left += 5;
	player1.style.margin = defMargin + player1Left + 'vw';

	//ADD - Check finish line
}

//ADD - Move player
function movePlayer2 () {
	player2Left += 5;
	player2.style.margin = defMargin + player2Left + 'vw';

	//ADD - Check finish line
}
