# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Alexis Rojas-Westall**

Time spent: **6** hours spent in total

Link to project: (https://glitch.com/edit/#!/discovered-stone-scarer)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories that I split up into 3 parts:
![](https://i.imgur.com/4dFZGvs.gif)
![](https://i.imgur.com/Hub6AAT.gif)
![](https://i.imgur.com/DKjEGgF.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

For generating random integers, I referred to the [Math.random() documentation](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge I encountered while creating this game was being able to get the sound to work when the user clicked on a specific button. 
After going through the code, I realized it was because I added the variables that were created for the sound synthesizer at the very end. 
The reason it caused the sound to fail was because the variables were being used before they were initialized. Not only that, but I had also forgot to add the variable tone playing equal to false. 
I didn’t realize that the variable had been commented out and also that it was being used in the following functions. After looking at my code and rearranging the functions and variables, 
I was finally able to get the sound to work, which was really satisfying.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I think HTTP and CSS is really interesting. I would like to learn more about them and the different things you could do with them. 
I also find the relationship between HTTP, JavaScript, and CSS really interesting. However, a question I have is how exactly HTTP and JavaScript are used together. 
This assignment allowed me to learn more about them, but I don’t fully understand how they work. I also would be interested in learning what exactly you can do with CSS and how far you can take it.
I am interested in eventually creating my own website, so I would like to learn how I would be able to do that with HTTP.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had extra time on this assignment, I would like to add the additional features that I did not already add to my game and make it a lot more elaborate.
I would also make the game look prettier with bootstrap to make styles (and colors) consistent for the whole game. I would add x's or indicators to show how 
many mistakes the user has made at all times. Lastly, I would have the game repeat the pattern every time the user makes a mistake.



## License

    Copyright [Alexis Rojas-Westall]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.