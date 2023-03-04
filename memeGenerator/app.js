let btnSubmit = document.querySelector('#btnSubmit');
btnSubmit.addEventListener('click', function(event) {
	event.preventDefault();
	createMeme();
});
function createMeme() {
	const divMemeHolder = document.createElement('div');
	const divParent = document.querySelector('.memes');
	divParent.append(divMemeHolder);
	divMemeHolder.className = 'memeHolder';
	const divHeader = document.createElement('div');
	divMemeHolder.append(divHeader);
	const textHeader = document.querySelector('#textHeader');
	divHeader.innerText = textHeader.value;
	textHeader.value = '';
	divHeader.className = 'memeHeader';
	const imageMeme = document.createElement('img');
	divMemeHolder.append(imageMeme);
	const textURL = document.querySelector('#textURL');
	imageMeme.src = textURL.value;
	// alert(imageMeme.height);
	textURL.value = '';
	imageMeme.className = 'newImages';
	// divHeader.innerText = 'Header Text';
	const divFooter = document.createElement('div');
	divMemeHolder.append(divFooter);
	const textFooter = document.querySelector('#textFooter');
	divFooter.innerText = textFooter.value;
	textFooter.value = '';
	divFooter.className = 'footerMeme';
	const btnDelete = document.createElement('button');
	divMemeHolder.append(btnDelete);
	btnDelete.innerText = 'Delete Meme';
	btnDelete.className = 'deleteButtons';
	btnDelete.addEventListener('click', function(event) {
		event.preventDefault();
		let delParent = btnDelete.parentElement;
		delParent.remove();
		btnDelete.remove();
	});
}
