import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card'

export const PostResponse = () => {
    return (
        <div className="flex justify-center mb-3 mt-12">
            <Card className="w-[850px] h-auto">
                <div className="flex flex-col">
                    <CardHeader className="flex items-center justify-end">
                        <div className="flex items-center">
                            <Avatar className="mb-9 mr-2">
                                <AvatarImage src="https://i.pinimg.com/736x/94/99/d3/9499d329de7f73295a0254a76dcc758a.jpg" />
                                <AvatarFallback>ADM</AvatarFallback>
                            </Avatar>
                            <div className="text-center">
                                <CardTitle className="mb-2">
                                    Feedback Recebido
                                </CardTitle>
                                <CardDescription className="flex flex-col">
                                    <span>yuuhrizin</span>
                                    <span className="text-xs text-gray-500">
                                        22/11/2024
                                    </span>
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div>
                            Feedback recebido com sucesso, obrigado pela ajuda.
                            Estarei trabalhando para melhorar ainda mais a
                            extensão.
                        </div>
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}
