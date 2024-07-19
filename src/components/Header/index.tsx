import { FeedbackDialogForm, ReportDialogForm } from '../Form'
import { ModeToggle } from '../mode-toggle'
import { MainHeader } from './main-header'

export const HeaderHome = () => {
    return (
        <div className="fixed lg:right-[113px] lg:top-[34px] right-8 top-4">
            <ModeToggle />
        </div>
    )
}

export const ReportHeader = () => {
    return (
        <>
            <div className="mx-2">
                <MainHeader />
                <ReportDialogForm />
            </div>
            <div className="flex justify-end mr-10 md:mr-24 md:-mt-14">
                <ModeToggle />
            </div>
        </>
    )
}

export const FeedbackHeader = () => {
    return (
        <>
            <div className="mx-2">
                <MainHeader />
                <FeedbackDialogForm />
            </div>
            <div className="flex justify-end mr-10 md:mr-24 md:-mt-14">
                <ModeToggle />
            </div>
        </>
    )
}

export const ViewPostHeader = () => {
    return (
        <>
            <MainHeader />
            <div className="fixed bottom-20 right-6 md:top-8 md:right-16 ">
                <ModeToggle />
            </div>
        </>
    )
}

export const ErrorHeader = () => {
    return (
        <>
            <MainHeader />
            <div className="fixed bottom-20 right-6 md:top-8 md:right-16">
                <ModeToggle />
            </div>
        </>
    )
}
