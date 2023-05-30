export default function Landing() {
    return (
        <div className={"w-full h-[60vh] mx-auto relative"} id="landing">
            <div className={"absolute top-0 left-1/2 -translate-x-1/2 block h-full w-screen z-0"}>
                <div className={"h-full w-full bg-black/50 absolute top-0 left-0 z-10"}>

                </div>
                <img src={'/landing-background.jpg'} alt={"Landing background"} className={"h-full w-full object-cover"}/>
            </div>
            <div className={"relative z-10 flex items-center justify-center flex-col h-full"}>
                <h1 className={"text-center text-5xl font-bold text-white mb-3"}>Agence FDM</h1>
                <h2 className={"text-2xl text-white text-center"}>Ensemble, sautons vers le sommet du web !</h2>
            </div>

        </div>
    );
}