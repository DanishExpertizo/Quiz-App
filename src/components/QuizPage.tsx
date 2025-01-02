'use client'
import { useState } from "react";
import { AnswersInterface, QuizPageInterface } from "../interfaces/Types";
import Result from "./Result";
import Quiz from "./Quiz";

const QuizPage = ({ shuffledData }: QuizPageInterface) => {
    const [answers, setAnswers] = useState<AnswersInterface[]>([]);
    const [submit, setSubmit] = useState<boolean>(false);

    return (
        <>
            {
                submit ?
                    <Result answers={answers} />
                    :
                    < Quiz data={shuffledData} answers={answers} setSubmit={setSubmit} setAnswers={setAnswers} />
            }
        </>
    )
}

export default QuizPage;