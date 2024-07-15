import { ErrorHeader } from '../Header'

export const ErrorFetch = () => {
    return (
        <>
            <ErrorHeader />
            <div className="flex flex-col justify-center items-center h-screen text-4xl">
                <div className="mb-2">Error loading reports.</div>
                <div>Please try again later.</div>
            </div>
        </>
    )
}
