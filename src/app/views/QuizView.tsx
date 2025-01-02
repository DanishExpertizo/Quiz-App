'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Answers, QuizData, QuizOptionsState } from "../Types/Types";
import QuizComp from "../components/Quiz";
import ResultComp from "../components/Result";
import jsonData from '../data/questions.json';
import shuffle from "../utils/Shuffle";

const Quiz = () => {
    const [data, setData] = useState<QuizData[]>([]);
    const [answers, setAnswers] = useState<Answers[]>([]);
    const [isLastQue, setIsLastQue] = useState<boolean>(false);
    const [submit, setSubmit] = useState<boolean>(false);
    const router = useRouter();

    const fetchQuestions = async () => {
        try {
            const decodedData = jsonData.map((question: QuizData) => ({
                ...question,
                category: decodeURIComponent(question.category),
                correct_answer: decodeURIComponent(question.correct_answer),
                incorrect_answers: question.incorrect_answers.map((answer: string) =>
                    decodeURIComponent(answer)
                ),
                question: decodeURIComponent(question.question),
            }));

            const shuffledData = shuffle(decodedData);
            setData(shuffledData);

            router.push(`expertizo-quiz?${shuffledData[0].question}`);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    return (
        <>
            {
                submit ?
                    <ResultComp answers={answers} />
                    :
                    < QuizComp data={data} answers={answers} isLastQue={isLastQue} setSubmit={setSubmit} setAnswers={setAnswers} setIsLastQue={setIsLastQue} />
            }
        </>
    )
}

export default Quiz;