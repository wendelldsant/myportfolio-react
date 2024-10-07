import { FaLinkedin } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { useState } from "react";

function Footer() {
    const [linkedin, setLinkedin] = useState('')
    const handleLinkedin = (event) => {
        setLinkedin(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        alert(`Obrigado! Irei te chamar no linkedin "${linkedin}"`)
    }
    return (
        <div className="bg-gray-900">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
                    <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                        <div>
                            <ul className="flex gap-10">
                                <li>
                                    <a
                                        href="/"
                                        className="font-medium tracking-wide text-gray-300"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/projects"
                                        className="font-medium tracking-wide text-gray-300"
                                    >
                                        Projetos
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/contact"
                                        className="font-medium tracking-wide text-gray-300"
                                    >
                                        Contato
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:max-w-md lg:col-span-2">
                        <span className="text-base font-medium tracking-wide text-gray-300">
                            Me passe o seu linkedin, vamos nos conectar?
                        </span>
                        <form className="flex flex-col mt-4 md:flex-row">
                            <input
                                placeholder="URL"
                                required
                                type="url"
                                value={linkedin}
                                onChange={handleLinkedin}
                                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            />
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
                    <p className="text-sm text-gray-500">
                        © Portifólio para uso estudantil.
                    </p>
                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                        <a
                            href="https://www.linkedin.com/in/wendell-dos-santos-silva-541623204"
                            className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/wendelldsant"
                            className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
                        >
                            <FiGithub />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;