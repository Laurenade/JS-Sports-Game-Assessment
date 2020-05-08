        // Criteria
// Shots taken increases every click for each shoot button.
// Shots have a random chance of succeeding or failing.
// Goals increases only on successful shot.
// Clicking the "RESET" button resets all the shot and score counters and adds 1 to the number of resets
        
        // How game should work
// Clicking either "SHOOT" button represents a shot for that team.
// Shots should have a random chance of succeeding or failing. (Sounds like Internet research time! How do you determine a random chance in JavaScript?)
// The number of shots taken should increase for every click of the "SHOOT" button.
// The number of goals should only increase when the shot is successful.
// Clicking the "RESET" button should reset all the shot and goal counters and add 1 to the number of resets.
       
        //Bonus
// Play a sound when someone clicks the "Shoot" button.
// Use what you know about HTML and CSS to make the page look better!
// Upon reset, display who won the game.

// Once you have completed your sports game, push your code to a GitHub repository. Submit your GitHub URL.

////////////////////////////////////////////////////////////////


const shotButtonTeamOne = document.querySelector('#teamone-shoot-button')
const shotButtonTeamTwo = document.querySelector('#teamtwo-shoot-button')

const shotsCounterOne = document.querySelector('#teamone-numshots')
const shotsCounterTwo = document.querySelector('#teamtwo-numshots')

const goalCounterOne = document.querySelector('#teamone-numgoals')
const goalCounterTwo = document.querySelector('#teamtwo-numgoals')

const resetButton = document.querySelector('#reset-button')
const resetCounter = document.querySelector('#num-resets')


shotButtonTeamOne.addEventListener('click', function() {
       let newCounterValueOne = Number(shotsCounterOne.innerHTML) + 1;
               shotsCounterOne.innerHTML = newCounterValueOne;

                let randNum = Math.random()
                        if (randNum < 0.5) {
                let newGoalsOne = Number(goalCounterOne.innerHTML) + 1;
                        goalCounterOne.innerHTML = newGoalsOne;
                }
})          

shotButtonTeamTwo.addEventListener('click', function() {
        let newCounterValueTwo = Number(shotsCounterTwo.innerHTML) + 1;
                shotsCounterTwo.innerHTML = newCounterValueTwo;

                let randNum = Math.random()
                        if (randNum < 0.5) {
                let newGoalsTwo = Number(goalCounterTwo.innerHTML) + 1;
                        goalCounterTwo.innerHTML = newGoalsTwo;
                }      
})

resetButton.addEventListener('click', function() {
        let newResetCount = Number(resetCounter.innerHTML) + 1;
                resetCounter.innerHTML = newResetCount;
        let zeroShotCounterOne = 0;
                shotsCounterOne.innerHTML = zeroShotCounterOne;
        let zeroShotCounterTwo = 0;
                shotsCounterTwo.innerHTML = zeroShotCounterTwo
        let zeroGoalCounterOne = 0;
                goalCounterOne.innerHTML = zeroGoalCounterOne;
        let zeroGoalCounterTwo = 0;
                goalCounterTwo.innerHTML = zeroGoalCounterTwo;
})