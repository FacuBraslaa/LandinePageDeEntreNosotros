import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/hooks/use-toast'

function Home() {
  const { toast } = useToast()
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-10">
      <h1 className="text-3xl font-bold">Bienvenido a Entre Nosotros</h1>
      <p className="text-muted-foreground">Ejemplo de notificaciones (toasts):</p>
      <button
        onClick={() => toast({ title: "Hola!", description: "Este es un toast de ejemplo" })}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
      >
        Mostrar Toast
      </button>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <main className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Podés agregar más rutas acá, ejemplo: */}
          {/* <Route path="/ongs" element={<OngsPage />} /> */}
        </Routes>
      </main>
      <Toaster />
    </ThemeProvider>
  )
}

export default App