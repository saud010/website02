import { Phone, Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div>
                <h1 className="font-bold text-gray-900">Notschlüsseldienst</h1>
                <p className="text-sm text-gray-600">Kreis Pinneberg</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              Startseite
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Leistungen
            </a>
            <a href="#locations" className="text-gray-700 hover:text-blue-600 transition-colors">
              Standorte
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              Über uns
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
              Bewertungen
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Kontakt
            </a>
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:015780914217"
              className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <div className="flex flex-col items-start">
                <span className="text-xs">24/7 Notdienst</span>
                <span className="font-bold">01578 0914217</span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Startseite
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Leistungen
              </a>
              <a
                href="#locations"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Standorte
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Über uns
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Bewertungen
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </a>
              <a
                href="tel:015780914217"
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors justify-center"
              >
                <Phone className="w-5 h-5" />
                <span className="font-bold">01578 0914217</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
