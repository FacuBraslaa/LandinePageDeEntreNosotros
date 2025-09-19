import { Heart, MapPin, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/hands-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container max-w-screen-xl py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Entre Nosotros" className="h-10 w-10 brightness-0 invert" />
              <span className="text-xl font-semibold">Entre Nosotros</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Plataforma que facilita la donación directa entre personas y organizaciones locales.
              Sin intermediarios, sin complicaciones.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#inicio" className="hover:text-primary-foreground transition-colors">Inicio</a></li>
              <li><a href="#como-funciona" className="hover:text-primary-foreground transition-colors">Cómo funciona</a></li>
              <li><a href="#impacto" className="hover:text-primary-foreground transition-colors">Nuestro impacto</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Organizaciones</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Para ONGs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Contacto</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">Buenos Aires, Argentina</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">contacto@entrenosotros.org</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">+54 11 1234-5678</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-medium mb-3">¿Necesitas ayuda?</h5>
              <button className="bg-white/10 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                Centro de ayuda
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-primary-foreground/60">
                <Heart className="h-4 w-4" />
                <span className="text-sm">Desarrollado en Argentina</span>
              </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-primary-foreground/60">
              <span>© 2024 Entre Nosotros. Todos los derechos reservados.</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary-foreground transition-colors">Privacidad</a>
                <a href="#" className="hover:text-primary-foreground transition-colors">Términos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;