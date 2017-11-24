	const output = document.getElementById('output'),
		  message = document.getElementById('message'),
		  submit = document.getElementById('form'),
		  arr = [];
	let state = localStorage.getItem('key');
	state = state.split(',');

	const addMessage = (mass, elem) => {
		const newDiv = document.createElement('div');
	 	newDiv.innerHTML = mass[elem];
	 	output.appendChild(newDiv);
	}
	


	if (state != null) {
		for (var i = 0; i < state.length; i++) {			
			addMessage(state, i)
		}
	}

	
	submit.addEventListener('submit', (event) => {
		event.preventDefault();
		arr.push(message.value);
		addMessage(arr, arr.length-1);
	 	message.value = '';
	 	setTimeout(() => {
	 		arr.push(`эмуляция ответа`);
	 		addMessage(arr, arr.length-1);
	 		localStorage.setItem('key', arr);
	 	},1000);
	 	localStorage.setItem('key', arr);
	})