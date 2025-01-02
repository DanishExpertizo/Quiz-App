import { useRouter } from "next/navigation";
import { RestartArrow } from "../Icons/Icons";
import { ResultProps } from "../Types/Types";


const ResultComp = ({ answers }: ResultProps) => {
    const correctAnswers = answers.filter(item => item.isCorrect);
    const router = useRouter();

    return (
        <div className="flex items-center justify-center mt-36">
            <div className="flex flex-col items-center gap-5">
                <h1 className="text-[32px] font-semibold">Result</h1>
                <h1 className="text-[56px]">{(correctAnswers.length / 20) * 100}%</h1>
                <h2 className="text-green-500">Correct Answers: {correctAnswers.length}</h2>
                <h2 className="text-red-500">Wrong Answers: {20 - correctAnswers.length}</h2>
                <button onClick={() => router.push('/')} className='border-none flex items-center gap-2 mt-10 px-8 py-3 rounded-lg hover:scale-105 duration-300 ease-out bg-blue-600 hover:bg-blue-700 text-white transition-all group text-lg'>Restart <RestartArrow /></button>
            </div>
        </div>
    )
}

export default ResultComp;