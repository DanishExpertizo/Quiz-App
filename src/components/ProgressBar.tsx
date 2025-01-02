import { ProgressBarInterface } from "../interfaces/Types";
import ProgressBarBox from "./ProgressBarBox";

const ProgressBar = ({ currentScore, minScore, maxPossibleScore }: ProgressBarInterface) => {
    return (
        <>
            <div className="flex justify-between mb-2 text-sm font-medium text-gray-700">
                <p>Minimum Score: {minScore.toFixed(2)}%</p>
                <p>Score: {currentScore.toFixed(2)}%</p>
                <p>Max Score: {maxPossibleScore.toFixed(2)}%</p>
            </div>

            <div className="relative w-full h-10 bg-blue-200 rounded-2xl overflow-hidden">
                <div
                    className="absolute h-full w-full bg-blue-200 transition-all duration-300 opacity-70 text-right"
                >
                    <div className="relative w-full h-10 bg-blue-200 rounded-2xl overflow-hidden">
                        <ProgressBarBox left={0} width={minScore} color={'#1E3A8A'} />
                        <ProgressBarBox left={minScore} width={currentScore - minScore} color={'#3B82F6'} />
                        <ProgressBarBox left={currentScore} width={maxPossibleScore - currentScore} color={'#61a8ff'} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProgressBar;