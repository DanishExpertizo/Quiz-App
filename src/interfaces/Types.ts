import { Dispatch, SetStateAction } from "react";

export interface QuizOptionsStateInterface {
    options: string;
}

export interface IconInterface {
    className?: string;
}

export interface QuizDataInterface {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface AnswersInterface {
    question: string;
    selectedAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
}

export interface QuizInterface {
    data: QuizDataInterface[];
    answers: AnswersInterface[]
    setAnswers: Dispatch<SetStateAction<AnswersInterface[]>>
    setSubmit: Dispatch<SetStateAction<boolean>>
}

export interface QuizPageInterface {
    shuffledData: QuizDataInterface[];
}

export interface ResultInterface {
    answers: AnswersInterface[];
}

export interface ProgressBarInterface {
    currentScore: number;
    minScore: number;
    maxPossibleScore: number;
}

export interface NextBtnInterface {
    isSelected: boolean;
    isLastQue: boolean;
    nextQuestion: () => void;
    setSubmit: Dispatch<SetStateAction<boolean>>;
}

export interface ShuffledOptionsInterface {
    isSelected: boolean;
    data: QuizDataInterface[];
    activeQue: number;
    answers: AnswersInterface[];
    setCurrentScore: Dispatch<SetStateAction<number>>;
    setMaxScore: Dispatch<SetStateAction<number>>;
    setProgress: Dispatch<SetStateAction<number>>;
    setMinScore: Dispatch<SetStateAction<number>>;
    setIsLastQue: Dispatch<SetStateAction<boolean>>;
    setIsSelected: Dispatch<SetStateAction<boolean>>;
    setAnswers: Dispatch<SetStateAction<AnswersInterface[]>>;
    setIsCorrect: Dispatch<SetStateAction<boolean>>;
}

export interface RenderOptionsInterface {
    shuffledOptions: string[];
    isSelected: boolean;
    checkAnswer: (selected: string) => void;
    selectedAns: string;
    correctAns: string;
}

export interface ProgressBarBoxInterface {
    left: number;
    width: number;
    color: string;
}

export interface CheckFilled {
    [key: string]: number;
}
