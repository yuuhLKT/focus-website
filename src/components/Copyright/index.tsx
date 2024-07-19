import { Github, HandCoins, Linkedin } from 'lucide-react'

export const CopyrightFooter = () => {
    return (
        <footer className="bg-gray-800 text-white py-2 mt-8 w-full">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <p className="text-sm mb-2">
                    © 2024 Focus Extension | Yuri Luiz
                </p>
                <div className="flex space-x-4">
                    <a
                        href="https://github.com/yuuhLKT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yurilkt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://www.pixme.bio/yuuhlkt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400"
                    >
                        <HandCoins size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
