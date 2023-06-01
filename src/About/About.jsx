import AboutCard from "./Components/AboutCard";

export default function About() {
    return (
        <div className="py-8" id="qui-sommes-nous">
            <p className={"flex justify-center text-center text-2xl font-bold my-4 underline decoration-orange-400"}>Qui sommes-nous ?</p>
            <p className={"text-center justify-center my-4"}>L'agence<span className="font-bold"> Fier de moi</span>, c'est 5 étudiants en licence professionnelle créaweb à l'IUT de Lens. Passionés, curieux, polyvalents, nous sommes ouverts à la découverte de nouveaux projets.</p>
            <div className={"flex lg:items-center flex-wrap justify-center "}>
                <AboutCard image="/public/photos/quentin.png" name="Quentin" role="Lead développeur fullstack" />
                <AboutCard image="/public/photos/laurine.jpg" name="Laurine" role="Designer UI/UX" />
                <AboutCard image="/public/photos/kahina.jpg" name="Kahina" role="Communication" />
                <AboutCard image="/public/photos/theo.jpg" name="Théo" role="Designer UI/UX"/>
                <AboutCard image="/public/photos/roxane.jpg" name="Roxane" role="Développement front"/>
            </div>
        </div>
    )
}