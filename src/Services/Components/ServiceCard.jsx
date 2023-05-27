
export default function ServiceCard(props) {
    return (
        <div className={"bg-white mx-4 my-8 px-8 py-8 flex flex-col items-center text-center rounded drop-shadow-md"}>
            <p className={"text-xl font-semibold py-2 underline decoration-orange-400"}>{props.service}</p>
            <p className={""}>{props.description}</p>
        </div>
    )
}