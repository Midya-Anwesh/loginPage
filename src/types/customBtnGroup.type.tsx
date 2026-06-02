import type { LucideIcon } from "lucide-react";
import type { To } from "react-router";

export type CustomButtonType = {
    id: number;
    btnLabel?: string;
    btnIcon?: LucideIcon;
    badgeContent?: number|string;
    badgeFillColor?: string;
    badgeTextColor?: string;
    navigateTo?: To
}