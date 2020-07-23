//3. клик на простой уровень и добавление активного уровня

const simpleLevel = document.getElementById('simple');
console.log(simpleLevel);

const difficultyLevel = (btn) => {
	simpleLevel.classList.remove('active-level');
	btn.target.classList.add('active-level');
	console.log('Ура!')
};

simpleLevel.addEventListener('click', difficultyLevel);



// клики на все уровни и переключение активного уровня с квадратиком

// const levels = document.querySelectorAll('.game-level');
// console.log(levels);

// const difficultyLevel = (btn) => {
// 	levels.forEach(btn => btn.classList.remove('active-level'));
// 	btn.target.classList.add('active-level');
// 	console.log('Ура!');
// };

// levels.forEach(btn => {
// 	btn.addEventListener('click', difficultyLevel);
// 	// btn.classList.toggle('active-level');
// });



// 4. 


//5. клик на кнопку Начать игру, но здесь еще нужна функция, которая запустит игру

// const start = document.getElementById('begin');
// console.log(start);

// const beginGame = () => {
// 	console.log('Поехали');
// };

// start.addEventListener('click', beginGame);