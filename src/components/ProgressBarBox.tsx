import { ProgressBarBoxInterface } from "@/interfaces/Types";

const ProgressBarBox = ({ left, width, color }: ProgressBarBoxInterface) => {
    return (
        <div
            className={`absolute h-full ${typeof color === 'number' ? `bg-blue-${color}` : `bg-[${color}]`
                } transition-all duration-300 flex items-center justify-center overflow-hidden text-sm text-white`}
            style={{
                left: `${left}%`,
                width: `${width}%`,
            }}
        >
        </div>
    )
}

export default ProgressBarBox;