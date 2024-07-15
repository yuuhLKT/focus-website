import { ViewPostContent } from '@/components/Cards/view-post-content'
import { ErrorNotFoundPost } from '@/components/Error'
import { FeedbackDialogForm, ReportDialogForm } from '@/components/Form'
import { ViewPostHeader } from '@/components/Header'
import { LoadingSpinner } from '@/components/Loading'
import { useReportPostData } from '@/hooks/usePostData'
import dayjs from 'dayjs'
import { useParams } from 'react-router-dom'

export const ViewPost = () => {
    const { id } = useParams<{ id: string }>()

    const { data, isLoading, error } = useReportPostData(id!)

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error) {
        return <ErrorNotFoundPost />
    }

    return (
        <>
            <ViewPostHeader />
            {data.type === 'FEEDBACK' ? (
                <FeedbackDialogForm />
            ) : (
                <ReportDialogForm />
            )}
            <div className="flex justify-center mb-3">
                <ViewPostContent
                    title={data.title}
                    authorName={data.authorName}
                    content={data.content}
                    date={dayjs(data.createdAt).format('DD/MM/YYYY - HH:mm')}
                    status={data.status}
                />
            </div>
        </>
    )
}
