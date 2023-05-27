export default function RealisationCard(props) {
    return (
        <div className={"mx-4 my-8 px-8 py-8 flex flex-col-reverse lg:flex-row justify-between items-center text-center"}>
            <div className={"mx-8"}>
            <p className={"font-bold text-xl font-semibold py-2"}>{props.title}</p>
            <p className="my-8">{props.desc}</p>
            <a className="px-4 py-2 shadow rounded bg-orange-200 hover:bg-orange-300 hover:text-white"
            href ={props.link} target="_blank">Découvrir</a>
            </div>
            <div>
            <img src={props.image} alt={props.title} className={"w-92 h-92 drop-shadow-md"} />
            </div>
        </div>
    )
}