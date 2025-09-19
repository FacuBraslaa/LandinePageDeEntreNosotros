import { Card, CardContent } from "@/components/ui/card";
import { FiHeart, FiUsers, FiHome, FiMapPin, FiTrendingUp, FiClock } from "react-icons/fi";

const stats = [
	{
		icon: <FiHeart className="h-8 w-8 text-green-700" />,
		number: "320+",
		label: "Donaciones",
		description: "Completadas en 2023",
	},
	{
		icon: <FiUsers className="h-8 w-8 text-green-700" />,
		number: "75",
		label: "Voluntarios",
		description: "Activos actualmente",
	},
	{
		icon: <FiHome className="h-8 w-8 text-green-700" />,
		number: "12",
		label: "Organizaciones",
		description: "Colaborando con nosotros",
	},
	{
		icon: <FiMapPin className="h-8 w-8 text-green-700" />,
		number: "5",
		label: "Barrios",
		description: "Con presencia activa",
	},
	{
		icon: <FiTrendingUp className="h-8 w-8 text-green-700" />,
		number: "87%",
		label: "Satisfacción",
		description: "Según encuestas",
	},
	{
		icon: <FiClock className="h-8 w-8 text-green-700" />,
		number: "48h",
		label: "Respuesta",
		description: "Tiempo promedio",
	},
];

const featuredTestimonial = {
	icon: <FiHeart className="h-10 w-10 text-green-700" />,
	text:
		"Gracias a esta plataforma, nuestro comedor puede alimentar a 45 niños todos los días. Las donaciones llegan directamente y podemos coordinar mejor la ayuda.",
	avatar: "LG",
	name: "Laura Gómez",
	role: "Coordinadora, Comedor Los Girasoles",
};

const Statistics = () => {
	return (
		<section id="impacto" className="py-20 bg-[#f6faf8]">
			<div className="container max-w-screen-xl mx-auto">
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
						<FiTrendingUp className="h-4 w-4" />
						Nuestros resultados
					</div>
					<h2 id="impacto-titulo" className="text-4xl font-extrabold mb-4 text-gray-900">
						El impacto de tu ayuda
					</h2>
					<p className="text-lg text-gray-500 max-w-2xl mx-auto">
						Estos números reflejan el trabajo real que hacemos día a día gracias a
						personas como tú.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all"
						>
							<div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
								{stat.icon}
							</div>
							<div className="text-4xl font-bold text-green-700 mb-2">
								{stat.number}
							</div>
							<h3 className="text-lg font-semibold mb-1 text-gray-900">
								{stat.label}
							</h3>
							<p className="text-sm text-gray-500">{stat.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Statistics;