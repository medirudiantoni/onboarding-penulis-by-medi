import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    type?: 'primary' | 'success' | 'alert' | 'danger' | 'transparent' | 'outline'
}

export default function CircledIcon({ children, type = 'outline' }: Props ) {
    return (
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            type == 'primary' ? 'bg-blue-100 text-blue-900' :
            type == 'success' ? 'bg-green-100 text-green-900' :
            type == 'alert' ? 'bg-orange-100 text-orange-900' :
            type == 'danger' ? 'bg-red-100 text-red-900' :
            type == 'transparent' ? 'bg-transparent text-inherit' : 'bg-transparent border border-inherit text-inherit'
        }`}>
            {children}
        </div>
    )
}