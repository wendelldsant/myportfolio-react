import { NavLink } from "react-router-dom";

function ProjectsCards({ dados }) {
    return (
        <div className="grid grid-cols-3 p-2 mx-2">
            {dados.map(projetos => (
                <div className="my-4 col-span-3 lg:col-span-1 md:col-span-2 mx-auto">
                <NavLink
                    to={`/projects/${projetos.id}`}
                    key={projetos.id}
                    className="h-[16em] w-[18em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]"
                >
                    <div>
                        <h1 className="text-[2em] font-medium">{projetos.titulo}</h1>
                        <p className="text-[0.85em]">
                            {projetos.subtitulo}
                        </p>
                    </div>

                    <button
                        className="mx-auto h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
                    ><svg
                            className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                            stroke="currentColor"
                            stroke-width="1"
                            viewBox="0 0 24 24"
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                stroke-linejoin="round"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </button>

                </NavLink>
                </div>
    ))
}
        </div >
    );
}

export default ProjectsCards;
