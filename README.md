# SITH INVADERS

## Overview 

Sith Invaders the first project of the course in Front-End Development.  

The task was to create a Grid-game using the traditional vanilla Javascript, Css and HTML.  

We were given a choice of games to choose from and instantly i chose Space invaders, for the raw fact Its a popular arcade game and I could style it in a Star Wars theme, I used the star wars force tune to put the player in the Star Wars enviroment.

This Project really helped put what i had learned into practice and to be able to link the creative side of me to the logical side of Javascript, HTML and Css.

Click to play https://gursham2001.github.io/project-1/

## The Brief.
>
> - Render a game in the browser
> - The player should have the ablity to move left and right and shoot lasers
> - Logic should be designed for when the player loses or wins 
> - Aliens dhould move themselves and be able to randomly drop bombs.
> - There should be seperate files for Javascript, HTML and Css.
> - Javascript should be used to be able to access and manipulate the DOM
> - The game should be deployed on the internet so its accessable for everyone.

## Technologies Used 
>
> - HTML
> - CSS 
> - Javascript
> - Google Fonts
> - Git and Github
> - Ziteboard
> - Youtube (For the audio)
> - Youtube to Wav converters
> - Adobe photoshop express
> - Google images

## Approach


### Event Listener 

To start off with I wrapped everything in the Event Listener, this meant when the start button was clicked all the functions and everything that that should happen when the game starts.

### The Grid

So with the grid I went for a 13 x 13 square grid, with the grid I created HTML divs by creating a for loop and then appending the child of the grid to get smaller grid

![Grid, logic] (./images/readme/Gridapproach.png)

Although the inner grid is not displayed during the game i have attached an example of the game with the grid below

![Gridexample, example] (./images/readme/Gridexample.png)

### TieFighter Movement

So the Tiefighters put in an array and which sets them into their starting postion on the grid

![Tiefighters, array] (./images/readme/arraysOfTies)

Then to get the Tiefighters to appear on the screen and move in snyc
I had to set an interval which consisted of wiping all of the tiefighters of the grid and then I had to map the tiefighters to move to the right and then add the tiefighters back by doing a forEach and using classList.add

I also set a barrier using a IF statement which checked if the the tifighters are in a certain cell ie. .includes(155) and if the tiefighters were in the cell 155 every cell would be wiped and all the tiefighters would be removed and then finally set all the tiefighters array back to normal, which meant we cleared the interval and then the game over function was called which ended the game.

! [Tiefighters Movement, movement] (./images/readme/tiemovement)

### Player Movement

With the player movement I had to add event listeners which identified when the player clicked the button which commited the function set to it.
Because I added the xwing earlier outside of the keystroke and set it to a certain position, we now have to remove it from that cell and then add it to the cell it moved to.

! [keystrokes, player] (./images/readme/KeyStrokes.png)

With the lasers we use a let and set them in the same cell as the xwing, We use a set interval which we use so then the laser moves up the cells with a certain time frame. At the top i did an if statement to check when the laser hits the top cells and therefore misses and then the laser will dissapear from the screen.

Next we remove the laser from that cell and then we tell it to move up by doing laser = laser - width, then we add it back to the cell it moved to, during this laser interval

We then create a constant which detects when the tiefighter and the laser are in the same cell and an IF statement is then added which if true will remove the class of tiefighters thats been hit, remove the class of laser and then add the class of explosion which shows an animation which disapears after a second as I had set a timout which enables that to occur

Then I set another IF statement which removes the tiefighter from the tiefighters array using the method of .splice

Next Within the hitIndex IF statment I told the score to increase by ten everytime a tiefighter is hit and I used .innerHTML to update the html

Penultimately i added another IF statement declaring if the array of the tiefighters length equalled 0 then a pop up would appear indicating to the player they win and they have the option to go to the next level. Finally we clear the lasers interval.

! [keystrokes, player] (./images/readme/KeyStrokes2.png)

### Bomb Dropping 

! [bomb dropping part 1, p1] (./images/readme/dropBombFunction.png)

Traditionally space invaders has the aliens dropping bombs, hence i had to create logic for it,
To start of with I made a function called dropBomb and got a random index number from the tiefighters array by doing TIEFIGHTERS * LENGTH
Then I created a new const which added a new bomb to the cell one cell below the the tiefighter indicating they've been dropped. Then I added an if statement to check if theres no bomb and thereofore if its true theres no bomb then another bomb will be pushed and the class will be added.

! [dropBombInterval, p2] (./images/readme/setInterval1.png)

We set a timeout and inside there we nest a setInterval, which we declare a let which sets the bomb position to 0 which we reassign later 

Then we set an IF statement which greats a barrier so the bomb can not go futher than the cells on the page, within this IF statement we shift the bomb from the bombs array and remove the class of bombs, we then recall the dropBomb function and finally clear the interval. With IF statements come Else statements and we used an else statement to make sure no bombs were stuck on the screen so we wiped every cell of the class bomb.

! [bombHitIndex, p3] (./images/readme/hitIndex1.png)

Finally we did the collision detection for the bombs and xwing by creating a const which finds whether the bombs are in the dsame cell as the xwing and using an IF statement we check if the const is true and if so the bomb is removed, the class of xwing remains and a life gone and once all three lifes have gone we call the game over function.

### Game Over Function

! [gameOver, function] (./images/readme/gameOver.png)

All games have ends and a notification needs to be sent out therefore I used a function which I declared a const which brings a confirm notifcation/ pop up on the screen once the player has lost.
We then create an if statement which checks if the player clicks ok and if its true then the page reloads.

### Next Level Function

! [nextLevel, function] (./images/readme/nextLevelFunction.png)

With the next level function we wipe all the cells of the class of tiefighters and the shooter, We then set the xwing back to its normal array position and then remove the shooter class and add it back, we also add levels more tiefighters by adding more ties to the tiefighter array. Then we map the tiefighters and set them into there intial movement, 
Finally we set the scores back to zero and lifes to 3. 

### Music Function

! [Music, function] (./images/readme/MusicFunction.png)

Personally I wanted there to be music but I wanted to give the user the choice if they wanted to listen to it, so i added a button and a click evemt to the button, Then used an IF statement and asked it to check whether the music was paused and if so we add the source and allow the user to play the music by setting the button to play but then change the innerHTML of the button to pause music, Then we used an Else statement which switches the button to say Play music through changing the innerHTML.

## Challenges

Throughout the project there was many complications, the biggest challenge I faced was the collision detection and figuring the logic of when there was a collision, I did a lot of whiteboarding and planning on how to perfect it and understand the logic.

## Victories

The biggest victory was getting the game to function and look how it does, but overall the biggest plus was I was able to understand and grasp the logic of most of the game and what needed to be done.

## Potential Future Features

A future feature I want to make is make it dynamic in the sense of levels and as the levels increase the difficulty rises also i want there to be a Boss level which is extremely hard and skilled.

## Lessons Learned

The ultimate lesson i learned is that I overcomplicate and overthinl a lot hence I the code a lot more complicated when its not nessarcary. 

A major lesson learned was that i was able to put together and consolidate all the stuff I had learnt.

# Play now! 