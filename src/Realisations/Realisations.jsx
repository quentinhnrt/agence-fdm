import RealisationCard from "./Components/RealisationCard";

export default function Realisations() {
    return (
        <div className="py-8" href="#qui-sommes-nous">
            <p className={"flex justify-center text-2xl font-bold my-4"}>Nos réalisations</p>
            <RealisationCard 
            title="Test Réalisation"
            desc="Voici une description de réalisation"
            image="https://i.pinimg.com/474x/f9/31/5a/f9315a536142491e7275702351895558.jpg"/>
        </div>
    )
}