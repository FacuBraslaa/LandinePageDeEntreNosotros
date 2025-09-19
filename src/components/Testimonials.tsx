import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Ana García",
    role: "Vecina de Flores",
    rating: 4,
    text: "Doné ropa y juguetes al merendero de mi barrio. Me enviaron fotos de los chicos con sus nuevos juguetes. Muy gratificante.",
    avatar: "AG"
  },
  {
    name: "Carlos Mendoza", 
    role: "Comerciante",
    rating: 5,
    text: "Desde mi almacén donamos alimentos que estaban por vencer. El proceso fue muy simple y la coordinación excelente.",
    avatar: "CM"
  },
  {
    name: "Lucía Rodríguez",
    role: "Maestra jardinera",
    rating: 4,
    text: "Organicé una colecta con los padres de mis alumnos. La plataforma nos ayudó a coordinar todo y llevar un registro claro.",
    avatar: "LR"
  },
  {
    name: "Miguel Torres",
    role: "Estudiante",
    rating: 5,
    text: "Con mis compañeros de facultad juntamos útiles escolares. Pudimos ver directamente cómo llegaron a los chicos del barrio.",
    avatar: "MT"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="h-4 w-4" />
            Experiencias de usuarios
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Lo que dicen de nosotros
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Personas como tú que ya han utilizado nuestra plataforma
            para ayudar a quienes más lo necesitan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-card bg-gradient-card hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <blockquote className="text-muted-foreground leading-relaxed pl-6">
                    "{testimonial.text}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="border-0 shadow-elegant bg-gradient-hero text-primary-foreground max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">¿Te sumas a ayudar?</h3>
              <p className="mb-6 opacity-90">
                Tu donación, por pequeña que sea, puede cambiar la vida de alguien hoy mismo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Comenzar ahora
                </button>
                <button className="border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Saber más
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;