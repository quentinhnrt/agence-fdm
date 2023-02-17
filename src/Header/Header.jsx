import {useState} from "react";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={"h-20 bg-white"}>
            <div className={"max-w-[1440px] mx-auto flex justify-between h-full py-2 items-center px-8"}>
                <div className={"aspect-[1/1] h-full"}>
                    <img src={"/logo.svg"} alt={"Logo"} className={"h-full w-full object-cover"}/>
                </div>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} role={"button"} className={"h-full aspect-[1/1] bg-orange-200 lg:hidden"}>

                </div>
                <nav
                    className={"h-screen duration-500 w-screen lg:justify-end fixed top-0 left-0 bg-white flex items-center justify-center lg:h-full lg:w-full lg:relative lg:translate-x-0 " + (isMenuOpen ? "translate-x-0" : "translate-x-full")}>
                    <ul className={"flex flex-col lg:flex-row  items-center gap-6"}>
                        <li className={"aspect-[1/1] h-20 mb-12 lg:hidden"}>
                            <img src={"/logo.svg"} alt={"Logo"} className={"h-full w-full object-cover"}/>
                        </li>
                        <li className={"text-3xl lg:text-base"}><a href={"#landing"}>Accueil</a></li>
                        <li className={"text-3xl lg:text-base"}><a href={"#services"}>Services</a></li>
                        <li className={"text-3xl lg:text-base"}><a href={"#realisation"}>Réalisations</a></li>
                        <li className={"text-3xl lg:text-base"}><a href={"#qui-sommes-nous"}>Qui sommes nous ?</a></li>
                        <li className={"text-3xl lg:text-base"}><a href={"#contact"}>Contact</a></li>
                        <li onClick={() => setIsMenuOpen(!isMenuOpen)} role={"button"} className={"text-3xl lg:hidden"}>X</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}