import AboutCard from "./Components/AboutCard";

export default function About() {
    return (
        <div className="py-8" href="#about">
            <p className={"flex justify-center text-2xl font-bold my-4"}>Qui sommes-nous ?</p>
            <p className={"flex text-center justify-center my-4"}><b>Nom de l'agence</b>, c'est 5 étudiants en licence professionnelle créaweb à l'IUT de Lens. Passionés, curieux, polyvalents, nous sommes ouverts à la découverte de nouveaux projets.</p>
            <div className={"lg:grid lg:grid-cols-3 justify-center "}>
                <AboutCard image="https://i.pinimg.com/474x/b0/1a/43/b01a43908d262eeb65208eccdf31aac9.jpg" name="Quentin" role="My CEO" />
                <AboutCard image="https://i.pinimg.com/474x/b0/1a/43/b01a43908d262eeb65208eccdf31aac9.jpg" name="Laurine" role="My CEO" />
                <AboutCard image="https://i.pinimg.com/474x/d5/81/9f/d5819f4f8b157f8e6a49a217e1cad5c5.jpg" name="Kahina" role="Communication" />
                <AboutCard image="https://i.pinimg.com/474x/d5/81/9f/d5819f4f8b157f8e6a49a217e1cad5c5.jpg" name="Théo" role="Designer UI/UX"/>
                <AboutCard image="https://i.pinimg.com/474x/d5/81/9f/d5819f4f8b157f8e6a49a217e1cad5c5.jpg" name="Roxane" role="Développement front"/>
            </div>
        </div>
    )
}