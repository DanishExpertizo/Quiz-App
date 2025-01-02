import { ProgressBarProps } from "../Types/Types";

const ProgressBar = ({ currentScore, averageScore, maxPossibleScore, progressWidth }: ProgressBarProps) => {
    return (
        <>
            <div className="flex justify-between mb-2 text-sm font-medium text-gray-700">
                <p>Score: {currentScore.toFixed(2)}%</p>
                <p>Average Score: {averageScore.toFixed(2)}%</p>
                <p>Max Score: {maxPossibleScore.toFixed(2)}%</p>
            </div>

            <div className="relative w-full h-10 bg-blue-200 rounded-2xl overflow-hidden">
                <div
                    className="absolute h-full bg-blue-300 transition-all duration-300 opacity-70"
                    style={{
                        width: `${progressWidth}%`,
                    }}
                >
                    <div
                        className="absolute h-full bg-blue-900 transition-all duration-300"
                        style={{
                            width: `${currentScore}%`,
                        }}
                    ></div>

                    <div
                        className="absolute h-full bg-blue-500 transition-all duration-300"
                        style={{
                            left: `${currentScore}%`,
                            width: `${averageScore - currentScore}%`,
                        }}
                    ></div>

                    <div
                        className="absolute h-full bg-[#61a8ff] transition-all duration-300"
                        style={{
                            left: `${averageScore}%`,
                            width: `${maxPossibleScore - averageScore}%`,
                        }}
                    ></div>
                </div>
            </div>
        </>
    )
}

export default ProgressBar;