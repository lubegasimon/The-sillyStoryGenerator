
let customName = document.getElementById('customname');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

let storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  for(let i = 0; i < 3; i++){
    newStory = newStory.replace(':insertx:', xItem);
  }
  // newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
  // newStory = newStory.replace(':insertx:', xItem);

  if(customName.value != '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 * 0.0714286) + ' Stones';
    let temperature =  Math.round((94 - 32) * (5/9)) + ' Centigrade';

    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 farenheit', temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}







// // Defining the regular expression in replace()
// var str = 'Twas the night before Xmas...';
// var newstr = str.replace(/xmas/i, 'Christmas');
// console.log(newstr);  // Twas the night before Christmas...

// // Using global and ignore with replace()
// var re = /apples/gi;
// var str = 'Apples are round, and apples are juicy.';
// var newstr = str.replace(re, 'oranges');
// console.log(newstr);  // oranges are round, and oranges are juicy.

// //Switching words in a string
// var re = /(\w+)\s(\w+)\s(\w+)/;
// var str = 'John Smith zilla';
// var newstr = str.replace(re, '$3, $2, $1');
// console.log(newstr);  // zilla, Smith, John

// let stri = "John Doe, John Smith and John Bull.";

// // https://javascript.info/regexp-methods -->> for details...

// // for each John - replace it with Mr. and then John
// console.log(stri.replace(/John/g, 'Mr.$&'));
// // "Mr.John Doe, Mr.John Smith and Mr.John Bull.";

// var myName = 'LubegaSimonWalkerZilla';
// function replacer(match, offset, str){
//     return (offset > 0 ? '-' : '') + match.toLowerCase();
// }

// console.log(myName.replace(/[A-Z]/g, replacer));

