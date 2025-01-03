import { RenderOptionsInterface } from "@/interfaces/Types";

const RenderOptions = ({ shuffledOptions, isSelected, checkAnswer, activeQue, selectedAns, data }: RenderOptionsInterface) => {
    return (
        <div className="flex justify-center mt-5 items-center min-h-52">
            <div className="grid grid-cols-2 gap-6">
                {
                    shuffledOptions?.map((item: string, index: number) => {
                        return (
                            <div key={index}>
                                <button onClick={() => checkAnswer(item)} disabled={isSelected} className={`border border-gray-400 text-white rounded-lg h-12 min-w-60 px-2 transition-all my-5 ${isSelected ? `hover:transform-none cursor-not-allowed ${item === selectedAns
                                    ? (selectedAns === data[activeQue].correct_answer
                                        ? 'bg-green-500 cursor-default'
                                        : 'bg-red-500')
                                    :
                                    'bg-blue-300 cursor-default'
                                    }`
                                    :
                                    'bg-blue-500 cursor-pointer hover:scale-105'
                                    }`}>
                                    {item}
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RenderOptions;