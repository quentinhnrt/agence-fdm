export default function Contact() {
    return (
        <div className="py-8" href="#Contact">
            <p className={"flex justify-center text-2xl font-bold my-4"}>Nous contacter</p>
            <p className={"flex text-center justify-center my-4"}>Pour toute demande, envoyez-nous un message</p>
            <form className={"flex flex-col items-center justify-center"}>
                <input className={"border-2 rounded hover:border-green-200 w-full lg:w-1/2 h-10 my-2 px-4"} type="text" placeholder="Nom" />
                <input className={"border-2 rounded hover:border-green-200  w-full lg:w-1/2 h-10 my-2 px-4"} type="text" placeholder="Prénom" />
                <input className={"border-2 rounded hover:border-green-200  w-full lg:w-1/2 h-10 my-2 px-4"} type="text" placeholder="Email" />
                <input className={"border-2 rounded hover:border-green-200  w-full lg:w-1/2 h-10 my-2 px-4"} type="text" placeholder="Sujet" />
                <textarea className={"border-2 rounded hover:border-green-200  w-full lg:w-1/2 h-20 my-2 px-4"} type="text" placeholder="Message" />
                <button className={"bg-green-200 hover:bg-green-300 hover:text-white rounded w-full lg:w-1/2 h-10 my-2 px-4"} type="submit">Envoyer</button>
            </form>
        </div>
    )
}