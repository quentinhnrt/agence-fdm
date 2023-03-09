export default function ServiceCard(props) {
    return (
        <div className={"mx-4 my-8 px-4 py-8 flex flex-col items-center text-center"}>
            <img src={props.image} alt={props.name} className={"w-36 h-36 rounded-full drop-shadow-md"} />
            <p className={"font-bold py-2"}>{props.name}</p>
            <p>{props.role}</p>
        </div>
    )
}