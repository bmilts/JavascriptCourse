/*
*/
var scores, roundScore, activePlayer, gamePlaying, winScore, lastRoll

initGame()

document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying){
        // Do something on click

        // Random number 
        var dice = Math.floor(Math.random() * 6) + 1
        var dice1 = Math.floor(Math.random() * 6) + 1
        console.log(dice, dice1)

        // Display result
        displayDice('.dice', dice)
        displayDice('.dice1', dice1)

        if(dice === 6 && lastRoll === 6) {
            document.getElementById('score-' + activePlayer).textContent = '0'
            nextPlayer() 
        } else if(dice !== 1 && dice1 != 1) {
            roundScore += (dice + dice1)
            document.querySelector('#current-' + activePlayer).textContent = roundScore 
        } else {
            nextPlayer()
        }

        lastRoll = dice
    }
})

document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gamePlaying){
        // Add current score to global score
        scores[activePlayer] += roundScore
        var inputVal = document.querySelector(".play-till").value
        var winScore
        
        if(inputVal){
            winScore = inputVal
        } else {
            winScore = 100
        }

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        // Check if player won the game
        if (scores[activePlayer] >= winScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
            document.querySelector('.dice').style.display = 'none'
            document.querySelector('.dice1').style.display = 'none'
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
            gamePlaying = false
        } else {
            nextPlayer()
        }
    }

})

document.querySelector('.btn-new').addEventListener('click', initGame)

function nextPlayer(){
    // Check if player won the game
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0

    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    document.querySelector('.dice').style.display = 'none'
    document.querySelector('.dice1').style.display = 'none'
}

function initGame() {

    gamePlaying = true
    scores = [0,0]
    activePlayer = 0
    roundScore = 0

    // Hide dice before game
    document.querySelector('.dice').style.display = 'none'
    document.querySelector('.dice1').style.display = 'none'

    // Reset scores before game
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'

    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
}

function displayDice(diceClass, diceNum){
    // Display result
    var diceDOM = document.querySelector(diceClass)
    diceDOM.style.display = 'block'
    diceDOM.src = 'dice-' + diceNum + '.png'
}