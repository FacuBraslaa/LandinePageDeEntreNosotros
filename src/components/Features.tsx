import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, MapPin } from "@/components/icons/BasicIcons";
const Star = ({ className = "" }) => <span className={className}>⭐</span>;
const Shield = ({ className = "" }) => <span className={className}>🛡️</span>;
const Smartphone = ({ className = "" }) => <span className={className}>📱</span>;

const features = [
  {
    icon: Heart,
    title: "Donaciones directas",
    description: "Tu ayuda llega sin intermediarios a quien realmente lo necesita."
  },
  {
    icon: Users,
    title: "Red de voluntarios",
    description: "Conoce a otros voluntarios de tu barrio y coordina acciones conjuntas."
  },
  {
    icon: MapPin,
    title: "Ayuda cercana",
    description: "Apoya a comedores y organizaciones de tu propio barrio o ciudad."
  },
  {
    icon: Star,
    title: "Opiniones verificadas",
    description: "Lee comentarios de personas que ya colaboraron con cada organización."
  },
  {
    icon: Shield,
    title: "Organizaciones verificadas",
    description: "Visitamos personalmente cada organización antes de incluirla."
  },
  {
    icon: Smartphone,
    title: "Proceso sencillo",
    description: "Dona en menos de 3 minutos desde cualquier dispositivo."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            ¿Por qué donar con nosotros?
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Lo que nos diferencia
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creamos una plataforma simple donde tu ayuda llega directamente 
            a quien la necesita, sin complicaciones.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-card bg-gradient-card hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-lg transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;