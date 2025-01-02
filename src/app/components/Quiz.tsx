'use client'

import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { ArrowRight } from "../Icons/Icons";
import { QuizProps } from "../Types/Types";
import shuffle from "../utils/Shuffle";
import ProgressBar from "./ProgressBar";

const QuizComp = ({ data, answers, isLastQue, setAnswers, setIsLastQue, setSubmit }: QuizProps) => {

    const [activeQue, setActiveQue] = useState<number>(0);
    const [shuffledOptions, setShuffledOptions] = useState<string[]>();
    const [isCorrect, setIsCorrect] = useState<boolean>();
    const [isSelected, setIsSelected] = useState<boolean>(false);

    const correctAnswers = answers.filter(item => item.isCorrect);
    const currentScore = (correctAnswers.length / data.length) * 100;
    const maxPossibleScore = ((correctAnswers.length + (data.length - (activeQue + 1))) / data.length) * 100;
    const averageScore = (currentScore + maxPossibleScore) / 2;

    const progressWidth = ((activeQue + 1) / data.length) * 100;

    useEffect(() => {
        if (data && data[activeQue]) {
            const incorrectAnswers = [...data[activeQue]?.incorrect_answers];
            const correctAnswer = data[activeQue]?.correct_answer;
            const combinedOptions = [...incorrectAnswers, correctAnswer];

            const resOptions = shuffle(combinedOptions);

            setShuffledOptions(resOptions);
        }
    }, [data, activeQue]);

    const checkAnswer = (selected: string) => {
        const newAnswer = {
            question: data[activeQue].question,
            selectedAnswer: selected,
            correctAnswer: data[activeQue].correct_answer,
            isCorrect: data[activeQue].correct_answer === selected,
        };

        if (activeQue + 1 === data.length) {
            setIsLastQue(true);
        }

        setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
        setIsSelected(true);
        setIsCorrect(data[activeQue].correct_answer === selected);
    }

    const nextQuestion = () => {
        setActiveQue(activeQue + 1);
        setIsCorrect(false);
        setIsSelected(false);
    }

    let renderStars = data[activeQue]?.difficulty;

    return (
        <div className="flex justify-center min-h-screen relative">
            <div className="h-3/4 p-10 w-2/4">
                <ProgressBar currentScore={currentScore} averageScore={averageScore} maxPossibleScore={maxPossibleScore} progressWidth={progressWidth} />

                <div className="min-h-[370px] mt-20 ml-14">
                    <h1 className="text-[32px] font-semibold">Question <span>{activeQue + 1}</span> of <span>{data.length}</span></h1>
                    <h3 className="text-gray-700">{data[activeQue]?.category}</h3>
                    <div className="flex mb-5">
                        <Star className={`h-3 w-3 fill-current`} />
                        <Star className={`h-3 w-3 ${(renderStars === 'medium' || renderStars === 'hard') && 'fill-current'}`} />
                        <Star className={`h-3 w-3 ${renderStars === 'hard' && 'fill-current'}`} />
                    </div>
                    <h1>{data[activeQue]?.question}</h1>
                    <div className="grid grid-cols-2 mt-5">
                        {
                            shuffledOptions?.map((item: string, index) => {
                                return (
                                    <li key={index}>
                                        <button onClick={() => checkAnswer(item)} disabled={isSelected} className={`border border-gray-500 rounded-lg h-12 bg-blue-400 min-w-60 px-2 hover:scale-105 transition-all my-5 ${isSelected && 'hover:transform-none bg cursor-not-allowed bg-blue-200'}`}>{item}</button>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
                <h1 className="text-center text-[32px] w-full">{isSelected && (isCorrect ? <span className="text-green-500">Correct!!</span> : <span className="text-red-500">Sorry!</span>)}
                </h1>
                <div className="flex justify-center">
                    {isSelected && (!isLastQue ?
                        (
                            <button onClick={nextQuestion} className={`border-none flex items-center mt-10 px-6 py-3 rounded-lg hover:scale-105 duration-300 ease-out bg-blue-600 hover:bg-blue-700 text-white transition-all group`}>Next Question <ArrowRight /></button>
                        )
                        :
                        (
                            <button onClick={() => setSubmit(true)} className='border-none flex items-center mt-10 px-6 py-3 rounded-lg hover:scale-105 duration-300 ease-out bg-blue-600 hover:bg-blue-700 text-white transition-all group'>Submit</button>
                        )
                    )
                    }
                </div>

            </div>
        </div>
    )
}

export default QuizComp;