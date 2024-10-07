import ProjectsCards from "../components/ProjectsCards";
import projetos from "../dados/projetos.json";

function Projects() {
    return (
        <section className="min-h-screen flex flex-col justify-center">
            <div className="mb-4 mx-auto max-w-screen-lg">
                <div className="w-full flex flex-col items-center text-center">
                    <h1 className="text-4xl font-semibold text-sky-600 mb-4 font-poppins">
                        Meus Projetos Pessoais
                    </h1>
                    <p className="text-lg text-gray-600 font-light font-poppins">
                        Conheça um pouco mais sobre meus projetos estudantis e pessoais
                    </p>
                </div>
            </div>
            <ProjectsCards dados={projetos} />
        </section>

    );
}

export default Projects;
