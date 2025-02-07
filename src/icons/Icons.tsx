import { IconInterface } from "@/interfaces/Types";
import { ChevronRight, RefreshCcw, Star } from "lucide-react";

export const ArrowRightIcon = () => {
    return <ChevronRight className="group-hover:translate-x-2 transition-all duration-300" />
}

export const RestartArrowIcon = () => {
    return <RefreshCcw className="h-5 w-5" />
}

export const StarIcon = ({ className }: IconInterface) => {
    return <Star className={className ?? ''} />;
}
