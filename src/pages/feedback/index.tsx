import { MessageCard } from '@/components/Cards/report-feedback-card'
import { FeedbackDialogForm } from '@/components/Form'
import { FeedbackHeader } from '@/components/Header'

export const FeedbackPage = () => {
    return (
        <>
            <FeedbackHeader />
            <FeedbackDialogForm />
            <div className="mt-28">
                <MessageCard
                    title="Teste 2 - Feedback"
                    author="Teste2"
                    content="tetestetesteste"
                    date="12/05/2025"
                    status="feedback"
                />
            </div>
        </>
    )
}
