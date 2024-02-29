import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...intputs: ClassValue[]) {
    return twMerge(clsx(intputs))
}