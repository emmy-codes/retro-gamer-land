## Personal portfolio retro style Windows 95. (Solo project)

This is the continuation from PurrsonalProject, where I created a visually similar Windows 95 Desktop using CSS and stress. As I enjoyed the project so much and was disappointed that I couldn't finish it in time, and I also wanted to create a retro mini game for my personal project in year 2. So I combined the two by upgrading and fixing all of the unfinished code and the issues I had previously, with making a new game. Oh, and recreating it in React so I could control things better.

* The first phase was to split up all parts of the website into React Components, and I am working on using props to effectively run everything.
* I then corrected a lot of CSS mistakes from my first project, and improved visual aspects of things I didn't finish first time round.
* After that I added a working time using JavaScript, which collects the time at page load, and then updates every 60 seconds. I know it's not 100% accurate but at the time of writing I am unaware of a better solution that won't take an age to discover, learn and implement.
* I fixed Clippy to be removable, but next I want to give him his typical "go away" animation.
* I added an "About me" Word doc, which isn't CSS accurate right now, another thing to improve.
* Next up was adding my CV to one of the remaining desktop icons.
* Then it was time to start on the game. I linked up the desktop icon to a new Route using React, and created 3 simple div placeholders to imply the game blocks I will create later.
* I then sat back from VSCode for a while and drew the background myself in a 100px/200px canvas, which is currently stretched and fuzzy looking on a large screen. I plan to improve that as soon as I have time.
* My final task so far was to create a moving block using the arrow keys. I spent a lot of time researching to try to find a way to avoid using eventlisteners, which I have been informed by senior developers is unreliable in React, but I gave up in the end. And they're right, sometimes it messes up for no reason, but it is mostly working for now. 
* I then improved the movement to more accurately represent going left and right, and more importantly, jumping.

## Future plans:

* I want to find a way to stop the character div from passing through the block div, so that it better resembles a block from our favourite retro style games (you wouldn't catch Mario flying through a questionmark block).
* Then I want to add some sort of action upon impact, meaning when the character hits the block from beneath, that a popup appears. As of now I think it will just contain information about me, like a personal letter/CV, but in the future I want to add more blocks and create interactive versions of my previous projects for people to try.
