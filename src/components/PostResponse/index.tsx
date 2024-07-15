import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

interface PostResponseProps {
    title: string
    message: string
    username?: string
    date: string
}

export const PostResponse = ({
    title,
    message,
    username = 'yuuhrizin',
    date,
}: PostResponseProps) => {
    return (
        <div className="flex justify-center mb-3 mt-12">
            <Card className="w-[850px] h-auto">
                <div className="flex flex-col">
                    <CardHeader className="flex items-center justify-end">
                        <div className="flex items-center">
                            <div className="text-center">
                                <CardTitle className="mb-2">{title}</CardTitle>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div>{message}</div>
                        <div className="text-center flex flex-col justify-center items-center">
                            <Avatar className="mt-6">
                                <AvatarImage src="https://i.pinimg.com/736x/94/99/d3/9499d329de7f73295a0254a76dcc758a.jpg" />
                                <AvatarFallback>ADM</AvatarFallback>
                            </Avatar>
                            <span>{username}</span>
                            <span className="text-xs text-gray-500">
                                {date}
                            </span>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}
