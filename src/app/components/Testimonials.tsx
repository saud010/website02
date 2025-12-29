import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Schmidt',
    location: 'Pinneberg',
    rating: 5,
    text: 'Ich hatte mich ausgesperrt und war verzweifelt. Der Schlüsseldienst war innerhalb von 20 Minuten da und hat die Tür ohne Beschädigung geöffnet. Faire Preise und super freundlich!',
    date: 'Vor 2 Wochen'
  },
  {
    name: 'Thomas Müller',
    location: 'Elmshorn',
    rating: 5,
    text: 'Sehr professioneller Service! Das Schloss meiner Haustür war defekt und musste dringend ausgetauscht werden. Schnelle Terminvereinbarung und saubere Arbeit. Absolut empfehlenswert!',
    date: 'Vor 1 Monat'
  },
  {
    name: 'Sandra Weber',
    location: 'Wedel',
    rating: 5,
    text: 'Endlich ein seriöser Schlüsseldienst! Der Preis wurde am Telefon genannt und es gab keine versteckten Kosten. Schnelle Anfahrt und freundlicher Techniker. Vielen Dank!',
    date: 'Vor 3 Wochen'
  },
  {
    name: 'Michael Becker',
    location: 'Quickborn',
    rating: 5,
    text: 'Notdienst am Sonntagabend – ich dachte, das wird teuer. Aber die Preise waren fair und transparent. Die Tür wurde professionell und ohne Schäden geöffnet. Top Service!',
    date: 'Vor 1 Woche'
  },
  {
    name: 'Julia Fischer',
    location: 'Schenefeld',
    rating: 5,
    text: 'Wir haben für unser Mehrfamilienhaus eine neue Schließanlage installieren lassen. Die Beratung war kompetent und die Umsetzung perfekt. Sehr zufrieden mit dem Ergebnis!',
    date: 'Vor 2 Monaten'
  },
  {
    name: 'Robert Klein',
    location: 'Uetersen',
    rating: 5,
    text: 'Schnell, zuverlässig und professionell. Der Techniker war sehr freundlich und hat mir auch noch Tipps zur Sicherheit gegeben. Kann ich nur weiterempfehlen!',
    date: 'Vor 1 Monat'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Über 5000 zufriedene Kunden im Kreis Pinneberg vertrauen auf unseren Service. 
            Lesen Sie, was andere über uns sagen.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="text-5xl md:text-6xl mb-2">4.9/5.0</div>
          <div className="text-xl text-blue-100">Durchschnittliche Bewertung aus über 500 Rezensionen</div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl mb-4">
            Werden Sie unser nächster zufriedener Kunde!
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Überzeugen Sie sich selbst von unserem professionellen Service und fairen Preisen.
          </p>
          <a
            href="tel:015780914217"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
}
