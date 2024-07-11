import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

interface FormButtonProps {
    type: 'feedback' | 'report'
    text: string
}

export const FormButton = ({ type, text }: FormButtonProps) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${type}/form`)
    }

    return (
        <div className="fixed right-52 top-8" onClick={handleClick}>
            <Button>{text}</Button>
        </div>
    )
}
