const  levels = document.querySelectorAll('.game-level');
let level = 3;
const start = document.getElementById('begin');
let body = document.body;
const wrap = document.createElement('div');
const field = document.querySelector('.container');

const difficultyLevel = e => {
	levels.forEach(item => item.classList.remove('active-level'));
	e.target.classList.add('active-level');
	level = e.target.dataset.level;

	let three = document.querySelector('[data-level="3"]');
	if (!e.target.dataset.level) {
		level = 3;
		three.classList.add('active-level');
	}
};
levels.forEach(item => addEventListener('click', difficultyLevel));

const beginGame = () => {
	const random = Math.floor(Math.random()*level);
	field.classList.add('hidden');
	wrap.classList.add('flip');
	body.append(wrap);
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

		switch(i) {
			case 2:
				wrap.classList.add('flip-three');
				break;
			case 5:
				wrap.classList.remove('flip-three');
				wrap.classList.add('flip-six');
				break;
			case 9:
				wrap.classList.remove('flip-six');
				wrap.classList.add('flip-ten');
				break;
			default:
				wrap.classList.add('flip');
				break;
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
	const overturnCard = e => {
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
	const secondOverturnCard = () => {
	}
	body.addEventListener('click', secondOverturnCard);

	removeEventListener('click', difficultyLevel);
};

start.addEventListener('click', beginGame);