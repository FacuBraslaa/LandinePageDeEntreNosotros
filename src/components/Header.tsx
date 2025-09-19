import { Button } from "@/components/ui/button";
import { Heart } from "@/components/icons/BasicIcons";
const Home = ({ className = "" }) => <span className={className}>🏠</span>;
const Gift = ({ className = "" }) => <span className={className}>🎁</span>;
const MapPin = ({ className = "" }) => <span className={className}>📍</span>;
const Bell = ({ className = "" }) => <span className={className}>🔔</span>;
const User = ({ className = "" }) => <span className={className}>👤</span>;
import logo from "@/assets/hands-logo.svg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Entre Nosotros" className="h-10 w-10" />
            <span className="text-xl font-semibold text-primary">Entre Nosotros</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#inicio" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <Home className="h-4 w-4" />
              Inicio
            </a>
            <a href="#como-funciona" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <Gift className="h-4 w-4" />
              Cómo funciona
            </a>
            <a href="#impacto" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <Heart className="h-4 w-4" />
              Nuestro impacto
            </a>
          </nav>
        </div>

        {/* User actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <User className="h-4 w-4" />
            Ingresar
          </Button>
          <Button variant="donation" size="sm">
            Donar ahora
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;