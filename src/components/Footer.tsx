import { FiHeart, FiMapPin, FiMail, FiPhone, FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import logo from "@/assets/hands-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-700">
      <div className="container max-w-screen-xl py-16 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Entre Nosotros" className="h-10 w-10" />
              <span className="text-xl font-bold text-green-700">Entre Nosotros</span>
            </div>
            <p className="mb-6 leading-relaxed max-w-md text-gray-500">
              Plataforma que facilita la donación directa entre personas y organizaciones locales. Sin intermediarios, sin complicaciones.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors">
                <FiFacebook className="h-5 w-5 text-green-700" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors">
                <FiInstagram className="h-5 w-5 text-green-700" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors">
                <FiTwitter className="h-5 w-5 text-green-700" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-gray-900">Enlaces rápidos</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#inicio" className="hover:text-green-700 transition-colors">Inicio</a></li>
              <li><a href="#como-funciona" className="hover:text-green-700 transition-colors">Cómo funciona</a></li>
              <li><a href="#impacto" className="hover:text-green-700 transition-colors">Nuestro impacto</a></li>
              <li><a href="#" className="hover:text-green-700 transition-colors">Organizaciones</a></li>
              <li><a href="#" className="hover:text-green-700 transition-colors">Para ONGs</a></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-gray-900">Contacto</h4>
            <div className="space-y-3 text-gray-500">
              <div className="flex items-center gap-3">
                <FiMapPin className="h-4 w-4 flex-shrink-0 text-green-700" />
                <span className="text-sm">Buenos Aires, Argentina</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="h-4 w-4 flex-shrink-0 text-green-700" />
                <span className="text-sm">contacto@entrenosotros.org</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="h-4 w-4 flex-shrink-0 text-green-700" />
                <span className="text-sm">+54 11 1234-5678</span>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="font-medium mb-3 text-gray-900">¿Necesitas ayuda?</h5>
              <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors">
                Centro de ayuda
              </button>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="border-t border-gray-100 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <FiHeart className="h-4 w-4" />
              <span className="text-sm">Desarrollado en Argentina</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <span>© 2024 Entre Nosotros. Todos los derechos reservados.</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-green-700 transition-colors">Privacidad</a>
                <a href="#" className="hover:text-green-700 transition-colors">Términos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;