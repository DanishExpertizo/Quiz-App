import { ShuffledOptionsInterface } from "@/interfaces/Types";
import shuffle from "@/utils/Shuffle";
import { useEffect, useState } from "react";
import RenderOptions from "./RenderOptions";
import Loader from "./loader/Loader";

const ShuffleOptions = (props: ShuffledOptionsInterface) => {

    const { isSelected, data, activeQue, answers, setCurrentScore, setMaxScore, setProgress, setMinScore, setIsLastQue, setIsSelected, setAnswers, setIsCorrect } = props;

    const [selectedAns, setSelectedAns] = useState<string>('');
    const [shuffledOptions, setShuffledOptions] = useState<string[]>(['']);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        if (data && data[activeQue]) {
            const incorrectAnswers = [...data[activeQue]?.incorrect_answers];
            const correctAnswer = data[activeQue]?.correct_answer;
            const combinedOptions = [...incorrectAnswers, correctAnswer];

            const resOptions = shuffle(combinedOptions);

            setShuffledOptions(resOptions as string[]);
        }
    }, [data, activeQue]);

    const checkAnswer = (selected: string) => {
        const newAnswer = {
            question: data[activeQue].question,
            selectedAnswer: selected,
            correctAnswer: data[activeQue].correct_answer,
            isCorrect: data[activeQue].correct_answer === selected,
        };

        setSelectedAns(selected);

        const ansArr = [...answers, newAnswer]

        const correctAnswers = ansArr.filter(item => item.isCorrect);

        const currentScoreCal = (correctAnswers.length / (activeQue + 1)) * 100;
        setCurrentScore(currentScoreCal)
        const maxPossibleScore = ((correctAnswers.length + (data.length - (activeQue + 1))) / data.length) * 100;
        setMaxScore(maxPossibleScore)
        const minScoreCal = (correctAnswers.length / data.length) * 100;
        setMinScore(minScoreCal);

        const progressWidth = ((activeQue + 1) / data.length) * 100;
        setProgress(progressWidth);

        if (activeQue + 1 === data.length) {
            setIsLastQue(true);
        }

        setAnswers(ansArr);
        setIsSelected(true);
        setIsCorrect(data[activeQue].correct_answer === selected);
    }

    setTimeout(() => {
        setLoading(false);
    }, 500);

    if (loading) return <Loader />

    return (
        <>
            <RenderOptions shuffledOptions={shuffledOptions} isSelected={isSelected} checkAnswer={checkAnswer} selectedAns={selectedAns} correctAns={data[activeQue].correct_answer} />
        </>
    )
}

export default ShuffleOptions;