// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
//if the user push the "show story" button, the site shows random story on the page
const output = document.querySelector('story');
//set the value name(=storyMaker) for the first 5 story buttons 
const storyMaker = document.querySelector('body');
const story = document.querySelector('P');

//set the array for the first 5 buttons for the random story

const storyOneId = document.querySelector('#noun1');
let storyOne = ['the thukey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
console.log(storyOne.length);

const storyTwoId  = document.querySelector('#verb');
let storyTwo = ['sat on', 'ate', 'danced with', 'saw', "doesn't like", 'kissed'];
console.log(storyTwo.length);

const storyThreeId  = document.querySelector('#adjective');
let storyThree = ['a funny','a scary', 'a goofy', 'a alimy', 'a barking', 'a fat'];
console.log(storyThree.length);

const storyFourId  = document.querySelector('#noun2');
let storyFour = ['goat', 'monkey','fish', 'cow', 'frog', 'bug', 'worm'];
console.log(storyFour.length);

const storyFiveId  = document.querySelector('#setting');
let storyFive = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];
console.log(storyFive.length);


/* Functions
-------------------------------------------------- */
//for (let i = 0; i < storyOne.length; i ++) {
//     console.log(storyOne[i]);
// }

storyOneId.addEventListener('click', storyOneNoun);
storyTwoId.addEventListener('click', storyTwoVerb);
storyThreeId.addEventListener('click', storyTreeAdjective);
storyFourId.addEventListener('click', storyFourNoun);
storyFiveId.addEventListener('click', storyFiveSetting);

playback.addEventListener('click', storyShow);
make.addEventListener('click', storyMake);
storyReset.addEventListener('click', Reset);

function storyOneNoun() {
    //console.log("story1-noun1");
    //let storyOne = storyOneId.value;
	
    //storyOne random 값 나오게 함
    //const random = Math.floor(Math.random() * storyOne.length);
	let random = storyOne[Math.floor(Math.random() * storyOne.length)];
	storyOneId.innerText = random;
};

function storyTwoVerb() {    
	let random = storyTwo[Math.floor(Math.random() * storyTwo.length)];
	storyTwoId.innerText = random;
};

function storyTreeAdjective() {    
	let random = storyThree[Math.floor(Math.random() * storyThree.length)];
	storyThreeId.innerText = random;
};

function storyFourNoun() {    
	let random = storyFour[Math.floor(Math.random() * storyFour.length)];
	storyFourId.innerText = random;
};

function storyFiveSetting() {    
	let random = storyFive[Math.floor(Math.random() * storyFive.length)];
	storyFiveId.innerText = random;
};

function storyShow() {    	
	story.innerText = storyOneId.innerText + " " + storyTwoId.innerText + " " + storyThreeId.innerText + " " + storyFourId.innerText + " " + storyFiveId.innerText + ".";
};

function storyMake() {    
	storyOneNoun();
	storyTwoVerb();
	storyTreeAdjective();
	storyFourNoun();
	storyFiveSetting();
	story.innerText = storyOneId.innerText + " " + storyTwoId.innerText + " " + storyThreeId.innerText + " " + storyFourId.innerText + " " + storyFiveId.innerText + ".";
};

function Reset() { 
	storyOneId.innerText = "Noun 1";
	storyTwoId.innerText = "Verb";
	storyThreeId.innerText = "Adjective";
	storyFourId.innerText = "Noun 2";
	storyFiveId.innerText = "Setting";
};
//storyOne random 값 나오게 함
// const random = Math.floor(Math.random() * storyOne.length);
// console.log(random, storyOne[random])



/* Event Listeners
-------------------------------------------------- */
