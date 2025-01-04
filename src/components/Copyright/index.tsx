import { Github, HandCoins, Linkedin } from 'lucide-react'

export const CopyrightFooter = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="dark:text-white py-2 mt-8 w-full text-black">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <p className="text-sm mb-2">
                    © {currentYear} Focus Extension | Yuri Luiz
                </p>
                <div className="flex space-x-4 text-xs ">
                    <a
                        href="https://github.com/yuuhLKT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dark:text-white text-black hover:text-gray-400 flex flex-col items-center"
                    >
                        <Github size={20} />
                        <div className="text-center mt-1">Github</div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yurilkt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dark:text-white text-black hover:text-gray-400 flex flex-col items-center"
                    >
                        <Linkedin size={20} />
                        <div className="text-center mt-1">Linkedin</div>
                    </a>
                    <a
                        href="https://www.pixme.bio/yuuhlkt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dark:text-white text-black hover:text-gray-400 flex flex-col items-center"
                    >
                        <HandCoins size={20} />
                        <div className="text-center mt-1">Donate</div>
                    </a>
                </div>
            </div>
        </footer>
    )
}
