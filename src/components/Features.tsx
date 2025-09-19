import { Card, CardContent } from "@/components/ui/card";
import { FiHeart, FiUsers, FiMapPin, FiStar, FiShield, FiSmartphone } from "react-icons/fi";

const features = [
	{
		icon: <FiHeart className="h-7 w-7 text-green-700" />,
		title: "Donaciones directas",
		description: "Tu ayuda llega sin intermediarios a quien realmente lo necesita.",
	},
	{
		icon: <FiUsers className="h-7 w-7 text-green-700" />,
		title: "Red de voluntarios",
		description: "Conoce a otros voluntarios de tu barrio y coordina acciones conjuntas.",
	},
	{
		icon: <FiMapPin className="h-7 w-7 text-green-700" />,
		title: "Ayuda cercana",
		description: "Apoya a comedores y organizaciones de tu propio barrio o ciudad.",
	},
	{
		icon: <FiStar className="h-7 w-7 text-green-700" />,
		title: "Opiniones verificadas",
		description: "Lee comentarios de personas que ya colaboraron con cada organización.",
	},
	{
		icon: <FiShield className="h-7 w-7 text-green-700" />,
		title: "Organizaciones verificadas",
		description: "Visitamos personalmente cada organización antes de incluirla.",
	},
	{
		icon: <FiSmartphone className="h-7 w-7 text-green-700" />,
		title: "Proceso sencillo",
		description: "Dona en menos de 3 minutos desde cualquier dispositivo.",
	},
];

const Features = () => {
	return (
		<section className="bg-[#f6faf8] py-20">
			<div className="container max-w-screen-xl mx-auto">
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
						<FiStar className="h-4 w-4" />
						¿Por qué donar con nosotros?
					</div>
					<h2 className="text-4xl font-extrabold mb-4 text-gray-900">
						Lo que nos diferencia
					</h2>
					<p className="text-lg text-gray-500 max-w-2xl mx-auto">
						Creamos una plataforma simple donde tu ayuda llega directamente a
						quien la necesita, sin complicaciones.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl shadow p-8 flex flex-col items-start"
						>
							<div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
								{feature.icon}
							</div>
							<h3 className="text-lg font-bold mb-2 text-gray-900">
								{feature.title}
							</h3>
							<p className="text-gray-500 text-base">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;