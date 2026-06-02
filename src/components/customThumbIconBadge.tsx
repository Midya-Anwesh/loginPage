import { type LucideIcon } from "lucide-react";
import { Badge } from "./ui/badge";

export function CustomThumbBadge({ LeftIcon, text, RightIcon, badgeClassName, iconStroke, badgeColor}: {
    LeftIcon ?: LucideIcon,
    text: string | number,
    RightIcon ?: LucideIcon,
    badgeClassName: string,
    iconStroke?: string,
    badgeColor?: string
}){
    return (

    <Badge className={`${badgeClassName} [&>svg]:size-5!`} color={iconStroke}>
        { LeftIcon && <LeftIcon fill="white" stroke={iconStroke} strokeWidth={1.3}/> }
        <span>{ text }</span>
        { RightIcon && <RightIcon fill="white" stroke={iconStroke} strokeWidth={1.3}/> }
    </Badge>
    )
}