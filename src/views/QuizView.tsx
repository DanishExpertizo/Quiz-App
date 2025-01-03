import { QuizDataInterface } from "@/interfaces/Types";
import QuizContent from "@/components/QuizContent";
import { getQuizData } from "../lib/getData";
import Loader from "@/components/loader/Loader";

export default async function QuizView() {
    const questions = await getQuizData();

    if (!questions || questions.length === 0) return <Loader />;

    return <QuizContent shuffledData={questions as QuizDataInterface[]} />;
}

