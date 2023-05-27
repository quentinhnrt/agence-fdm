import {useState} from "react";
import { ReactComponent as ReactLogo } from "../../public/logo.svg";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={"h-20 fixed top-0 left-0 z-50 w-screen bg-orange-300"}>
            <div className={"max-w-[1440px] mx-auto flex justify-between h-full py-4 items-center px-8"}>
                <div className={"aspect-[1/1] h-full"}>
                    <ReactLogo className={"h-full w-full object-cover text-white"} />
                </div>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} role={"button"} className={"w-8 h-8 relative lg:hidden"}>
                        <span className="bg-white w-full h-1"></span>
                        <span className="bg-white w-full h-1"></span>
                        <span className="bg-white w-full h-1"></span>
                </div>
                <nav
                    className={"h-screen lg:bg-transparent duration-500 w-screen lg:justify-end fixed top-0 left-0 bg-white flex items-center justify-center lg:h-full lg:w-full lg:relative lg:translate-x-0 " + (isMenuOpen ? "translate-x-0" : "translate-x-full")}>
                    <ul className={"flex flex-col lg:flex-row lg:text-white items-center gap-6"}>
                        <li className={"aspect-[1/1] h-20 mb-12 lg:hidden"}>
                            <img src={"/logo.svg"} alt={"Logo"} className={"h-full w-full object-cover"}/>
                        </li>
                        <li className={"text-3xl lg:text-base text-orange-300 lg:text-white font-bold hover:underline hover:text-orange-100"}><a href={"#landing"}>Accueil</a></li>
                        <li className={"text-3xl lg:text-base text-orange-300 lg:text-white font-bold hover:underline hover:text-orange-100"}><a href={"#presentation"}>Présentation</a></li>
                        <li className={"text-3xl lg:text-base text-orange-300 lg:text-white font-bold hover:underline hover:text-orange-100"}><a href={"#services"}>Services</a></li>
                        <li className={"text-3xl lg:text-base text-orange-300 lg:text-white font-bold hover:underline hover:text-orange-100"}><a href={"#realisations"}>Réalisations</a></li>
                        <li className={"text-3xl lg:text-base text-orange-300 lg:text-white font-bold hover:underline hover:text-orange-100"}><a href={"#qui-sommes-nous"}>Qui sommes-nous ?</a></li>
                        <li className={"text-3xl lg:text-base text-orange-300 lg:text-white font-bold hover:underline hover:text-orange-100"}><a href={"#contact"}>Contact</a></li>
                        <li onClick={() => setIsMenuOpen(!isMenuOpen)} role={"button"} className={"text-3xl lg:hidden"}>X</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}