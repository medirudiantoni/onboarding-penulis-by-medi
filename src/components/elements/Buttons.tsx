import type { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
    onClick?: VoidFunction
    type?: 'primary' | 'success' | 'alert' | 'danger' | 'transparent' | 'outline' | 'outline-primary' | 'outline-success' | 'outline-alert' | 'outline-danger'
}

export default function Button({ children, type = 'primary', onClick }: ButtonProps){
    return (
        <button onClick={onClick} className={`pt-[6px] pb-[6px] outline-0 cursor-pointer px-4 flex gap-2 item-center rounded-lg active:scale-95 ${
            type == 'primary' ? 'bg-blue-600 hover:bg-blue-700 text-white active:bg-blue-800' :
            type == 'success' ? 'bg-green-600 hover:bg-green-700 text-white active:bg-green-800' :
            type == 'alert' ? 'bg-orange-600 hover:bg-orange-700 text-white active:bg-orange-800' :
            type == 'danger' ? 'bg-red-600 hover:bg-red-700 text-white active:bg-red-800' :
            type == 'outline-primary' ? 'bg-blue-100 text-blue-900 hover:bg-blue-600 hover:text-white active:bg-blue-700' :
            type == 'outline-success' ? 'bg-green-100 text-green-900 hover:bg-green-600 hover:text-white active:bg-green-700' :
            type == 'outline-alert' ? 'bg-orange-100 text-orange-900 hover:bg-orange-600 hover:text-white active:bg-orange-700' :
            type == 'outline-danger' ? 'bg-red-100 text-red-900 hover:bg-red-600 hover:text-white active:bg-red-700' :
            type == 'transparent' ? 'bg-transparent text-inherit' : 'bg-transparent border border-inherit text-inherit'
        }`}>
            {children}
        </button>
    )
};