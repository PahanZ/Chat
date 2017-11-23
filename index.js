window.addEventListener('load', () => {
	const output = document.getElementById('output');
	let state = localStorage.getItem('key');
	if (state != null) {
		output.innerHTML = state;
	}
	// if (state != null) {
	// 	for (var i = 0; i < state.length; i++) {
	// 		output.innerHTML = `<div>${state[i]}</div>`;
	// 		console.log(state)
	// 	}
	// }
	const message = document.getElementById('message'),
		submit = document.getElementById('submit'),
		arr = [];
	submit.addEventListener('click', (event) => {
		event.preventDefault();
		arr.push(message.value);
		display();
	 	message.value = '';
	 	setTimeout(() => {
	 		arr.push(`эмуляция ответа`)
	 		display();
	 		localStorage.setItem('key', arr);
	 	},1000);
	 	localStorage.setItem('key', arr);
	})

	const display = () => {
		const newDiv = document.createElement('div');
	 	newDiv.innerHTML = arr[arr.length-1];
	 	output.appendChild(newDiv);
	}	
})

