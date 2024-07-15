import { ErrorFetch } from './error-fetch'
import { NoReportOrFeedbacks } from './no-reports-feedbacks'
import { PostDontExist } from './post-dont-exist'

export const ErrorFetchData = () => {
    return <ErrorFetch />
}

export const ErrorNotFoundFeedback = () => {
    return <NoReportOrFeedbacks type="feedbacks" />
}

export const ErrorNotFoundReport = () => {
    return <NoReportOrFeedbacks type="reports" />
}

export const ErrorNotFoundPost = () => {
    return <PostDontExist />
}
