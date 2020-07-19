const simpleLevel = document.getElementById('simple');
console.log(simpleLevel);

const difficultyLevel = () => {
	simpleLevel.classList.toggle('active-level');
	console.log('Ура!')
};
simpleLevel.addEventListener('click', difficultyLevel);

// const levels = document.querySelectorAll('input.game__simple, input.game__medium, input.game__hard');
// console.log(levels);

// const difficultyLevel = () => {
// 	levels.classList.toggle('active-level');
// 	console.log('Ура!');
// };

// levels.forEach(inp => {
// 	inp.addEventListener('click', difficultyLevel);
// });
