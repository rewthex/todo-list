export default (() => {
	const header = document.createElement('div');
	header.classList.add('header');
	header.textContent = 'Heres the header';

	document.addEventListener('timeFilter', (event) => {
		const filter = event.detail.filter;
		header.textContent = filter;
		console.log('we heee')
	});

	return header;
})();
