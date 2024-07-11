import { BackArrow } from '@/components/BackArrow'
import { FormButton } from '@/components/Buttons'
import { MessageCard } from '@/components/Cards/report-feedback-card'

export const FeedbackPage = () => {
    return (
        <>
            <BackArrow />
            <FormButton text="Make a feedback" type="feedback" />
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
