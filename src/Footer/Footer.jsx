export default function Footer() {
    return (
      <footer className={"flex flex-col items-center justify-center py-4 h-28 bg-orange-300"}>
          <div className={"aspect-[1/1] h-full"}>
              <img className="h-16 w-16 object-cover" src="/public/photos/logo_fdm_white.png" alt="Logo Fier de moi" />
          </div>
        <p className="text-white">Agence Fier de Moi - Tous droits réservés - 2023</p>
      </footer>
    );
}