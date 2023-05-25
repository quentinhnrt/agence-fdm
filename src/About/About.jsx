import AboutCard from "./Components/AboutCard";

export default function About() {
    return (
        <div className="py-8" id="qui-sommes-nous">
            <p className={"flex justify-center text-2xl font-bold my-4"}>Qui sommes-nous ?</p>
            <p className={"text-center justify-center my-4"}>L'agence<span className="font-bold"> Fier de moi</span>, c'est 5 étudiants en licence professionnelle créaweb à l'IUT de Lens. Passionés, curieux, polyvalents, nous sommes ouverts à la découverte de nouveaux projets.</p>
            <div className={"flex lg:items-center flex-wrap justify-center "}>
                <AboutCard image="https://i.pinimg.com/474x/b0/1a/43/b01a43908d262eeb65208eccdf31aac9.jpg" name="Quentin" role="Lead développeur" />
                <AboutCard image="https://i.pinimg.com/474x/b0/1a/43/b01a43908d262eeb65208eccdf31aac9.jpg" name="Laurine" role="Designer UI/UX" />
                <AboutCard image="https://i.pinimg.com/474x/d5/81/9f/d5819f4f8b157f8e6a49a217e1cad5c5.jpg" name="Kahina" role="Communication" />
                <AboutCard image="https://i.pinimg.com/474x/d5/81/9f/d5819f4f8b157f8e6a49a217e1cad5c5.jpg" name="Théo" role="Designer UI/UX"/>
                <AboutCard image="https://i.pinimg.com/474x/d5/81/9f/d5819f4f8b157f8e6a49a217e1cad5c5.jpg" name="Roxane" role="Développement front"/>
            </div>
        </div>
    )
}