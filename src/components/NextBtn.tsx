import { ArrowRightIcon } from "../icons/Icons";
import { NextBtnInterface } from "../interfaces/Types";

const NextBtn = ({ isSelected, isLastQue, nextQuestion, setSubmit }: NextBtnInterface) => {
    return (
        <div className="flex justify-center">
            {isSelected && (!isLastQue ?
                (
                    <button onClick={nextQuestion} className={`border-none flex items-center mt-10 px-6 py-3 rounded-lg hover:scale-105 duration-300 ease-out bg-blue-600 hover:bg-blue-700 text-white transition-all group`}>Next Question <ArrowRightIcon /></button>
                )
                :
                (
                    <button onClick={() => setSubmit(true)} className='border-none flex items-center mt-10 px-8 py-3 rounded-lg hover:scale-105 duration-300 ease-out bg-blue-600 hover:bg-blue-700 text-white transition-all group'>Submit</button>
                )
            )
            }
        </div>

    )
}

export default NextBtn;