/**
3 CHALLENGES:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (HINT: Always save the previous dice roll in a separate variable.)

2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (HINT: You can read that value with the .value property in Javascript. This is a good opportunity to use google to figure this out.)

3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (HINT: You will need CSS to position the second dice, so take a look at the CSS code for the first one.)

**/


var scores, roundScore, activePlayer, gamePlaying;

init();

var previousScore;

/*document.querySelector('.btn-set')addEventListener('click', function() {
    //get value from input element

    //set the value as the winning score
});
*/


document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
    //1. random number
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    
    //2. Display the result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
        
    var diceDOM2 = document.querySelector('.dice2')
    diceDOM2.style.display = 'block';
    diceDOM2.src = 'dice-' + dice2 + '.png';
    

        /**************************
        /3. Update the round score IF the rolled number was not a 1
    if (previousScore === 6 && dice === 6) {
        //if two 6 in a row, player looses ENTIRE score
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer(); 
        ********************************/
    if (dice !== 1 && dice2 !== 1 ) {
        //Add score
        roundScore += dice + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
        //Next player
        nextPlayer();
        }
        
    //previousScore = dice + dice2;
    }
}); //Anonymous Function

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
    //1. Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    //scores[activePlayer] = scores[activePlayer] + roundScore;

    //2. Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //3. Check if player won the game
    
    var input = document.getElementById('target').value;
    
    // Undefined, 0, null or "" are COERCED to false
    // Anything else is COERCED to true
    if (input) {
        var targetScore = input;
    } else {
        targetScore = 100;
    }
        
    
    if (scores[activePlayer] >= targetScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';

        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
          //4. Next player
    nextPlayer(); 
        }       
    }
});

function nextPlayer() {
        activePlayer === 0 ?  activePlayer = 1: activePlayer = 0;
        /* if(activePlayer === 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
        } */
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');


        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    //targetScore = prompt('Set your Winning Score:');
    //document.getElementById('target').value = targetScore;

}


//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);















































































































