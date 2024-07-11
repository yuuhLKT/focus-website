import { Undo2 } from 'lucide-react'

export const BackArrow = () => {
    const handleClick = () => {
        window.history.back()
    }

    return (
        <div className="fixed top-8 left-12">
            <Undo2 className="cursor-pointer" onClick={handleClick} size={30} />
        </div>
    )
}
