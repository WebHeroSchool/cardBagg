const Levels = document.querySelectorAll('.game-level');
let level = 3;

const difficultyLevel = (e) => {
	Levels.forEach(item => item.classList.remove('active-level'));
	e.target.classList.add('active-level');
  	level = e.target.dataset.level;

  	let three = document.querySelector('[data-level="3"]');

  	if (e.target.dataset.level === undefined) {
  		level = 3;
  		three.classList.add('active-level');
  	}
};
Levels.forEach(item => addEventListener('click', difficultyLevel));

const start = document.getElementById('begin');
const body = document.body;
const wrap = document.createElement('div');
const field = document.querySelector('.container');

const beginGame = () => {
	field.classList.add('hidden');
	wrap.classList.add('flip');
	body.append(wrap);
	const random = Math.floor(Math.random()*level);
	for (let i = 0; i < level; i++) {
		const flipCard = document.createElement('div');
		const flipCardInner = document.createElement('div');
		const cardBack = document.createElement('div');
		const card = document.createElement('img');
		const cardFront = document.createElement('div');
		flipCard.classList.add('flip-card');
		flipCardInner.classList.add('flip-card-inner');
		cardBack.classList.add('card-back');
		card.classList.add('card-back__wrap');
		cardFront.classList.add('card-front');

		if (i === 2) {
			wrap.classList.add('flip-three');
		} else if (i === 5) {
			wrap.classList.remove('flip-three');
			wrap.classList.add('flip-six');
		} else if (i === 9) {
			wrap.classList.remove('flip-six');
			wrap.classList.add('flip-ten');
		} else {
			wrap.classList.add('flip');
		}

		if (i === random) {
			cardFront.classList.add('card-front_bug');
		}

		wrap.append(flipCard);
		flipCard.append(flipCardInner);
		flipCardInner.append(cardBack);
		cardBack.append(card);
		flipCardInner.append(cardFront);
	}

	const turn = document.querySelectorAll('.flip-card');
	let isFlip = false;
	const overturnCard = (e) => {
		if (!isFlip) {
			e.currentTarget.classList.add('active');
			isFlip = true;
		} else {
			window.location.reload();
		}
	};
	turn.forEach(item => {
		item.addEventListener('click', overturnCard);
	});
	removeEventListener('click', difficultyLevel);
};

start.addEventListener('click', beginGame);