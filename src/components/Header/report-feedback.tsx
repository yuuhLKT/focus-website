import { Undo2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import FocusIcon from '../../assets/focus.svg'

export const HeaderReportFeedback = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const goHome = () => {
        navigate('/')
    }

    return (
        <>
            <div className="fixed top-8 left-12">
                <div className="flex gap-8">
                    <div className="flex flex-col items-start">
                        <Undo2
                            className="cursor-pointer mb-10"
                            onClick={goBack}
                            size={32}
                        />
                    </div>
                    <div className="flex gap-2 cursor-pointer" onClick={goHome}>
                        <img
                            src={FocusIcon}
                            alt="Focus Mode extension icon."
                            className="w-8 h-8"
                        />
                        <span className="text-xl font-bold">
                            FOCUS <span className="text-[#666DDC]">MODE</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
