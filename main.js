// store initial HTML
const initialHTML = document.body.innerHTML;
console.log('INITIATED');

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
toggleButton['id'] = 'toggleButton';
toggleButton['class'] = 'off';
toggleButton.innerText = 'Reverse Words';

// const toggleButton = document.createElement('label');
// toggleButton['class'] = 'slider';
// toggleButton.innerText = 'Reverse Words';
// toggleButton.innerHTML = `<input type="checkbox" id="toggle" />`;
document.body.appendChild(toggleButton);
console.log(toggleButton);
toggleButton.addEventListener('click', () => {
	toggleButton.setAttribute('class', 'off');
});

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
	];
	let replacementHTML = document.body.innerHTML;
	for (let i = 0; i < triggerWords.length; i++) {
		let randIndex = Math.floor(Math.random() * niceWords.length);
		let triggerRegEx = new RegExp(triggerWords[i], 'gi');
		console.log(triggerRegEx);
		replacementHTML = replacementHTML.replace(
			triggerRegEx,
			`<b>${niceWords[randIndex].toUpperCase()}</b>`
		);
	}
	console.log(replacementHTML);

	document.body.innerHTML = replacementHTML;
};

const putWordsBack = () => {
	document.body.innerHTML = initialHTML;
};
