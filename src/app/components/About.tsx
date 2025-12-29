import { ShieldCheck, Award, Users, Clock } from 'lucide-react';
import { useState } from 'react';

export function About() {
  const [showCertificate, setShowCertificate] = useState(false);
  
  const values = [
    {
      icon: ShieldCheck,
      title: 'Vertrauenswürdig',
      description: 'Zertifizierte Fachkräfte mit langjähriger Erfahrung'
    },
    {
      icon: Award,
      title: 'Qualität',
      description: 'Hochwertige Materialien und professionelle Ausführung'
    },
    {
      icon: Users,
      title: 'Kundenfokus',
      description: 'Ihre Zufriedenheit ist unser oberstes Ziel'
    },
    {
      icon: Clock,
      title: 'Zuverlässigkeit',
      description: '24/7 Erreichbarkeit und schnelle Reaktionszeiten'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              Über uns
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Wir sind Ihr zuverlässiger Partner für professionelle Schlüsseldienst-Leistungen im Kreis Pinneberg. 
              Mit jahrelanger Erfahrung und einem engagierten Team stehen wir Ihnen rund um die Uhr zur Verfügung.
            </p>
            <p className="text-gray-600 mb-6">
              Unser Unternehmen wurde gegründet, um eine ehrliche Alternative zu unseriösen Schlüsseldiensten zu bieten. 
              Wir glauben an Transparenz, faire Preise und professionellen Service. Jeder unserer Techniker ist bestens 
              ausgebildet und verfügt über das notwendige Know-how, um Ihr Problem schnell und schadensfrei zu lösen.
            </p>
            <p className="text-gray-600 mb-8">
              Ob Notöffnung, Schlosswechsel oder die Installation moderner Sicherheitssysteme – wir sind Ihr kompetenter 
              Ansprechpartner im gesamten Kreis Pinneberg. Überzeugen Sie sich selbst von unserem Service!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="tel:015780914217"
                className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Jetzt anrufen
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-3 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Kontakt aufnehmen
              </a>
            </div>

            {/* Certificate Link */}
            <button
              onClick={() => setShowCertificate(true)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Award className="w-5 h-5" />
              <span className="underline">Unser Zertifikat ansehen</span>
            </button>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl transform rotate-3 opacity-20"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1560264418-c4445382edbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZXJ2aWNlJTIwdGVhbXxlbnwxfHx8fDE3NjcwMjgwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Unser professionelles Team"
              className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Zufriedene Kunden</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Notdienst</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-blue-600 mb-2">15-30</div>
              <div className="text-gray-600">Min. Anfahrtszeit</div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowCertificate(false)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <span className="text-4xl">×</span>
            </button>
            
            {/* Download Button */}
            <a
              href={certificateImg}
              download="Zertifikat-Schlüsseldienst-Pinneberg.png"
              className="absolute -top-12 left-0 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </a>

            <img
              src={certificateImg}
              alt="Zertifikat - Sperrwerkzeugtechnik für Feuerwehrangehörige/Schlüsseldienst"
              className="w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
