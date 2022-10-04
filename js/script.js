


const btn = document.getElementById('btn');

let amount = document.getElementById('counter');

const popUp = document.getElementById('popUp');

const BG = document.getElementById('bg');



const clicker = function(){
	let x = 0;
	btn.addEventListener('click', function(){
		x++;
		amount.innerHTML = x;
		if (x === 6){
			popUp.classList.remove('dNone');
		} else if (x === 25){
			popUp.classList.add('dNone');
		};
		if (x === 50){
			BG.style.backgroundColor = 'khaki';
			popUp.classList.remove('dNone');
			popUp.innerText = 'oh.'
		} else if (x === 55){
			popUp.innerText = 'Is that seriously it?'
		} else if (x === 69){
			popUp.innerText = 'nice.'
			BG.style.backgroundColor = 'pink';
		} else if (x === true)
			popUp.classList.add('dNone');
	});
};

clicker();




