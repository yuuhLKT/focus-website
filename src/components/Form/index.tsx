import { SendForm } from './report-feedback'

export const FeedbackSendForm = () => {
    return (
        <>
            <SendForm formType="feedback" />
        </>
    )
}

export const ReportSendForm = () => {
    return (
        <>
            <SendForm formType="bug" />
        </>
    )
}
