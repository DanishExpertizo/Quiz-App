'use client'

import { Star } from "lucide-react";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { QuizInterface } from "../interfaces/Types";
import NextBtn from "./NextBtn";
import ProgressBar from "./ProgressBar";
import ShuffleOptions from "./ShuffleOptions";

const Quiz = ({ data, answers, setAnswers, setSubmit }: QuizInterface) => {
    const [activeQue, setActiveQue] = useState<number>(0);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [currentScore, setCurrentScore] = useState<number>(0);
    const [maxScore, setMaxScore] = useState<number>(100);
    const [minScore, setMinScore] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [isLastQue, setIsLastQue] = useState<boolean>(false);

    const nextQuestion: () => void = () => {
        setActiveQue(activeQue + 1);
        setIsCorrect(false);
        setIsSelected(false);
    }

    const renderStars = data[activeQue]?.difficulty;

    return (
        <div className="flex items-center justify-center min-h-screen relative container mx-auto">
            <LoadingBar className='py-3' color="#a1a1a1" progress={progress} onLoaderFinished={() => setProgress(100)}
            />
            <div className="h-3/4 p-10 w-3/4">
                <ProgressBar currentScore={currentScore} minScore={minScore} maxPossibleScore={maxScore} />

                <div className="min-h-[370px] mt-20 flex items-center justify-center">
                    <div className="inline-block min-w-full">
                        <h1 className="text-[32px] font-semibold">Question <span>{activeQue + 1}</span> of <span>{data.length}</span></h1>
                        <h3 className="text-gray-700">{data[activeQue]?.category}</h3>
                        <div className="flex mb-5">
                            <Star className={`h-3 w-3 fill-current`} />
                            <Star className={`h-3 w-3 ${(renderStars === 'medium' || renderStars === 'hard') && 'fill-current'}`} />
                            <Star className={`h-3 w-3 ${renderStars === 'hard' && 'fill-current'}`} />
                        </div>
                        <h1>{data[activeQue]?.question}</h1>
                        <ShuffleOptions isSelected={isSelected} data={data} activeQue={activeQue} answers={answers} setCurrentScore={setCurrentScore} setMaxScore={setMaxScore} setProgress={setProgress} setMinScore={setMinScore} setIsLastQue={setIsLastQue} setIsSelected={setIsSelected} setAnswers={setAnswers} setIsCorrect={setIsCorrect} />
                    </div>
                </div>
                <div className="h-48">
                    <h1 className="text-center text-[32px] w-full">{isSelected && (isCorrect ? <span className="text-green-500">Correct!</span> : <span className="text-red-500">Sorry!</span>)}
                    </h1>
                    <NextBtn isSelected={isSelected} isLastQue={isLastQue} nextQuestion={nextQuestion} setSubmit={setSubmit} />
                </div>
            </div>
        </div >
    )
}

export default Quiz;