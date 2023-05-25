import ServiceCard from "./Components/ServiceCard";

export default function Services() {
    return (
        <div className="py-8" id="services">
            <p className={"flex justify-center text-2xl font-bold my-4"}>Nos services</p>
            <p className={"flex text-center justify-center my-4"}>L'agence propose différents services afin d'aider les clients à concevoir, développer et promouvoir leur site web.</p>
            <div className={"lg:grid lg:grid-cols-3 justify-center"}>
                <ServiceCard service="UX/UI" 
                description="Création de maquettes interactives de site web avec une analyse approfondie des besoins et des attentes de l'utilisateur final afin de s'assurer que le site web sera facile à utiliser et agréable à naviguer pour les visiteurs." />
                <ServiceCard service="Développement Web" 
                description="Création de sites web, expertise dans les sites vitrine. Nous pouvons partir de zéro ou faire une refonte d'un site existant afin de le rendre plus moderne et simple d'utilisation pour l'utilisateur." />
                <ServiceCard service="Communication Digitale" 
                description="Création de templates pour différents réseaux sociaux (Instagram, Facebook, Linkedin) afin de vous aider à renforcer votre présence en ligne.  Ces templates peuvent inclure des graphiques, des visuels, des infographies et des éléments interactifs attirant l'attention des utilisateurs et les encourageant à interagir avec la marque." />
            </div>
        </div>
    )
}