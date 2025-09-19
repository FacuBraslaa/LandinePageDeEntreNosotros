import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Search, Heart, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Regístrate",
    description: "Crea una cuenta con tu email o usa tu cuenta de Google para acceder."
  },
  {
    icon: Search,
    step: "02", 
    title: "Busca organizaciones",
    description: "Filtra por ubicación o tipo de ayuda que quieres brindar."
  },
  {
    icon: Heart,
    step: "03",
    title: "Contacta y dona",
    description: "Coordina la entrega de alimentos, ropa o lo que puedas aportar."
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Recibe feedback",
    description: "La organización te enviará fotos o mensajes mostrando tu ayuda en acción."
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4" />
            Proceso sencillo
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Cómo donar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            En 4 pasos rápidos puedes hacer llegar tu ayuda a quien 
            realmente la necesita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-card group-hover:shadow-elegant transition-all duration-300">
                    <step.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-20 left-8 w-0.5 h-12 bg-border"></div>
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Card */}
          <div className="relative">
            <Card className="border-0 shadow-elegant bg-gradient-card">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-10 w-10 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">¡Dona ahora!</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Hay 12 organizaciones en tu zona que necesitan ayuda urgente.
                    Tu donación puede marcar la diferencia hoy mismo.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Sin comisiones ni costos ocultos</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Contacto directo con organizaciones</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Seguimiento de tu donación</span>
                    </div>
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full">
                    Crear cuenta gratis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;