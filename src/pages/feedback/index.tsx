import { MessageCard } from '@/components/Cards/report-feedback-card'
import { ErrorFetchData, ErrorNotFoundFeedback } from '@/components/Error/'
import { FeedbackDialogForm } from '@/components/Form'
import { FeedbackHeader } from '@/components/Header'
import { LoadingSpinner } from '@/components/Loading'
import { Toaster } from '@/components/ui/toaster'
import { useFeedbackData } from '@/hooks/useFeedbackdata'
import { FeedbackResponse } from '@/interfaces'
import dayjs from 'dayjs'

export const FeedbackPage = () => {
    const { data, isLoading, error } = useFeedbackData()

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error) {
        return <ErrorFetchData />
    }

    if (!data || data.length === 0) {
        return <ErrorNotFoundFeedback />
    }

    const sortedData = data.sort((a: FeedbackResponse, b: FeedbackResponse) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })

    return (
        <>
            <FeedbackHeader />
            <FeedbackDialogForm />
            <div className="mt-28">
                {sortedData.map((feedback: FeedbackResponse) => (
                    <MessageCard
                        key={feedback.id}
                        id={feedback.id}
                        title={feedback.title}
                        author={feedback.authorName}
                        content={feedback.content}
                        date={dayjs(feedback.createdAt).format(
                            'DD/MM/YYYY - HH:mm'
                        )}
                        status={feedback.status}
                    />
                ))}
            </div>
            <Toaster />
        </>
    )
}
