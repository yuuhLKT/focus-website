import { FormDialog } from './form-dialog'

export const FeedbackDialogForm = () => {
    return <FormDialog text="Send a feedback." type="feedback" />
}

export const ReportDialogForm = () => {
    return <FormDialog text="Report a bug." type="bug" />
}
