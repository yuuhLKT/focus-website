import { StatusBadge } from '../Status'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card'

interface ViewPostProps {
    title: string
    authorName: string
    content: string
    date: string
    status: 'OPEN' | 'WORKING' | 'SOLVED' | 'FEEDBACK'
}

export const ViewPostContent = ({
    title,
    authorName,
    content,
    date,
    status,
}: ViewPostProps) => {
    return (
        <div className="flex justify-center mb-3 mt-28">
            <Card className="w-[850px] h-auto">
                <CardHeader className="flex-grow">
                    <CardTitle className="mb-1">{title}</CardTitle>
                    <CardDescription className="ml-4">
                        <span>{authorName}</span>
                        <div className="flex flex-col items-end space-y-1 -mt-10">
                            <StatusBadge status={status} />
                            <span>{date}</span>
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent className="-mt-2">
                    <div className="mt-4">{content}</div>
                </CardContent>
            </Card>
        </div>
    )
}
