import { Loader } from "lucide-react";

interface IButtonProps {
    title?: string;
    className?: string;
    loading?: boolean;
    [key: string]: unknown;
}

export default function Button({title, className, loading, ...rest}: IButtonProps) {
    return (
        <button className={`bg-green-600 px-8 py-3 text-white rounded hober:opacity-70 elevation-2 
        shadow-md transition-all duration-300 ease-in-out w-[200px] ${className}`} {...rest}>
            { loading ? <Loader className="animate-spin" /> : title }
        </button>
    )
}