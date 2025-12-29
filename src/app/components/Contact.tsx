import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In einer echten Anwendung würden die Daten hier an einen Server gesendet
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        service: '',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Kontaktieren Sie uns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir sind 24/7 für Sie erreichbar. Rufen Sie uns an oder nutzen Sie unser Kontaktformular.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12 mb-8">
              <h3 className="text-2xl md:text-3xl mb-6">
                24/7 Notdienst
              </h3>
              <p className="text-xl text-blue-100 mb-8">
                Rufen Sie uns jederzeit an – wir sind rund um die Uhr für Sie da!
              </p>

              <div className="space-y-6">
                <a
                  href="tel:015780914217"
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-blue-100 mb-1">Telefon (24/7)</div>
                    <div className="text-xl">01578 0914217</div>
                  </div>
                </a>

                <a
                  href="mailto:issaxd1@gmail.com"
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-blue-100 mb-1">E-Mail</div>
                    <div className="text-xl">issaxd1@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-blue-100 mb-1">Einzugsgebiet</div>
                    <div className="text-xl">Kreis Pinneberg</div>
                    <div className="text-sm text-blue-100 mt-1">
                      Pinneberg, Elmshorn, Wedel, Quickborn und alle weiteren Städte
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl mb-6">Erreichbarkeit</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-600">Montag - Sonntag</span>
                  <span className="text-blue-600">24 Stunden</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-600">Feiertage</span>
                  <span className="text-blue-600">24 Stunden</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Notdienst</span>
                  <span className="text-green-600">Immer verfügbar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl mb-6">Kontaktformular</h3>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-green-600 text-5xl mb-4">✓</div>
                <h4 className="text-xl text-green-800 mb-2">
                  Vielen Dank für Ihre Nachricht!
                </h4>
                <p className="text-green-700">
                  Wir werden uns schnellstmöglich bei Ihnen melden.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-gray-700 mb-2">
                    Stadt *
                  </label>
                  <select
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="Pinneberg">Pinneberg</option>
                    <option value="Elmshorn">Elmshorn</option>
                    <option value="Wedel">Wedel</option>
                    <option value="Quickborn">Quickborn</option>
                    <option value="Schenefeld">Schenefeld</option>
                    <option value="Uetersen">Uetersen</option>
                    <option value="Rellingen">Rellingen</option>
                    <option value="Halstenbek">Halstenbek</option>
                    <option value="Barmstedt">Barmstedt</option>
                    <option value="Tornesch">Tornesch</option>
                    <option value="Andere">Andere Stadt im Kreis Pinneberg</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">
                    Gewünschte Leistung *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="Türöffnung">Türöffnung</option>
                    <option value="Schlosswechsel">Schlosswechsel</option>
                    <option value="Schließanlage">Schließanlage</option>
                    <option value="Notöffnung">Notöffnung (24/7)</option>
                    <option value="Beratung">Sicherheitsberatung</option>
                    <option value="Sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg"
                >
                  <Send className="w-5 h-5" />
                  Nachricht senden
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Pflichtfelder | Ihre Daten werden vertraulich behandelt
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl text-red-800 mb-4">
            🚨 Notfall? Rufen Sie uns sofort an!
          </h3>
          <p className="text-lg text-red-700 mb-6">
            Bei Aussperrung oder dringenden Notfällen erreichen Sie uns direkt telefonisch. 
            Wir sind in 15-30 Minuten bei Ihnen!
          </p>
          <a
            href="tel:015780914217"
            className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors text-xl"
          >
            <Phone className="w-6 h-6" />
            <span className="font-bold">01578 0914217</span>
          </a>
        </div>
      </div>
    </section>
  );
}
