#Coding Challenge
React Native

## My process
First I was looking into the asset library and how I am going to organize and access the images.
I created an `index.js` file for each folder to have an easier access to the images. 
I also learned that the folders that need to be used from the root of the project seem to need a `package.json` file to be found.

I decided next to create the structure for my components. 
I found online the approach to use Atom, Molecule and Organism. 
I liked that naming convention and I created two atom components `Badge` and `CategoryItem` right away.
I introduced at this point also the `constants` folder that holds the routes, colors and styling snippets that I wanted to reuse in multiple places.

After adding some basic page styling, I created the navigation bar on the bottom including the `scenes`.
I added [react-router-native](https://reacttraining.com/react-router/native/guides/quick-start) to the packages and linked the scenes to the buttons in the navigation.

Now I actually focused on the Badges scene by creating the mock data for the page. 
Then I was researching how the swiping to different categories will work and decided first to work with [react-native-swiper](https://github.com/leecade/react-native-swiper). 
I will remove this one later, because it gave me grief over the zIndex at a later point.

With some sort of swiping functionality in place I started adding the organism category and the molecule header followed by the BadgeRow using the atoms Box and NumberBlock to create them. 
I introduced [react-native-progress](https://github.com/oblador/react-native-progress) to create the needed ProgressBar.

When the page was build and I wanted to move the header up, I noticed that I had zIndex issues. The aubergine background was on top of my header component.
After playing around for a while I thought that the swiper night cause the issue, so I removed it and replaced it with [react-native-dots-pagination](https://www.npmjs.com/package/react-native-dots-pagination) and used [react-native-swipe-gestures](https://www.npmjs.com/package/react-native-swipe-gestures) to rebuild the swiper on my own. 
This made the zIndex issue disappear, but when moving the header up, the dots were gone again and all my attempts to make them visible made it just angrier at me until they were not found at all.
I even tried to create my own PaginationDots component, but I still could not see it in the UI. **This is bugging me and I would really appreciate if someone could tell me, what I did wrong there.**

I am also not sure if the scrolling actually works. It seems to move now in the simulator but it does not stay where it was moved to and jumps back to the top.
I also did not find the iPhone X in the simulator, so I used the default iPhone SE simulation for my development.

I was debating to move the mock data into a Redux state, but then I decided, that what I wanted to show in this exercise is how fast I can adapt in a new environment and I think I have shown that.

I worked in total two days on this, I had fun and I am quite pleased with the result.

## Screenshots
I added three screenshots into the `assets` folder.
You will notice the things I mentioned above:
* The pagination dots are not visible. Please let me know, why.
* There is no screenshot of a full view on the Oldest because when moving the view down it would not stick and jump back up which made a screenshot impossible.
* I designed it for the iPhone SE and not X because I could not find it in the Simulator.
