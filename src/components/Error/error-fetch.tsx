import { ErrorHeader } from '../Header'
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card'

export const ErrorFetch = () => {
    return (
        <>
            <ErrorHeader />
            <div className="flex justify-center items-center h-screen">
                <Card className="w-[350px] h-auto shadow-lg text-center">
                    <CardHeader>
                        <CardTitle>Sometingh went wrong</CardTitle>
                        <CardDescription>
                            Please try again later.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </>
    )
}
