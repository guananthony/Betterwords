const contents = $('#contents');
const contentsParent = contents.parent();
contents.remove();

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function handleData(imageData) {
	return imageData.urls.regular;
}

contentsParent.append(
	'<div class="focus-div"><h1 class="coloredText">Quit goofing off and get back to work.</h1></div>'
);

$.get(
	'https://api.unsplash.com/photos/random/?client_id=x8cyBFMNkUmoQsmnCY4Gzkj6ulGBOVI5EUvOQgqIfzc',
	function (data) {
		contentsParent.append(
			`<div class="randomPhotoContainer"><img id="randomPhoto" src=${data.urls.regular}' alt="random Unsplash photo"></div>`
		);
		$('#randomPhoto').click(function () {
			console.log('clicked');
			$.get(
				'https://api.unsplash.com/photos/random/?client_id=x8cyBFMNkUmoQsmnCY4Gzkj6ulGBOVI5EUvOQgqIfzc',
				function (data) {
					$('#randomPhoto').attr('src', data.urls.regular);
				}
			);
		});
	}
);

// $.ajax({
// 	method: 'GET',
// 	url: 'https://picsum.photos/list',
// 	success: function (result) {
// 		console.log(result.length);
// 	},
// 	error: function (err) {
// 		console.log(err);
// 	},
// });

// const icon = document.getElementById('logo-icon');
// icon.parentNode.removeChild(icon);

// const avatar = document.querySelector('[alt="Avatar image"]');
// avatar.parentNode.appendChild(document.createElement('p'));
// avatar.parentNode.removeChild(avatar);
