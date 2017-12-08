//Vanilla JS ONLY
var player1Left = 0;
var player2Left = 0;
const defMargin = '25vh 0 25vh ';

//ADD - Create finish line

//ADD - Add event listeners for two buttons
document.addEventListener('keyup', function(event) {
  const keyName = event.key;
  console.log(keyName + ' pressed');
  if (keyName === 'f') {
  	var player1 = document.getElementById('player1');
  	player1Left += 5;
  	player1.style.margin = defMargin + player1Left + 'vw';
  	console.log(keyName);	
  	console.log(player1);
  }
});



//ADD - Move player
function movePlayer1 () {
	//ADD - Check finish line
}

//ADD - Move player
function movePlayer2 () {
	//ADD - Check finish line
}
