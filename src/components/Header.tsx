import { Button } from "@/components/ui/button";
import logo from "/assets/hands-logo.svg";
import { FiHeart, FiGift, FiTrendingUp, FiBell, FiUser } from "react-icons/fi";

const HEADER_HEIGHT = 72; // px, ajusta si tu header es más alto

const Header = () => {
  // Scroll suave y centrado al título de impacto
  const handleImpactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const title = document.getElementById("impacto-titulo");
    if (title) {
      const y = title.getBoundingClientRect().top + window.scrollY - 72 - 24;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  // Scroll suave y centrado al título de inicio
  const handleInicioClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const title = document.getElementById("inicio-titulo");
    if (title) {
      const y = title.getBoundingClientRect().top + window.scrollY - 120; // 120px de aire visual
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container max-w-screen-xl flex h-16 items-center justify-between mx-auto">
        {/* Logo y navegación */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Entre Nosotros" className="h-7 w-7" />
            <span className="text-lg font-bold text-green-700">Entre Nosotros</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#inicio" onClick={handleInicioClick} className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-green-700 transition-colors cursor-pointer">
              <FiHeart className="h-4 w-4" />
              Inicio
            </a>
            <a href="#como-funciona" className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-green-700 transition-colors">
              <FiGift className="h-4 w-4" />
              Cómo funciona
            </a>
            <a href="#impacto" onClick={handleImpactClick} className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-green-700 transition-colors cursor-pointer">
              <FiTrendingUp className="h-4 w-4" />
              Nuestro impacto
            </a>
          </nav>
        </div>
        {/* Acciones usuario */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center text-gray-700 hover:text-green-700 transition-colors">
            <FiBell className="h-5 w-5" />
          </button>
          <button className="hidden md:flex items-center gap-2 text-gray-700 hover:text-green-700 text-sm font-medium transition-colors">
            <FiUser className="h-5 w-5" />
            Ingresar
          </button>
          <Button variant="default" size="sm" className="bg-green-700 hover:bg-green-800 text-white font-semibold rounded-md shadow-none px-5 py-2">
            Donar ahora
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;