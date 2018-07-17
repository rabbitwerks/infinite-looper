/*==============================================================//
@Project - Infinite Looper JS
@Author - Sean Becker
@Company - rabbitWerks / Techtronix Web
@Version - 1.0.0
@License - MIT
*/

//EACH IMAGE ITEM SHOULD HAVE THE CLASS 'non-active' as default

// SELECT ALL ITEMS (in this case logos)
//this will return a node list.
const images = document.querySelectorAll('.iL-img');

//initialize a new array to store items
imageArr = [];

//LOOP THRU NODELIST PUSH TO ARRAY
//this loops through the item nodelist, and pushes each item into the initialized array.

for(var i = 0; i < images.length; i++){imageArr.push(images[i])};
console.log(imageArr); //check to see contents of array after

//sets the counter limit to length of the item array
let numberOfImages = images.length - 1;

//initalize the counter, counter keeps track which array index the loop is at.
//this also enables the reset functionality when combined with logic below.
let counter = 0;

//sets the inital delay for the loop to begin
let initialDelay = 1500; //milliseconds

//sets the display duration of each interval
let duration = 1500; //milliseconds

/*INTERVAL LOOP
//this function loops through each item in the array and performs a series of tasks for each interval
* 1. set currentItem as current item being iterated from array.
* 2. remove class 'current-...' from currentItem.
* 3. check counter to see if its at the limit.
  3.a. if limit is reached, reset counter to 0, continue on with loop
  3.b. if limit not yet reached, add +1 to counter, continue on with loop
* 4. set nextItem as the array item with the next index.
* 5. add class 'current-...' to nextItem.
* 6. after duration delay, begin new interval, re-declare currentItem as new array item.
*/
function infLoop(){
  let loopThru = setInterval(function(){
    let currentImage = imageArr[counter];
    currentImage.classList.remove('iL-visible');
    if(counter == numberOfImages){
      counter = 0;
    } else {
      counter++;
    }
    console.log(counter);
    let nextImage = imageArr[counter];
    console.log(nextImage);
    nextImage.classList.add('iL-visible');
  }, duration);
};
//Sets the inital delay that happens before the function runs.
setTimeout(() => infLoop(), initialDelay);

//This will loop infinitely unless break logic is added.