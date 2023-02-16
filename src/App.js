import { useState } from 'react';
import './App.scss';
import Result from './components/Result';
import Game from './components/Game';
import kef from './kef.jpg';


function App() {
	const questions = [
		{
			title: 'React - це... ?',
			variants: ['Бібліотека', 'Фреймворк', 'Додаток'],
			correct: 0
		},
		{
			title: 'Компонент - це... ?',
			variants: ['Додаток', 'Частиця додатка', 'Бібліотека'],
			correct: 1
		},
		{
			title: 'Що робить useState?',
			variants: ['Нічого', 'Рендер', 'Повертає масив'],
			correct: 2
		},
		{
			title: 'Для чого потрібен CSS?',
			variants: ['Для структури', 'Для графіки', 'Просто так'],
			correct: 1
		}
	]

	const [step, setStep] = useState(0)
	const [correct, setCorrect] = useState(0)
	const question = questions[step]

	const onClickVariant = (index) => {
		setStep(step + 1)
		if (index == question.correct) {
			setCorrect(correct + 1)
		}
	}

	return (
		<div className="page">
			<div className='container'>
				<div className="progress">
					{step != questions.length ? (
						<Game
							step={step}
							question={question}
							questions={questions}
							onClickVariant={onClickVariant} />
					) : (
						<Result correct={correct} questions={questions} />
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
