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
        <div className="flex justify-center mb-3 mx-4">
            <Card className="w-full max-w-[850px] h-auto mt-12">
                <CardHeader className="flex flex-col md:flex-row">
                    <div className="flex-1">
                        <CardTitle className="mb-1">{title}</CardTitle>
                        <CardDescription className="flex items-center justify-between md:ml-4">
                            <span>{authorName}</span>
                            <div className="flex flex-col items-end space-y-1">
                                <StatusBadge status={status} />
                                <span>{date}</span>
                            </div>
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="break-words whitespace-pre-wrap">
                        {content}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
