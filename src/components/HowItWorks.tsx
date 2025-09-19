import { FiUserPlus, FiSearch, FiHeart, FiCheckCircle } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const steps = [
	{
		icon: <FiUserPlus className="h-7 w-7 text-white" />,
		step: "01",
		title: "Regístrate",
		description: "Crea una cuenta con tu email o usa tu cuenta de Google para acceder.",
	},
	{
		icon: <FiSearch className="h-7 w-7 text-white" />,
		step: "02",
		title: "Busca organizaciones",
		description: "Filtra por ubicación o tipo de ayuda que quieres brindar.",
	},
	{
		icon: <FiHeart className="h-7 w-7 text-white" />,
		step: "03",
		title: "Contacta y dona",
		description: "Coordina la entrega de alimentos, ropa o lo que puedas aportar.",
	},
	{
		icon: <FiCheckCircle className="h-7 w-7 text-white" />,
		step: "04",
		title: "Recibe feedback",
		description: "La organización te enviará fotos o mensajes mostrando tu ayuda en acción.",
	},
];

const HowItWorks = () => {
	return (
		<section id="como-funciona" className="bg-[#f6faf8] py-20">
			<div className="container max-w-screen-xl mx-auto">
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
						<FiCheckCircle className="h-4 w-4" />
						Proceso sencillo
					</div>
					<h2 className="text-4xl font-extrabold mb-4 text-gray-900">
						¿Cómo donar?
					</h2>
					<p className="text-lg text-gray-500 max-w-2xl mx-auto">
						En 4 pasos rápidos puedes hacer llegar tu ayuda a quien realmente la
						necesita.
					</p>
				</div>
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Steps */}
					<div className="space-y-10">
						{steps.map((step, index) => (
							<div key={index} className="flex gap-6 items-start">
								<div className="relative flex-shrink-0">
									<div className="w-16 h-16 bg-green-700 rounded-2xl flex items-center justify-center shadow-lg">
										{step.icon}
									</div>
									<div className="absolute -top-2 -right-2 w-7 h-7 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
										{step.step}
									</div>
									{index < steps.length - 1 && (
										<div className="absolute top-20 left-8 w-0.5 h-12 bg-green-200"></div>
									)}
								</div>
								<div className="pt-2">
									<h3 className="text-lg font-bold mb-1 text-gray-900">
										{step.title}
									</h3>
									<p className="text-gray-500 text-base">
										{step.description}
									</p>
								</div>
							</div>
						))}
					</div>
					{/* Card lateral */}
					<div className="flex justify-center lg:justify-end">
						<div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md flex flex-col items-center">
							<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
								<FiHeart className="h-10 w-10 text-green-700" />
							</div>
							<h3 className="text-2xl font-bold mb-4 text-gray-900">
								¡Dona ahora!
							</h3>
							<p className="text-gray-500 mb-6 text-center">
								Hay 12 organizaciones en tu zona que necesitan ayuda urgente.
								<br />
								Tu donación puede marcar la diferencia hoy mismo.
							</p>
							<div className="space-y-3 mb-8 w-full">
								<div className="flex items-center gap-3 text-sm text-gray-700">
									<FiCheckCircle className="h-5 w-5 text-green-700 flex-shrink-0" />
									<span>Sin comisiones ni costos ocultos</span>
								</div>
								<div className="flex items-center gap-3 text-sm text-gray-700">
									<FiCheckCircle className="h-5 w-5 text-green-700 flex-shrink-0" />
									<span>Contacto directo con organizaciones</span>
								</div>
								<div className="flex items-center gap-3 text-sm text-gray-700">
									<FiCheckCircle className="h-5 w-5 text-green-700 flex-shrink-0" />
									<span>Seguimiento de tu donación</span>
								</div>
							</div>
							<Button className="bg-green-700 hover:bg-green-800 text-white font-semibold rounded-md w-full py-3 text-base">
								Criar conta grátis
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;