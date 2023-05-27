export default function Contact() {
    return (
        <div className="py-8" id="contact">
            <p className={"flex justify-center text-2xl font-bold my-4 underline decoration-orange-400"}>Nous contacter</p>
            <p className={"flex text-center justify-center my-4"}>Si vous êtes prêt à donner vie à votre projet et à faire passer votre activité au niveau supérieur, n'hésitez pas à nous contacter.</p>
            <form className={"flex flex-col items-center justify-center"}>
                <input className={"border-2 rounded hover:border-orange-200 w-full lg:w-1/2 h-10 my-2 px-4"} type="text" placeholder="Nom" />
                <input className={"border-2 rounded hover:border-orange-200  w-full lg:w-1/2 h-10 my-2 px-4"} type="text" placeholder="Prénom" />
                <input className={"border-2 rounded hover:border-orange-200  w-full lg:w-1/2 h-10 my-2 px-4"} type="text" placeholder="Email" />
                <input className={"border-2 rounded hover:border-orange-200  w-full lg:w-1/2 h-10 my-2 px-4"} type="text" placeholder="Sujet" />
                <textarea className={"border-2 rounded hover:border-orange-200  w-full lg:w-1/2 h-20 my-2 px-4"} type="text" placeholder="Message" />
                <button className={"bg-orange-200 hover:bg-orange-300 hover:text-white rounded w-full lg:w-1/2 h-10 my-2 px-4"} type="submit">Envoyer</button>
            </form>
        </div>
    )
}