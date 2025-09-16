import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <main className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<div>Bienvenido a Entre Nosotros</div>} />
        </Routes>
      </main>
      <Toaster />
    </ThemeProvider>
  )
}

export default App