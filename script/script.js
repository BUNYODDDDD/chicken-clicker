var btn1Id = document.getElementById('btn1')
var btn2Id = document.getElementById('btn2')
var counter = 0;

btn2Id.addEventListener('click',function () {
	counter++;
	btn1Id.textContent = 'Заработано: '+counter
})