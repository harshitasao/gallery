var container = document.querySelector('.container');
var unsplash =  'https://source.unsplash.com/random/'
const rows = 6

for(let i = 0; i < rows*3; i++)
{
	const img = document.createElement('img')
	img.src = `${unsplash}${getRandomSize()}`
	container.appendChild(img)
}

function getRandomSize(){
	 return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr(){
	return Math.floor(Math.random()*10) + 300
}