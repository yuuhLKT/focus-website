import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { SendForm } from './report-feedback-form'

interface FormDialogProps {
    text: string
    formType: 'feedback' | 'bug'
}

export function FormDialog({ text, formType }: FormDialogProps) {
    const titles = {
        feedback: 'Send a feedback',
        bug: 'Report a bug',
    }

    const descriptions = {
        feedback: 'Send me your feedback and help me improve this project.',
        bug: 'Report any bugs you find so we can fix them as soon as possible.',
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="fixed right-44 top-8">
                    <Button>{text}</Button>
                </div>
            </DialogTrigger>
            <DialogContent className="w-full max-w-xl">
                <DialogHeader>
                    <DialogTitle>{titles[formType]}</DialogTitle>
                    <DialogDescription>
                        {descriptions[formType]}
                    </DialogDescription>
                </DialogHeader>
                <SendForm formType={formType} />
            </DialogContent>
        </Dialog>
    )
}
