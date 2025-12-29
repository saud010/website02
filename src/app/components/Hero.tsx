import { Phone, Clock, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full mb-6">
              ⚡ 24/7 Notdienst verfügbar
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Zuverlässiger Schlüsseldienst im Kreis Pinneberg
            </h1>
            
            <p className="text-xl mb-8 text-blue-100">
              Professionelle Türöffnung, Schlosswechsel und Notöffnungen ohne versteckte Kosten. 
              Schnell, sicher und fair – Ihr Partner in der Not!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="tel:015780914217"
                className="flex items-center justify-center gap-3 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors text-lg"
              >
                <Phone className="w-6 h-6" />
                <span className="font-bold">01578 0914217</span>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Kontaktformular
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-yellow-400" />
                <div>
                  <div className="font-bold">24/7 Erreichbar</div>
                  <div className="text-sm text-blue-100">Immer für Sie da</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-green-400" />
                <div>
                  <div className="font-bold">Festpreise</div>
                  <div className="text-sm text-blue-100">Keine versteckten Kosten</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <div className="font-bold">Schnell vor Ort</div>
                  <div className="text-sm text-blue-100">15-30 Minuten</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl transform rotate-3"></div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
