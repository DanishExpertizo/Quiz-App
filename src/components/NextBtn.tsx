import { ArrowRightIcon } from "../icons/Icons";
import { NextBtnInterface } from "../interfaces/Types";

const NextBtn = ({ isSelected, isLastQue, nextQuestion, setSubmit }: NextBtnInterface) => {
    const buttonClass = `border-none flex items-center mt-10 py-3 rounded-lg hover:scale-105 duration-300 ease-out bg-blue-600 hover:bg-blue-700 text-white transition-all group`

    return (
        <div className="flex justify-center">
            {isSelected && (!isLastQue ?
                (
                    <button onClick={nextQuestion} className={`${buttonClass.trim()} px-6`}>
                        Next Question <ArrowRightIcon />
                    </button>
                )
                :
                (
                    <button onClick={() => setSubmit(true)} className={`${buttonClass.trim()} px-8`}>
                        Submit
                    </button>
                )
            )
            }
        </div>

    )
}

export default NextBtn;