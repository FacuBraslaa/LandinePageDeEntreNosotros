import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        {/* Si no usás shadcn/tailwind con tokens, podés cambiar bg-background por bg-white */}
        <main className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<div>Bienvenido a Entre Nosotros</div>} />
          </Routes>
        </main>
      </BrowserRouter>

      <Toaster />
    </ThemeProvider>
  );
}

export default App;
