import { useEffect } from 'react';

export function SEO() {
  useEffect(() => {
    // Set page title
    document.title =
      'Schlüsseldienst Kreis Pinneberg ⭐ 24/7 Notdienst | Türöffnung ab 79€';

    // Meta description
    const descriptionContent =
      'Professioneller Schlüsseldienst im Kreis Pinneberg ✓ 24/7 Notdienst ✓ Türöffnung ohne Beschädigung ✓ Faire Festpreise ab 79€ ✓ Schnelle Anfahrt in 15-30 Min ✓ Pinneberg, Elmshorn, Wedel, Quickborn';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = descriptionContent;

    // Meta keywords
    const keywordsContent =
      'Schlüsseldienst Pinneberg, Schlüsseldienst Elmshorn, Schlüsseldienst Wedel, Türöffnung Pinneberg, Notschlüsseldienst, Schlosswechsel, 24/7 Notdienst, Aussperrung, Schließanlage, Sicherheitstechnik';
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywordsContent;

    // Open Graph
    const ogTags = [
      { property: 'og:title', content: 'Schlüsseldienst Kreis Pinneberg - 24/7 Notdienst' },
      {
        property: 'og:description',
        content:
          'Professioneller Schlüsseldienst mit Festpreisen. Schnelle Türöffnung ohne Beschädigung im gesamten Kreis Pinneberg.'
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'de_DE' }
    ];
    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Viewport
    if (!document.querySelector('meta[name="viewport"]')) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(meta);
    }

    // Set language
    document.documentElement.lang = 'de';

    // JSON-LD structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocksmithService',
      name: 'Notschlüsseldienst Kreis Pinneberg',
      image: 'https://images.unsplash.com/flagged/photo-1564767609213-c75ee685263a',
      url: window.location.href,
      telephone: '+4915780914217',
      email: 'issaxd1@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pinneberg',
        addressRegion: 'Schleswig-Holstein',
        addressCountry: 'DE'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 53.6558,
        longitude: 9.7987
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '00:00', closes: '23:59' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '00:00', closes: '23:59' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '00:00', closes: '23:59' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '00:00', closes: '23:59' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '00:00', closes: '23:59' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '00:00', closes: '23:59' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '00:00', closes: '23:59' }
      ],
      priceRange: '€€',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500'
      },
      areaServed: [
        'Pinneberg', 'Elmshorn', 'Wedel', 'Quickborn', 'Schenefeld',
        'Uetersen', 'Rellingen', 'Halstenbek', 'Barmstedt', 'Tornesch'
      ],
      serviceType: [
        'Türöffnung', 'Schlosswechsel', 'Notöffnung', 'Schließanlagen', 'Sicherheitstechnik'
      ]
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);

  return null;
}
