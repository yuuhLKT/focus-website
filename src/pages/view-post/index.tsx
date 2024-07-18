import { ViewPostContent } from '@/components/Cards/view-post-content'
import { ErrorNotFoundPost } from '@/components/Error'
import { FeedbackDialogForm, ReportDialogForm } from '@/components/Form'
import { ViewPostHeader } from '@/components/Header'
import { LoadingSpinner } from '@/components/Loading'
import { PostResponse } from '@/components/PostResponse'
import { Toaster } from '@/components/ui/toaster'
import { useReportPostData } from '@/hooks/usePostData'
import { usePostComments } from '@/hooks/usePostResponseData'
import dayjs from 'dayjs'
import { useParams } from 'react-router-dom'

export const ViewPost = () => {
    const { id } = useParams<{ id: string }>()

    const { data: postComment } = usePostComments(id!)
    const { data, isLoading, error } = useReportPostData(id!)

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error) {
        return <ErrorNotFoundPost />
    }

    function formatDate(date: string) {
        return dayjs(date).format('DD/MM/YYYY - HH:mm')
    }

    return (
        <>
            <div className="mx-2">
                <ViewPostHeader />
                {data.type === 'FEEDBACK' ? (
                    <FeedbackDialogForm />
                ) : (
                    <ReportDialogForm />
                )}
            </div>
            <ViewPostContent
                title={data.title}
                authorName={data.authorName}
                content={data.content}
                date={formatDate(data.createdAt)}
                status={data.status}
            />
            {postComment && (
                <PostResponse
                    title={postComment.commentTitle}
                    message={postComment.content}
                    username={postComment.authorName}
                    date={formatDate(postComment.createdAt)}
                />
            )}
            <Toaster />
        </>
    )
}
