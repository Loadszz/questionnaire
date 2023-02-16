import React from 'react'

const Result = ({ correct, questions }) => {
	return (
		<div className='result'>
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKV2p2GLtPdMOO-cd2e9izWTox6r_8ZlNirA&usqp=CAU" alt="" />
			<h2 className='result__title'>Ви відгадали {correct == 1 ? `${correct} відповідь` : `${correct} відповідей`} з {questions.length}</h2>
			<a href="">
				<button className='result__button'>Спробувати ще раз</button>
			</a>
		</div>
	);
}

export default Result