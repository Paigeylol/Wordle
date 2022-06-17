# Plan

A plan on how to build Wordle.

## Steps

1. [HTML , CSS] Come up with a HTML Stucture and styling 
    i. represent user's attempts 
    ii. ignore keyboard (may revisit later) ((keyboard on sreen works now))

2. [JavaScript]Wire up event to render letter per attempt 
    i. capture 5 letters 
    a. case 1: is a word
    b. (ignore for now) case 2: is a non-sensible word
    c. (ignore for now) case 3: special characters, e.g. $ @ ! $ ^
    ii. allow backspack to delete previously entered letter
    iii. capture enter key then check user's word against the secret word

3. [JavaScript] From step 2. iii. render hints to the user
    i. grey background for letter not in word
    ii. yellow background for letter in word, wrong location 
    iii. green background for letter in word, right location

4. [JavaScript] branch based on result of step 3.
    branch 1: user guess correctly then we're done
    branch 2: user guess incorrectly then allow user another attempt
    branch 3: user guess incorrectly and its their sixith attempt, then display the secret word and end the game    
