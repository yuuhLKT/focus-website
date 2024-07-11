import { useNavigate } from 'react-router-dom'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

interface MainCardProps {
    title: string
    description: string
    url: string
}

export function MainCard({ title, description, url }: MainCardProps) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(url)
    }

    return (
        <div onClick={handleClick} className="cursor-pointer">
            <Card className="w-[350px] h-28 transform transition-transform hover:scale-110">
                <CardHeader className="flex-grow">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
}
