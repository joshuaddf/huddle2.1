import { twMerge } from "tailwind-merge"

type containerProps = {
    children: React.ReactNode
    className?: string
}

export const Container = ({ children, className }: containerProps) => {
    return (
        <div className={twMerge("mx-auto px-6 lg:max-w-[80rem]", className)}>
            { children }
        </div>
    )
}