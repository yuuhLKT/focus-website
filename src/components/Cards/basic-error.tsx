import { ErrorHeader } from '../Header'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

interface ErrorProps {
    title: string
    description: string
}

export const BasicError = ({ title, description }: ErrorProps) => {
    return (
        <>
            <ErrorHeader />
            <div className="flex justify-center items-center h-screen">
                <Card className="w-[350px] h-auto shadow-lg text-center">
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </>
    )
}
