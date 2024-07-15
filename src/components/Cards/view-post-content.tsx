import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card'

export const ViewPostContent = () => {
    return (
        <div className="flex justify-center mb-3 mt-24">
            <Card className="w-[850px] h-auto">
                <CardHeader className="flex-grow">
                    <CardTitle className="mb-1">Titulo teste</CardTitle>
                    <CardDescription className="ml-4">
                        <span>Teste123</span>
                        <div className="flex flex-col items-end space-y-1 -mt-10">
                            <span>22/11/2024</span>
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent className="-mt-2">
                    <div className="mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur natus vitae esse enim magnam, voluptatum
                        sapiente, nihil, iste iure odio atque officiis delectus.
                        Assumenda, minima itaque molestias recusandae blanditiis
                        consectetur. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Pariatur natus vitae esse enim magnam,
                        voluptatum sapiente, nihil, iste iure odio atque
                        officiis delectus.
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
