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
    id: string
    title: string
    author: string
    date: string
    content: string
    status: 'OPEN' | 'WORKING' | 'SOLVED' | 'FEEDBACK'
}

export const MessageCard = ({
    id,
    title,
    author,
    date,
    content,
    status,
}: MessageCardProps) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className="flex justify-center mb-3 mx-4">
            <Card className="w-full max-w-[850px] h-auto">
                <CardHeader className="flex flex-col md:flex-row">
                    <div className="flex-1">
                        <CardTitle className="mb-1">{title}</CardTitle>
                        <CardDescription className="flex items-center justify-between md:ml-4">
                            <span>{author}</span>
                            <div className="flex flex-col items-end">
                                <StatusBadge status={status} />
                                <span>{date}</span>
                            </div>
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="truncate">{content}</div>
                    <div className="flex justify-end mt-3">
                        <Button onClick={handleClick}>See more</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
