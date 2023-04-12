export default function RealisationCard(props) {
    return (
        <div className={"mx-4 my-8 px-4 py-8 flex flex-row justify-center items-center text-center"}>
            <div className={"mx-8"}>
            <p className={"font-bold text-xl font-semibold py-2"}>{props.title}</p>
            <p>{props.desc}</p>
            <a className="bg-pink-300 px-4 py-2">Bouton</a>
            </div>
            <div>
            <img src={props.image} alt={props.title} className={"w-92 h-92 drop-shadow-md"} />
            </div>
        </div>
    )
}