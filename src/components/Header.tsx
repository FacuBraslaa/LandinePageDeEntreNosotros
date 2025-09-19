import { Button } from "@/components/ui/button";
import logo from "@/assets/hands-logo.svg";
import { Heart } from "@/components/icons/BasicIcons";
import { FiBell, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container max-w-screen-xl flex h-16 items-center justify-between mx-auto">
        {/* Logo y navegación */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Entre Nosotros" className="h-7 w-7" />
            <span className="text-lg font-bold text-green-700">Entre Nosotros</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#inicio" className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-green-700 transition-colors">
              <Heart className="h-4 w-4" />
              Inicio
            </a>
            <a href="#como-funciona" className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-green-700 transition-colors">
              <span role="img" aria-label="gift" className="h-4 w-4">🎁</span>
              Cómo funciona
            </a>
            <a href="#impacto" className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-green-700 transition-colors">
              <Heart className="h-4 w-4" />
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