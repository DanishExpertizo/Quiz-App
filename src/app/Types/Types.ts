import { Dispatch, SetStateAction } from "react";

export interface QuizOptionsState {
    options: string;
}

export interface QuizData {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface Answers {
    question: string;
    selectedAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
}

export interface QuizProps {
    data: QuizData[];
    answers: Answers[]
    isLastQue: boolean
    setAnswers: Dispatch<SetStateAction<Answers[]>>
    setIsLastQue: Dispatch<SetStateAction<boolean>>
    setSubmit: Dispatch<SetStateAction<boolean>>
}

export interface ResultProps {
    answers: Answers[];
}

export interface ProgressBarProps {
    currentScore: number;
    averageScore: number;
    maxPossibleScore: number;
    progressWidth: number;
}