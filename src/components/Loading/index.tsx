import { LoaderCircle } from 'lucide-react'

export const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <LoaderCircle size={96} className="animate-spin" />
        </div>
    )
}
