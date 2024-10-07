import ProjectsCards from "../components/ProjectsCards";
import Redes from "../components/Redes";
import projetos from "../dados/projetos.json";

function Home() {
    return (
        <section className="container px-4 mx-auto min-h-screen flex flex-col justify-center items-center">
            <div className="grid grid-cols-6 gap-8 items-center mx-4">
                <div className="col-span-6 lg:col-span-3 flex justify-center">
                    <img src="foto_profissional_semfundo.png" className="h-80 w-80 object-cover rounded-full shadow-lg" alt="Wendell" />
                </div>
                <div className="col-span-6 lg:col-span-3 flex flex-col justify-center bg-cyan-500 p-8 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold text-white mb-4">Olá! Sou Wendell</h1>
                    <p className="text-lg text-gray-100 leading-relaxed text-balance">
                    Desenvolvedor de Testes In-Circuit (ICT), com experiência na integração de hardware e software para garantir a qualidade de sistemas complexos. Atualmente, estou cursando Engenharia de Software na FIAP, aprimorando minhas habilidades em desenvolvimento de software e automação de testes. Sempre busco novos desafios que me permitam crescer e aplicar minhas habilidades em projetos inovadores.
                    </p>
                </div>
            </div>

            <div className="flex flex-col my-5 items-center mx-auto justify-center">
                <h1 className="text-3xl font-bold text-cyan-900 mb-4">Me siga nas redes!</h1>
                <Redes/>
            </div>
        </section>
    );
}

export default Home;
