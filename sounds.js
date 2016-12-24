//window.addEventListener('keydown', playSound); 

	function playSound(number){
		var checkedValue = document.getElementById('cboxR').checked;
		if (checkedValue){
		setTimeout(delay, 1, number);
		setTimeout(delay, 152, number);
		setTimeout(delay, 477, number);
		setTimeout(delay, 592, number);
		setTimeout(delay, 777, number);
		setTimeout(delay, 992, number);
		setTimeout(delay, 1177, number);
		setTimeout(delay, 1292, number);
			} else 	{
			playSound2(number);}
			console.log(checkedValue);
	}

	function delay(number){
		playSound2(number);
	}

	function playSound2 (e) {
		const audio = document.querySelector(`audio[data-key="${e}"]`);
		const key = document.querySelector(`.key[data-key="${e}"]`);
		if(!audio) return; //if it isn't mapped stop
		audio.currentTime = 0;
		audio.play();
		//console.log(key);
		key.classList.add('playing');
	}
	function removeTransition(e){
		if(e.propertyName !== 'transform') return;
		console.log(e.propertyName);
		this.classList.remove('playing');

	}
	const keys = document.querySelectorAll('.key')
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));