import { useNavigate } from 'react-router-dom'
import { StatusBadge } from '../Status'
import { Button } from '../ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card'

interface MessageCardProps {
    title: string
    author: string
    date: string
    content: string
    status: 'open' | 'working' | 'solved' | 'feedback'
}

export const MessageCard = ({
    title,
    author,
    date,
    content,
    status,
}: MessageCardProps) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/post')
    }

    return (
        <div className="flex justify-center mb-3">
            <Card className="w-[850px] h-48">
                <CardHeader className="flex-grow">
                    <CardTitle className="mb-1">{title}</CardTitle>
                    <CardDescription className="ml-4">
                        <span>{author}</span>
                        <div className="flex flex-col items-end space-y-1 -mt-10">
                            <StatusBadge status={status} />
                            <span>{date}</span>
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent className="-mt-2">
                    <div className="truncate">{content}</div>
                    <div className="flex justify-end mt-3">
                        <Button onClick={handleClick}>See more</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
