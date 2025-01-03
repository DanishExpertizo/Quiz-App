import path from 'path';
import fs from 'fs';
import { QuizDataInterface } from "@/interfaces/Types";
import shuffle from "@/utils/Shuffle";

export async function getQuizData() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'questions.json');
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const decodedData = jsonData.map((question: QuizDataInterface) => ({
        ...question,
        category: decodeURIComponent(question.category),
        correct_answer: decodeURIComponent(question.correct_answer),
        incorrect_answers: question.incorrect_answers.map(decodeURIComponent),
        question: decodeURIComponent(question.question),
    }));

    return shuffle(decodedData);
}