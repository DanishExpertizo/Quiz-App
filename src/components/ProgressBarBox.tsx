import { ProgressBarBoxInterface } from "@/interfaces/Types";

const ProgressBarBox = ({ left, width, color }: ProgressBarBoxInterface) => {
    return (
        <div
            className={`absolute h-full transition-all duration-300 flex items-center justify-center overflow-hidden text-sm text-white`}
            style={{
                backgroundColor: color,
                left: `${left}%`,
                width: `${width}%`,
            }}
        >
        </div>
    )
}

export default ProgressBarBox;