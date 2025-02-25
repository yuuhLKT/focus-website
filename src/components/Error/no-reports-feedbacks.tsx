import { FeedbackDialogForm, ReportDialogForm } from '../Form'
import { ErrorHeader } from '../Header'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Toaster } from '../ui/toaster'

interface NoReportOrFeedbacksProps {
    type: 'feedbacks' | 'reports'
}

export const NoReportOrFeedbacks = ({ type }: NoReportOrFeedbacksProps) => {
    return (
        <>
            <div className="mx-2">
                <ErrorHeader />
                {type === 'feedbacks' ? (
                    <FeedbackDialogForm />
                ) : (
                    <ReportDialogForm />
                )}
            </div>
            <div className="flex justify-center items-center mt-48">
                <Card className="w-[350px] h-auto shadow-lg text-center">
                    <CardHeader>
                        <CardTitle>
                            No {type.charAt(0).toUpperCase() + type.slice(1)}{' '}
                            Found
                        </CardTitle>
                        <CardDescription>
                            There are no {type} available at the moment.
                            Consider sending one and be the first.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
            <Toaster />
        </>
    )
}
