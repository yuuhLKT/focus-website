import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

interface NavigateFormButtonProps {
    type: 'feedback' | 'report'
    text: string
}

export const NavigateFormButton = ({ type, text }: NavigateFormButtonProps) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${type}/form`)
    }

    return (
        <div className="fixed right-44 top-8" onClick={handleClick}>
            <Button>{text}</Button>
        </div>
    )
}
