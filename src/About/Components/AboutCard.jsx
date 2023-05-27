export default function ServiceCard(props) {
    return (
        <div className={"my-8 px-4 py-8 flex flex-col items-center text-center w-full lg:w-1/3"}>
            <img src={props.image} alt={props.name} className={"w-36 h-36 rounded-full border-4 border-orange-300 drop-shadow-md object-cover"} />
            <p className={"font-bold py-2"}>{props.name}</p>
            <p>{props.role}</p>
        </div>
    )
}