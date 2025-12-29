import { MapPin } from 'lucide-react';

const cities = [
  {
    name: 'Pinneberg',
    description: 'Schneller Schlüsseldienst in Pinneberg – 24/7 Notdienst für Türöffnung und Schlosswechsel.',
  },
  {
    name: 'Elmshorn',
    description: 'Zuverlässiger Schlüsseldienst Elmshorn – Professionelle Türöffnung ohne Beschädigung.',
  },
  {
    name: 'Wedel',
    description: 'Ihr Schlüsseldienst in Wedel – Schnelle Hilfe bei Aussperrung und defekten Schlössern.',
  },
  {
    name: 'Quickborn',
    description: 'Notschlüsseldienst Quickborn – Faire Preise und schnelle Anfahrtszeiten garantiert.',
  },
  {
    name: 'Schenefeld',
    description: 'Schlüsseldienst Schenefeld – Professionelle Türöffnung und Sicherheitstechnik.',
  },
  {
    name: 'Uetersen',
    description: 'Ihr Partner in Uetersen – Schlüsseldienst mit Festpreisen und 24/7 Service.',
  },
  {
    name: 'Rellingen',
    description: 'Schlüsseldienst Rellingen – Schnelle Notöffnung und Schlosswechsel vom Fachmann.',
  },
  {
    name: 'Halstenbek',
    description: 'Notdienst Halstenbek – Professioneller Schlüsseldienst ohne versteckte Kosten.',
  },
  {
    name: 'Barmstedt',
    description: 'Schlüsseldienst Barmstedt – Zuverlässige Türöffnung und Sicherheitsberatung.',
  },
  {
    name: 'Tornesch',
    description: 'Ihr Schlüsseldienst in Tornesch – Schnelle Hilfe bei Tag und Nacht.',
  },
  {
    name: 'Holm',
    description: 'Notschlüsseldienst Holm – Professionelle Dienstleistungen zu fairen Preisen.',
  },
  {
    name: 'Ellerbek',
    description: 'Schlüsseldienst Ellerbek – Schnelle Türöffnung und moderne Schließsysteme.',
  },
  {
    name: 'Prisdorf',
    description: 'Ihr Partner in Prisdorf – Zuverlässiger Schlüsseldienst mit 24/7 Notdienst.',
  },
  {
    name: 'Kummerfeld',
    description: 'Schlüsseldienst Kummerfeld – Professionelle Türöffnung ohne Schäden.',
  },
  {
    name: 'Tangstedt',
    description: 'Notdienst Tangstedt – Schnelle Anfahrt und transparente Preisgestaltung.',
  },
  {
    name: 'Seeth-Ekholt',
    description: 'Schlüsseldienst Seeth-Ekholt – Ihr zuverlässiger Partner im Notfall.',
  }
];

export function Locations() {
  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Unser Einzugsgebiet im Kreis Pinneberg
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir sind im gesamten Kreis Pinneberg für Sie da. Schnelle Anfahrt innerhalb von 15-30 Minuten 
            zu allen Städten und Gemeinden der Region. Ihr lokaler Schlüsseldienst in der Nähe!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2">
                    Schlüsseldienst {city.name}
                  </h3>
                  <p className="text-gray-600">
                    {city.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Map Info */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl mb-4">
                Schnelle Anfahrt im gesamten Kreis Pinneberg
              </h3>
              <p className="text-xl text-blue-100 mb-6">
                Egal ob Pinneberg, Elmshorn, Wedel oder Quickborn – wir sind in 15-30 Minuten bei Ihnen. 
                Unser Notdienst deckt alle Städte und Gemeinden im Kreis Pinneberg ab.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Schnelle Anfahrtszeiten: 15-30 Minuten</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 Notdienst an allen Tagen</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Lokale Techniker aus der Region</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-6xl mb-4">📍</div>
                <div className="text-3xl mb-2">16+</div>
                <div className="text-xl text-blue-100">Städte im Kreis Pinneberg</div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Text */}
        <div className="mt-12 prose prose-lg max-w-none">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl mb-4">
              Ihr professioneller Schlüsseldienst im Kreis Pinneberg
            </h3>
            <p className="text-gray-700 mb-4">
              Als etablierter Schlüsseldienst im Kreis Pinneberg sind wir Ihr zuverlässiger Partner für alle Belange 
              rund um Türöffnungen, Schlosswechsel und Sicherheitstechnik. Ob in Pinneberg, Elmshorn, Wedel, Quickborn 
              oder einer der vielen anderen Städte und Gemeinden – unser Notdienst ist 24 Stunden am Tag, 7 Tage die 
              Woche für Sie erreichbar.
            </p>
            <p className="text-gray-700">
              Wir legen großen Wert auf Transparenz und faire Preise. Bereits am Telefon nennen wir Ihnen den Festpreis 
              für unsere Dienstleistung, sodass Sie keine bösen Überraschungen erleben. Unsere erfahrenen Techniker 
              sind bestens ausgebildet und verwenden professionelles Werkzeug, um Ihre Tür schonend und beschädigungsfrei 
              zu öffnen. Vertrauen Sie auf unsere Expertise im gesamten Kreis Pinneberg!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
