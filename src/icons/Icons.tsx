import { StarIconInterface } from "@/interfaces/Types";
import { ChevronRight, RefreshCcw, Star } from "lucide-react";

export const ArrowRightIcon = () => {
    return <ChevronRight className="group-hover:translate-x-2 transition-all duration-300" />
}

export const RestartArrowIcon = () => {
    return <RefreshCcw className="h-5 w-5" />
}

export const StarIcon = ({ difficulty, index }: StarIconInterface) => {
    const isFilled =
        difficulty === 'easy' && index === 0 ||
        difficulty === 'medium' && (index === 0 || index === 1) ||
        difficulty === 'hard';

    return <Star className={`h-3 w-3 ${isFilled ? 'fill-black' : ''}`} />;
};
