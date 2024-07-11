import FocusIcon from '@/assets/focus.svg'
import { MainCard } from '@/components/Cards/main-card'
import { Route, Routes } from 'react-router-dom'

export const HomePage = () => {
    return (
        <>
            <div className="flex items-center justify-center gap-8 mt-16">
                <img
                    src={FocusIcon}
                    alt="Focus Mode extension icon."
                    className="h-44 w-44"
                />
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-bold">
                        FOCUS <span className="text-[#666DDC]">MODE</span>
                    </h1>
                    <h2 className="text-xl mt-2 ml-2 text-[#FF336D]">
                        Block websites that distract you.
                    </h2>
                </div>
            </div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="flex items-center justify-center mt-24">
                            <div className="flex gap-10">
                                <MainCard
                                    title="Report Bug."
                                    description="Report a bug for the Focus Mode extension."
                                    url="/report"
                                />
                                <MainCard
                                    title="Feedback."
                                    description="Give me a feedback for the Focus Mode extension."
                                    url="/feedback"
                                />
                            </div>
                        </div>
                    }
                />
            </Routes>
        </>
    )
}
