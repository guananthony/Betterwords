// store initial HTML
const initialHTML = document.body.innerHTML;
console.log('INITIATED');

// ALTERNATIVE ALGO
// try this out on Drudger and NYtimes, most headlines are anchors
// elementList is a nodeList of anchor tags that we can iterate through
const elementList = document.querySelectorAll('a');
const imageList = document.querySelectorAll('img');
console.log(imageList);

// make slider on page, position through CSS in top-right
// const slider = document.createElement('button');
// slider.innerText = 'Replace Words';
// slider['id'] = 'toggleButton';
// slider.style.position = 'fixed';
// slider.style.top = '10px';
// slider.style.right = '10px';
// console.log(slider);

// TODO: toggle between states
const toggleButton = document.createElement('button');
// made another button to put it back
// TECHNICAL CHALLENGE: getting the button to do on/off functionality (tried it out by changing innerText and adding/removing className but it didn't work; i think it was because the button was dynamically modified with each click and lost its link to the click functionality)
// ANOTHER TECHNICAL CHALLENGE: changing the anchor tags back to their previous innerHTML state. It's also difficult to capture the previous innerHTMLs of the initial node list and then iterate over that again to restore the previous states. For now, each button works once and it's restored by resetting the entire body innerHTML back to initial state
const anotherToggleButton = document.createElement('button');
toggleButton['id'] = 'toggleButton';
toggleButton.innerText = 'CODDLE ME!';
anotherToggleButton['id'] = 'anotherToggleButton';
anotherToggleButton.innerText =
	"That's enough. Take me back to the real world.";

// const toggleButton = document.createElement('label');
// toggleButton['class'] = 'slider';
// toggleButton.innerText = 'Reverse Words';
// toggleButton.innerHTML = `<input type="checkbox" id="toggle" />`;
document.body.appendChild(toggleButton);
document.body.appendChild(anotherToggleButton);
document.getElementById('toggleButton').onclick = function () {
	// alternate just grabs anchor tags for theDrudgeReport; can use replaceWords to do document.body.innerHTML
	replaceWordsAlternate();
	// console.log('hello');
	// if (!toggleButton.classList.contains('reversed')) {
	// 	toggleButton.classList.add('reversed');
	// 	toggleButton.innerText = 'Put Words Back';
	// 	replaceWordsAlternate();
	// } else {
	// 	toggleButton.classList.remove('reversed');
	// 	toggleButton.innerText = 'Reverse Words';
	// 	putWordsBack();
	// }
};
document.getElementById('anotherToggleButton').onclick = function () {
	putWordsBack();
};

// console.log(toggleButton);
// document.getElementById('toggleButton').addEventListener('click', () => {
// 	console.log('hello');
// 	console.log(toggleButton.classList.contains('reversed'));
// 	if (!toggleButton.classList.contains('reversed')) {
// 		toggleButton.classList.add('reversed');
// 		toggleButton.innerText = 'Put Words Back';
// 		replaceWords();
// 	} else {
// 		toggleButton.classList.remove('reversed');
// 		toggleButton.innerText = 'Reverse Words';
// 		putWordsBack();
// 	}
// });

const replaceWords = () => {
	console.log('REPLACED');
	let triggerWords = [
		'omicron',
		'inflation',
		'covid',
		'death',
		'war',
		'stocks',
		'trillion',
		'deficit',
		'debt',
		'guns',
		'alarms',
		'politics',
		'court',
		'biden',
		'republican',
		'democrat',
		'senate',
		'business',
		'elections',
		'fed',
		'hike',
		'news',
		'conservatives',
	];
	let niceWords = [
		'rainbows',
		'butterflies',
		'sunshine',
		'dessert',
		'sugar',
		'babies',
		'beautiful',
		'fluff',
		'giggle',
		'Marshawn Lynch',
	];
	let replacementHTML = document.body.innerHTML;
	for (let i = 0; i < triggerWords.length; i++) {
		let randIndex = Math.floor(Math.random() * niceWords.length);
		let triggerRegEx = new RegExp(triggerWords[i], 'gi');
		// console.log(triggerRegEx);
		replacementHTML = replacementHTML.replace(
			triggerRegEx,
			`<b style="color:pink;font-size:36px;">${niceWords[
				randIndex
			].toUpperCase()}</b>`
		);
	}
	// console.log(replacementHTML);

	document.body.innerHTML = replacementHTML;
};

// alternate replace function that works with the node list of anchor tags
// this is the one I'm calling
const replaceWordsAlternate = () => {
	console.log('REPLACED');
	let triggerWords = [
		'omicron',
		'inflation',
		'covid',
		'death',
		'war',
		'stocks',
		'trillion',
		'deficit',
		'debt',
		'guns',
		'alarms',
		'politics',
		'court',
		'biden',
		'republican',
		'democrat',
		'senate',
		'business',
		'elections',
		'fed',
		'hike',
		'news',
		'conservatives',
		'kill',
		'damage',
	];
	let niceWords = [
		'rainbows',
		'butterflies',
		'sunshine',
		'dessert',
		'sugar',
		'babies',
		'beautiful',
		'fluff',
		'giggle',
		'Marshawn Lynch',
	];

	let colors = [
		'red',
		'orange',
		'yellow',
		'green',
		'blue',
		'indigo',
		'violet',
		'pink',
	];
	elementList.forEach((element) => {
		let replacementHTML = element.innerHTML;
		for (let i = 0; i < triggerWords.length; i++) {
			let randIndex = Math.floor(Math.random() * niceWords.length);
			let anotherRandIndex = Math.floor(Math.random() * colors.length);
			let triggerRegEx = new RegExp(triggerWords[i], 'gi');
			// console.log(triggerRegEx);
			replacementHTML = replacementHTML.replace(
				triggerRegEx,
				`<span style="color:${
					colors[anotherRandIndex]
				};font-size:36px;">${niceWords[randIndex].toUpperCase()}</span>`
			);
		}
		element.innerHTML = replacementHTML;
	});
	// change all images.. not working lol
	// imageList.forEach((image) => {
	// 	image.src =
	// 		'https://gamepress.gg/pokemonmasters/sites/pokemonmasters/files/styles/300h/public/2020-07/pm0039_00_purin_256.ktx_.png?itok=Xgx6SSkk';
	// });
	// trying a CSS animation
	const cssBubbles = document.createElement('div');
	cssBubbles['id'] = 'background-wrap';
	cssBubbles.innerHTML = `<div class="bubble x1"></div>
  <div class="bubble x2"></div>
  <div class="bubble x3"></div>
  <div class="bubble x4"></div>
  <div class="bubble x5"></div>
  <div class="bubble x6"></div>
  <div class="bubble x7"></div>
  <div class="bubble x8"></div>
  <div class="bubble x9"></div>
  <div class="bubble x10"></div>`;
	document.body.appendChild(cssBubbles);
	document.body.style.background = '#00b4ff';
};

const putWordsBack = () => {
	document.body.innerHTML = initialHTML;
	// because of the CSS animation
	document.body.style.background = 'white';
};
