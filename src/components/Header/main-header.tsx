import { Undo2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import FocusIcon from '../../assets/focus.svg'

export const MainHeader = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const goHome = () => {
        navigate('/')
    }

    return (
        <>
            <div className="flex mt-8 md:ml-12">
                <div className="flex md:gap-8 gap-4">
                    <div className="flex flex-col items-start">
                        <Undo2
                            className="cursor-pointer mb-10"
                            onClick={goBack}
                            size={32}
                        />
                    </div>
                    <div
                        className="flex gap-2 cursor-pointer h-8 w-max"
                        onClick={goHome}
                    >
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
