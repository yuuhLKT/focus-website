export interface ReportResponse {
    id: string
    title: string
    authorName: string
    content: string
    createdAt: string
    status: 'OPEN' | 'WORKING' | 'SOLVED' | 'FEEDBACK'
}

export interface FeedbackResponse {
    id: string
    title: string
    authorName: string
    content: string
    createdAt: string
    status: 'FEEDBACK'
}
