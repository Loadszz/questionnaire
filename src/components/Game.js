import React from 'react'

const Game = ({ step, question, questions, onClickVariant }) => {
	const percentage = Math.round((step / questions.length) * 100);

	return (
		<div className='game'>
			<div className='game__bar-body'>
				<div style={{ width: `${percentage}%` }} className="game__bar"></div>
			</div>
			<h1 className='game__title'>{question.title}</h1>
			<ul className='game__list'>
				{question.variants.map((variant, index) => (
					<li key={variant} onClick={() => onClickVariant(index)}>{variant}</li>
				))}
			</ul>
		</div>
	);
}

export default Game