const boxes = document.querySelectorAll('.emulator-container');

boxes.forEach(item => {
	item.addEventListener('click', event => {
		for (i = 0; i < boxes.length; i++) {
			boxes[i].classList.remove('selected');
		}
		item.classList.add('selected');
	})
})