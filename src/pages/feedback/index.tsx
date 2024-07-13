import { NavigateFormButton } from '@/components/Buttons'
import { MessageCard } from '@/components/Cards/report-feedback-card'
import { FeedbackHeader } from '@/components/Header'
import { Toaster } from '@/components/ui/toaster'

export const FeedbackPage = () => {
    return (
        <>
            <FeedbackHeader />
            <NavigateFormButton type="feedback" text="Send a feedback" />
            <div className="mt-28">
                <MessageCard
                    title="Teste 2 - Feedback"
                    author="Teste2"
                    content="tetestetesteste"
                    date="12/05/2025"
                    status="feedback"
                />
            </div>
            <Toaster />
        </>
    )
}
