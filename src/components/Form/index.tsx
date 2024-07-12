import { FormDialog } from './form-dialog'

export const FeedbackDialogForm = () => {
    return (
        <>
            <FormDialog text="Send a feedback." formType="feedback" />
        </>
    )
}

export const ReportDialogForm = () => {
    return (
        <>
            <FormDialog text="Report a bug." formType="bug" />
        </>
    )
}
