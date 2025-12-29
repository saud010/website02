import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div>
                <div className="text-white">Notschlüsseldienst</div>
                <div className="text-sm">Kreis Pinneberg</div>
              </div>
            </div>
            <p className="text-sm mb-4">
              Ihr zuverlässiger Partner für professionelle Schlüsseldienst-Leistungen im gesamten Kreis Pinneberg.
            </p>
            <div className="flex items-center gap-2 text-yellow-400">
              <span>★★★★★</span>
              <span className="text-sm text-gray-400">4.9/5.0</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Schnellzugriff</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  Startseite
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-blue-400 transition-colors">
                  Standorte
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400 transition-colors">
                  Bewertungen
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Unsere Leistungen</h3>
            <ul className="space-y-2 text-sm">
              <li>Türöffnung</li>
              <li>Schlosswechsel</li>
              <li>Schließanlagen</li>
              <li>24/7 Notöffnung</li>
              <li>Sicherheitsberatung</li>
              <li>Einbruchschutz</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:015780914217" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>01578 0914217</span>
                </a>
              </li>
              <li>
                <a href="mailto:issaxd1@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>issaxd1@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Kreis Pinneberg<br />Schleswig-Holstein</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Cities List */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-white mb-4 text-center">
            Wir sind in folgenden Städten für Sie da:
          </h4>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              'Pinneberg',
              'Elmshorn',
              'Wedel',
              'Quickborn',
              'Schenefeld',
              'Uetersen',
              'Rellingen',
              'Halstenbek',
              'Barmstedt',
              'Tornesch',
              'Holm',
              'Ellerbek',
              'Prisdorf',
              'Kummerfeld',
              'Tangstedt',
              'Seeth-Ekholt'
            ].map((city) => (
              <span key={city} className="bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700 transition-colors">
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              © {currentYear} Notschlüsseldienst Kreis Pinneberg. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Datenschutz
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Impressum
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Button (Mobile) */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <a
          href="tel:015780914217"
          className="flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full shadow-2xl hover:bg-red-700 transition-all hover:scale-110"
        >
          <Phone className="w-8 h-8" />
        </a>
      </div>
    </footer>
  );
}
