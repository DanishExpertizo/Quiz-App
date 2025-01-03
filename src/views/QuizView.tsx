

import { QuizDataInterface } from "@/interfaces/Types";
import QuizContent from "../components/QuizContent";
import jsonData from '../data/questions.json';
import shuffle from "../utils/Shuffle";

const QuizView = () => {

    const decodedData = jsonData.map((question: QuizDataInterface) => ({
        ...question,
        category: decodeURIComponent(question.category),
        correct_answer: decodeURIComponent(question.correct_answer),
        incorrect_answers: question.incorrect_answers.map((answer: string) =>
            decodeURIComponent(answer)
        ),
        question: decodeURIComponent(question.question),
    }));
    const shuffledData = shuffle(decodedData);

    return (<QuizContent shuffledData={shuffledData as QuizDataInterface[]} />)
}

export default QuizView;