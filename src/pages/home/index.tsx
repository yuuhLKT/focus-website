import FocusIcon from '@/assets/focus.svg'
import { MainCard } from '@/components/Cards/main-card'
import { HeaderHome } from '@/components/Header'
import { Route, Routes } from 'react-router-dom'

export const HomePage = () => {
    return (
        <>
            <HeaderHome />
            <div className="flex items-center justify-center gap-8 mt-16 md:flex-row flex-col">
                <img
                    src={FocusIcon}
                    alt="Focus Mode extension icon."
                    className="h-28 w-28 md:h-44 md:w-44"
                />
                <div className="flex flex-col justify-center text-center md:text-left">
                    <h1 className="text-3xl font-bold md:text-4xl">
                        FOCUS <span className="text-[#666DDC]">MODE</span>
                    </h1>
                    <h2 className="text-lg mt-2 ml-2 text-[#FF336D] md:text-xl">
                        Block websites that distract you.
                    </h2>
                </div>
            </div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="flex items-center justify-center mt-12 md:mt-24">
                            <div className="flex flex-col gap-10 md:flex-row md:gap-10">
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
