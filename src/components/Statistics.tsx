const stats = [
  {
    icon: Heart,
    number: "320+",
    label: "Donaciones",
    description: "Completadas en 2023"
  },
  {
    icon: Users,
    number: "75",
    label: "Voluntarios", 
    description: "Activos actualmente"
  },
  {
    icon: Building,
    number: "12",
    label: "Organizaciones",
    description: "Colaborando con nosotros"
  },
  {
    icon: MapPin,
    number: "5",
    label: "Barrios",
    description: "Con presencia activa"
  },
  {
    icon: TrendingUp,
    number: "87%",
    label: "Satisfacción",
    description: "Según encuestas"
  },
  {
    icon: Clock,
    number: "48h",
    label: "Respuesta",
    description: "Tiempo promedio"
  }
];

const Statistics = () => {
  return (
    <section id="impacto" className="py-20 bg-primary/5">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4" />
            Nuestros resultados
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            El impacto de tu ayuda
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estos números reflejan el trabajo real que hacemos día a día
            gracias a personas como tú.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-card bg-gradient-card hover:shadow-elegant transition-all duration-300 group overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:shadow-lg transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Story */}
        <div className="mt-16">
          <Card className="border-0 shadow-elegant bg-gradient-card">
            <CardContent className="p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Heart className="h-12 w-12 text-primary" />
                </div>
                
                <blockquote className="text-2xl font-medium mb-6 leading-relaxed">
                  "Gracias a esta plataforma, nuestro comedor puede alimentar a 45 niños todos los días.
                  Las donaciones llegan directamente y podemos coordinar mejor la ayuda."
                </blockquote>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    LG
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Laura Gómez</div>
                    <div className="text-sm text-muted-foreground">Coordinadora, Comedor Los Girasoles</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Statistics;