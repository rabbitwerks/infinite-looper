@Project - Infinite Looper JS
@Author - Sean Becker
@Company - rabbitWerks / Techtronix Web
@Version - 1.0.0
@License - MIT

Infinitely looping function for cycling through images.
A super-lightweight script that can be customizable and adapted to more than just images.

HOW TO USE:
  ** All images used should be the same dimensions.
  -=HTML=-
  1. HTML markup must consist of the "inf-loop-wrapper" div to contain the images.
  2. Individual image tags pointing to each image source, with the class of "iL-img" on each image.
  3. The first image item must also contain the class "iL-visible". This sets the first image as the inital shown image.

  -=CSS=-
  4. Images elements inside the wrapper should be set to "position: absolute" without defining TRBL params, this will stack the images on top of eachother.
  5. The transition propertiy for "#inf-loop-wrapper img" is used to control the fade times between opacities.
  6. Either use inline styling, or extract rules to a seperate style sheet.

  -=JS=-
  7. Insert infinite-looper.js in at the bottom of the page, after any library scripts and before local scripts.
  8. Refer to and adjust properties within the JS file.
  9. ENJOY!


SET INTERVAL LOOP (details of the loop function process)

this function loops through each item in the array and performs a series of tasks for each interval

1. set currentItem as current item being iterated from array.
2. remove class 'current-...' from currentItem.
3. check counter to see if its at the limit.
3.a. if limit is reached, reset counter to 0, continue on with loop
3.b. if limit not yet reached, add +1 to counter, continue on with loop
4. set nextItem as the array item with the next index.
5. add class 'current-...' to nextItem.
6. after duration delay, begin new interval, re-declare currentItem as new array item.
