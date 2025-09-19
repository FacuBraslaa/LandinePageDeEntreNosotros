import { Button } from "@/components/ui/button";
import logo from "@/assets/hands-logo.svg";
import { Heart } from "@/components/icons/BasicIcons";
import { FiUsers } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="inicio" className="bg-[#f6faf8] py-20 lg:py-28">
      <div className="container max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart className="h-4 w-4" />
              Ayuda a quien más lo necesita
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
              Donaciones que
              <br />
              <span className="text-green-700">transforman vidas</span>
            </h1>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Facilitamos el contacto entre donantes y organizaciones locales.
              <br />
              Tu ayuda llega directamente a quien la necesita, sin intermediarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button className="bg-green-700 hover:bg-green-800 text-white font-semibold rounded-md px-6 py-3 text-base shadow-none">
                Comenzar a ayudar <span className="ml-2">→</span>
              </Button>
              <Button variant="outline" className="bg-white border border-gray-300 text-gray-900 font-semibold rounded-md px-6 py-3 text-base">
                Conoce más
              </Button>
            </div>
            <div className="flex gap-12 justify-center lg:justify-start pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-green-700">320+</div>
                <div className="text-sm text-gray-500">Donaciones completadas</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-green-700">75</div>
                <div className="text-sm text-gray-500">Voluntarios activos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-green-700">12</div>
                <div className="text-sm text-gray-500">Organizaciones locales</div>
              </div>
            </div>
          </div>
          {/* Card lateral */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <FiUsers className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Comedor Los Girasoles</h3>
                  <p className="text-sm text-gray-500">Villa Soldati</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Necesitamos alimentos no perecederos y útiles escolares para 45 niños que asisten diariamente a nuestro comedor.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-500">★</span>
                <span className="text-sm font-semibold text-gray-900">4.6</span>
                <span className="text-sm text-gray-500">· 28 donaciones</span>
              </div>
              <Button className="bg-green-700 hover:bg-green-800 text-white font-semibold rounded-md w-full py-2">
                <Heart className="h-4 w-4 mr-2" /> Me interesa
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;