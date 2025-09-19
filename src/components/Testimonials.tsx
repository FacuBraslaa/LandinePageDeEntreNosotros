import { Card, CardContent } from "@/components/ui/card";
import { FiHeart, FiStar } from "react-icons/fi";

const testimonials = [
	{
		name: "Ana García",
		role: "Vecina de Flores",
		rating: 4,
		text: "Doné ropa y juguetes al merendero de mi barrio. Me enviaron fotos de los chicos con sus nuevos juguetes. Muy gratificante.",
		avatar: "AG",
	},
	{
		name: "Carlos Mendoza",
		role: "Comerciante",
		rating: 5,
		text: "Desde mi almacén donamos alimentos que estaban por vencer. El proceso fue muy simple y la coordinación excelente.",
		avatar: "CM",
	},
	{
		name: "Lucía Rodríguez",
		role: "Maestra jardinera",
		rating: 4,
		text: "Organicé una colecta con los padres de mis alumnos. La plataforma nos ayudó a coordinar todo y llevar un registro claro.",
		avatar: "LR",
	},
	{
		name: "Miguel Torres",
		role: "Estudiante",
		rating: 5,
		text: "Con mis compañeros de facultad juntamos útiles escolares. Pudimos ver directamente cómo llegaron a los chicos del barrio.",
		avatar: "MT",
	},
];

const Testimonials = () => {
	return (
		<section className="py-20 bg-[#f6faf8]">
			<div className="container max-w-screen-xl mx-auto">
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
						<FiHeart className="h-4 w-4" />
						Experiencias de usuarios
					</div>
					<h2 className="text-4xl font-extrabold mb-4 text-gray-900">
						Lo que dicen de nosotros
					</h2>
					<p className="text-lg text-gray-500 max-w-2xl mx-auto">
						Personas como tú que ya han utilizado nuestra plataforma para ayudar a
						quienes más lo necesitan.
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl shadow-lg p-8 flex flex-col transition-all"
						>
							<div className="flex items-center gap-4 mb-6">
								<div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
									{testimonial.avatar}
								</div>
								<div>
									<h4 className="font-semibold text-gray-900">
										{testimonial.name}
									</h4>
									<p className="text-sm text-gray-500">
										{testimonial.role}
									</p>
								</div>
							</div>
							<div className="flex items-center gap-1 mb-4">
								{[...Array(testimonial.rating)].map((_, i) => (
									<FiStar
										key={i}
										className="h-5 w-5 text-yellow-400 fill-yellow-400"
									/>
								))}
							</div>
							<div className="relative">
                <span className="absolute -top-2 -left-2 h-8 w-8 text-green-100 text-4xl select-none">“</span>
                <blockquote className="text-gray-600 leading-relaxed pl-8">
                  {testimonial.text}
                </blockquote>
              </div>
						</div>
					))}
				</div>
				{/* Call to Action */}
				<div className="text-center mt-16">
					<div className="bg-green-700 rounded-2xl px-8 py-12 max-w-2xl mx-auto shadow-lg">
						<h3 className="text-2xl font-bold mb-4 text-white">
							¿Te sumas a ayudar?
						</h3>
						<p className="mb-6 text-green-100 text-base">
							Tu donación, por pequeña que sea, puede cambiar la vida de alguien
							hoy mismo.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
								Comenzar ahora
							</button>
							<button className="border border-white/30 px-6 py-3 rounded-lg font-semibold text-white hover:bg-green-800 transition-colors">
								Saber más
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;