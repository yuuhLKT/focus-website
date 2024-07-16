import { BasicError } from '../Cards/basic-error'
import { NoReportOrFeedbacks } from './no-reports-feedbacks'

export const ErrorFetchData = () => {
    return (
        <BasicError
            title="Sometingh went wrong."
            description="Please try again later. We are working on it."
        />
    )
}
export const ErrorNotFoundFeedback = () => {
    return <NoReportOrFeedbacks type="feedbacks" />
}

export const ErrorNotFoundReport = () => {
    return <NoReportOrFeedbacks type="reports" />
}

export const ErrorNotFoundPost = () => {
    return (
        <BasicError
            title="Post not found."
            description="This post probably no longer exists."
        />
    )
}
