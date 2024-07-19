import { MessageCard } from '@/components/Cards/report-feedback-card'
import { ErrorFetchData, ErrorNotFoundFeedback } from '@/components/Error/'
import { FeedbackHeader } from '@/components/Header'
import { LoadingSpinner } from '@/components/Loading'
import { CustomPagination } from '@/components/Pagination'
import { Toaster } from '@/components/ui/toaster'
import { useFeedbackData } from '@/hooks/useFeedbackData'
import { FeedbackResponse } from '@/interfaces'
import dayjs from 'dayjs'
import { useState } from 'react'

export const FeedbackPage = () => {
    const { data, isLoading, error } = useFeedbackData()
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

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

    const startIndex = (currentPage - 1) * itemsPerPage
    const currentPageData = sortedData.slice(
        startIndex,
        startIndex + itemsPerPage
    )

    return (
        <>
            <FeedbackHeader />
            <div className="md:mt-16 mt-12">
                {currentPageData.map((feedback: FeedbackResponse) => (
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
            <CustomPagination
                totalItems={sortedData.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
            <Toaster />
        </>
    )
}
