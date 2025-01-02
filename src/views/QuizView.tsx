

import { QuizDataInterface } from "@/interfaces/Types";
import QuizPage from "../components/QuizPage";
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

    return (<QuizPage shuffledData={shuffledData as QuizDataInterface[]} />)
}

export default QuizView;