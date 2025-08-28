import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatDate=(date)=>{
  return new Date(date).toLocaleDateString('en-IN',{month:'long',day:'numeric',year:'numeric'})
}

export const parseServerActionResponse=(response)=>{
  return JSON.parse(JSON.stringify(response))
}