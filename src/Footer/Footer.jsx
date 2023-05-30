export default function Footer() {
    return (
      <footer className={"flex flex-col items-center justify-center h-28 bg-orange-300"}>
        <p className="">Agence Fier de Moi - Tous droits réservés - 2023</p>
        <img src={"/logo.svg"} alt={"Logo"} className={"h-42 w-42 my-2 object-cover"}/>
      </footer>
    );
}