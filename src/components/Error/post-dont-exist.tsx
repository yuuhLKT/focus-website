import { ErrorHeader } from '../Header'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

export const PostDontExist = () => {
    return (
        <>
            <ErrorHeader />
            <div className="flex justify-center items-center h-screen">
                <Card className="w-[350px] h-auto shadow-lg text-center">
                    <CardHeader>
                        <CardTitle>Post not found.</CardTitle>
                        <CardDescription>
                            This post probably no longer exists.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </>
    )
}
