### Rock Paper Scissors Pseudocode

1. Prompt user to enter r, p, or s representing rock, paper, or scissors.

2. Computer chooses a random value in a list of r, p, or s.

3. We determine if the user wins or not.

   * If user picks rock and if computer picks scissors then user wins.

   * If user picks rock and if computer picks paper then user loses.

   * If user picks scissors and if computer picks rock then user loses.

   * If user picks scissors and if computer picks paper then user wins.

   * If user picks paper and if computer picks rock then user wins.

   * If user picks paper and if computer picks scissors then user loses.

   * If user picks the same as computer then they tie.

4. We then add to their score.

   * If user wins then we add one to their wins.
    
   * If user loses then we add one to their losses.
    
   * If user ties then we add one to their ties.

5. Alert the user of their Wins, losses, ties







=======================================================

1. What are you going to do?
2. How are you going to do it? 
3. Why are you going to do it? 

Example: 

Step One:
      
      Q: What are you going to do? 
      A: Create an array (list) of computer options called computerChoices ["r", "p", "s"];

      Q: How are you going to do it? 
      A: Keyword `var`, variable name, and assignment operator.

      Q: Why are you going to do it? 
      A: To have a listing of options for the computer guesses 

Step Two:
      
      Q: What are you going to do? 
      A: create three seperate variables `wins`, `losses`, and `ties` set with an inital value of `0` 

      Q: How are you going to do it? 
      A:  Keyword `var` and assignment operator.

      Q: Why are you going to do it? 
      A: To instantiate variables for incrementing wins, losses, and ties when they occur


Step Three:
      
      Q: What are you going to do? 
      A: Have a set of code run 10 times

      Q: How are you going to do it? 
      A: For loop

      Q: Why are you going to do it? 
      A: To be able to run mutiple rounds 


Step Four:
      
      Q: What are you going to do? 
      A: For each round we will assign the computer choice from the list of choices; ["r", "p", "s"]

      Q: How are you going to do it? 
      A: Math.floor(Math.random() * computerChoices.length)

      Q: Why are you going to do it? 
      A: So that each round the computer randomly selects Rocks, Paper, or Scissor

Step Five:
      
      Q: What are you going to do? 
      A: Prompt user to enter r, p, or s representing rock, paper, or scissors.

      Q: How are you going to do it? 
      A: The use of the window Prompt method with the argument of "Enter r,p, or s to begin"

      Q: Why are you going to do it? 
      A: To capture user input for which selection they wish to input; r, p, or s representing rock, paper, or scissors.


Step Six:
      
      Q: What are you going to do? 
      A: Compare the user input to the reandobly selected computer Choice

      Q: How are you going to do it? 
      A: comparison operators; if-else statements

      Q: Why are you going to do it? 
      A: to determine win, loss, tie

Step Seven:
      
      Q: What are you going to do? 
      A: Depending on varies userChoice vs. computerChoice combination increment value assoicated with win, loss, ties 

      Q: How are you going to do it? 
      A: within the appriate if-else condition increment wins, loss, ties

      Q: Why are you going to do it? 
      A: to track accurate wins, loss, ties


Step Eight:
      
      Q: What are you going to do? 
      A: Alert the user if they won, what the computerChoice was, what their current score is

      Q: How are you going to do it? 
      A: The use of the window Alert method with the argument of "You won this round COmputer choose S"

      Q: Why are you going to do it? 
      A: To inform the user of the game stats

Step Nine:
      
      Q: What are you going to do? 
      A: After the conclusion of the for loop alert the user to their win, loss, ties

      Q: How are you going to do it? 
      A: The use of the window Alert method with the argument of "Enter r,p, or s to begin"

      Q: Why are you going to do it? 
      A: to inform them of their final wins
