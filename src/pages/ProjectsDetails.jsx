import { useParams } from "react-router-dom";
import projetos from "../dados/projetos.json";

function ProjectsDetails() {
    const { id } = useParams();  // Obtém o id da URL
    const project = projetos.find(projeto => projeto.id === parseInt(id));  // Filtra o projeto correspondente

    if (!project) {
        return <p>Projeto não encontrado!</p>;
    }

    return (
        <section className="min-h-screen flex justify-center items-center">
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3">
                        <img
                            src={project.imagem}
                            alt={project.titulo}
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                        />
                    </div>
                    <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
                        <h1 className="text-3xl font-bold text-gray-800">{project.titulo}</h1>
                        <p className="mt-4 text-gray-600">{project.descricaoCompleta}</p>
                        <div className="mt-4">
                            <p><strong>Data de Lançamento:</strong> {project.dataLancamento}</p>
                            <p><strong>Tecnologias Utilizadas:</strong> {project.tecnologias.join(", ")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ProjectsDetails;
