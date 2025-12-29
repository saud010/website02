import { Key, LockKeyhole, ShieldCheck, Clock } from 'lucide-react';

const services = [
  {
    icon: LockKeyhole,
    title: 'Türöffnung ohne Beschädigung',
    description: 'Professionelle Türöffnung bei verlorenen Schlüsseln oder defekten Schlössern. Wir arbeiten schonend und beschädigungsfrei.',
    features: ['Ohne Bohren', 'Schadenfrei', 'Schnelle Ausführung'],
    price: 'ab 79€'
  },
  {
    icon: Key,
    title: 'Schlosswechsel & Schlüsseldienst',
    description: 'Austausch defekter oder veralteter Schlösser. Installation moderner Sicherheitssysteme für Ihr Zuhause oder Geschäft.',
    features: ['Moderne Schlösser', 'Einbruchschutz', 'Fachgerechte Montage'],
    price: 'ab 120€'
  },
  {
    icon: ShieldCheck,
    title: 'Schließanlagen',
    description: 'Planung und Installation von Schließanlagen für Mehrfamilienhäuser, Bürogebäude und gewerbliche Objekte.',
    features: ['Individuelle Planung', 'Generalschlüssel-System', 'Professionelle Beratung'],
    price: 'Auf Anfrage'
  },
  {
    icon: Clock,
    title: '24/7 Notöffnung',
    description: 'Rund um die Uhr erreichbar für Notfälle. Ausgesperrt? Wir sind in 15-30 Minuten bei Ihnen im Kreis Pinneberg.',
    features: ['Schnelle Anfahrt', 'Festpreise', 'Transparente Kosten'],
    price: 'ab 89€'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Als professioneller Schlüsseldienst im Kreis Pinneberg bieten wir umfassende Dienstleistungen 
            für Privat- und Gewerbekunden – schnell, zuverlässig und zu fairen Festpreisen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl mb-4">{service.title}</h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-4">
                  <span className="text-2xl text-blue-600">{service.price}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl mb-4">
            Transparente Preise – Keine versteckten Kosten!
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Wir nennen Ihnen den Preis bereits am Telefon. Keine Überraschungen, keine Zusatzkosten. 
            Bei uns erhalten Sie faire und transparente Preise für alle Dienstleistungen.
          </p>
          <a
            href="tel:015780914217"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            <Clock className="w-6 h-6" />
            <span>Jetzt anrufen und Preis erfragen</span>
          </a>
        </div>
      </div>
    </section>
  );
}
