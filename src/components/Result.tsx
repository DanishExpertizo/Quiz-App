import { RestartArrowIcon } from "../icons/Icons";
import { ResultInterface } from "../interfaces/Types";


const Result = ({ answers }: ResultInterface) => {
    const correctAnswers = answers.filter(item => item.isCorrect);

    return (
        <div className="flex items-center justify-center mt-36">
            <div className="flex flex-col items-center gap-5">
                <div className="p-6 scale-110">
                    <h1 className="text-[50px] font-semibold mb-4 text-center">Result</h1>
                    {/* <h1 className="text-primary text-lg mb-2">
                        Score: {((correctAnswers.length / 20) * 100).toFixed(2)}%
                    </h1>
                    <h2 className="text-green-500 text-lg mb-1">Correct Answers: {correctAnswers.length}</h2>
                    <h2 className="text-red-500 text-lg mb-6">Wrong Answers: {20 - correctAnswers.length}</h2> */}

                    <table className="table-auto w-[450px] border-collapse border border-gray-200 rounded-lg shadow-sm">
                        <tbody>
                            <tr className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2 bg-gray-50">Score</td>
                                <td className="border border-gray-300 px-4 py-2 text-center bg-gray-50">{((correctAnswers.length / 20) * 100).toFixed(2)}%</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="border border-gray-300 text-green-500 text-lg px-4 py-2">Correct Answers</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{correctAnswers.length}</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="border border-gray-300 text-red-500 text-lg px-4 py-2">Wrong Answers</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{20 - correctAnswers.length}</td>
                            </tr>
                        </tbody>
                    </table>

                    <button
                        onClick={() => window.location.reload()}
                        className="mt-10 flex items-center gap-2 px-8 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-transform duration-300 ease-out group text-lg mx-auto"
                    >
                        Restart <RestartArrowIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Result;