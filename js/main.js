/*----- constants -----*/
//make an object to hold player info : name, score
//use binary number system to differentiate between players

/*----- state variables -----*/
//is game over ? etc

/*----- cached elements  -----*/
//DOM variables to be called in functions

/*----- event listeners -----*/


/*----- functions -----*/

//use render() functions to update DOM elements, render scores, render board, etc.

function handleMove(evt) {
  // Check if we should exit the function
  //some type of loop / conditional, probably try to use a ternary
  // according to the current state
  // For example, ignore clicks if the
  // game has been won or is a tie:
  //to do this ^^ try removing eventListeners, might break code tho so we'll see
  if (winner) return;
  // Logic/Code to update all impacted state
  ...
  // Visualize all state
  render();
}