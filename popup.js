document.getElementById('replace-words').addEventListener('click', () => {
	console.log('hello');
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, { msg: 'Button clicked' });
	});
	// chrome.runtime.sendMessage('foo', function ignore_error() {
	// 	void chrome.runtime.lastError;
	// });
});

// const toggle = document.querySelector('#toggle');
// console.log(toggle);
// toggle.addEventListener('change', function () {
// 	console.log('CHANGED');
// 	if (this.checked) {
// 		replaceWords();
// 	} else {
// 		document.body.innerHTML = initialHTML;
// 	}
// });
