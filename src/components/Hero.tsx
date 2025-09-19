import { Button } from "@/components/ui/button";
import { Heart } from "@/components/icons/BasicIcons";
const ArrowRight = ({ className = "" }) => <span className={className}>→</span>;
const Users = ({ className = "" }) => <span className={className}>👥</span>;
const Gift = ({ className = "" }) => <span className={className}>🎁</span>;
import logo from "@/assets/hands-logo.svg"; // Ensure this path is correct

const Hero = () => {
  return (
    <section id="inicio" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container max-w-screen-xl relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4" />
              Ayuda a quien más lo necesita
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Donaciones que
              <div className="flex items-center gap-3">
                <img src={logo} alt="Entre Nosotros" className="h-10 w-10" />
                <span className="text-primary">transforman vidas</span>
              </div>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Facilitamos el contacto entre donantes y organizaciones locales.
              Tu ayuda llega directamente a quien la necesita, sin intermediarios.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg">
                Comenzar a ayudar
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Conoce más
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">320+</div>
                <div className="text-sm text-muted-foreground">Donaciones completadas</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">75</div>
                <div className="text-sm text-muted-foreground">Voluntarios activos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Organizaciones locales</div>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-card rounded-3xl p-8 shadow-elegant">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Comedor Los Girasoles</h3>
                <p className="text-sm text-muted-foreground">Villa Soldati</p>
                </div>
              </div>
              
              <p className="text-sm mb-4">
                Necesitamos alimentos no perecederos y útiles escolares para 45 niños que asisten diariamente a nuestro comedor.
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm font-medium">4.6</span>
                  <span className="text-sm text-muted-foreground">• 28 donaciones</span>
                </div>
              </div>
              
              <Button variant="donation" size="sm" className="w-full">
                <Heart className="h-4 w-4" />
                Me interesa
              </Button>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;