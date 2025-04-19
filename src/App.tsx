import React from 'react';
//import { Menu, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <footer className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-2xl font-light mb-4">Dra. Ana Paula Souza</h2>
              <p className="text-neutral-400 mb-6">
                Transformando vidas através da estética avançada, com tecnologia de ponta e profissionais especializados.
              </p>
              <div className="space-y-2 text-neutral-400">
                <p>Rua Exemplo, 123 - São Paulo, SP</p>
                <p>contato@draanapaula.com.br</p>
                <p>(11) 99999-9999</p>
              </div>
            </div>
            <div>
              <Newsletter />
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8">
            <p className="text-center text-neutral-400">© 2024 Estética Facial. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;