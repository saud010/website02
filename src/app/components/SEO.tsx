import { useEffect } from 'react';

export function SEO() {
  useEffect(() => {
    // Set page title
    document.title = 'Schlüsseldienst Kreis Pinneberg ⭐ 24/7 Notdienst | Türöffnung ab 79€';

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Professioneller Schlüsseldienst im Kreis Pinneberg ✓ 24/7 Notdienst ✓ Türöffnung ohne Beschädigung ✓ Faire Festpreise ab 79€ ✓ Schnelle Anfahrt in 15-30 Min ✓ Pinneberg, Elmshorn, Wedel, Quickborn'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content =
        'Professioneller Schlüsseldienst im Kreis Pinneberg ✓ 24/7 Notdienst ✓ Türöffnung ohne Beschädigung ✓ Faire Festpreise ab 79€ ✓ Schnelle Anfahrt in 15-30 Min ✓ Pinneberg, Elmshorn, Wedel, Quickborn';
      document.head.appendChild(meta);
    }

    // Set meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords =
      'Schlüsseldienst Pinneberg, Schlüsseldienst Elmshorn, Schlüsseldienst Wedel, Türöffnung Pinneberg, Notschlüsseldienst, Schlosswechsel, 24/7 Notdienst, Aussperrung, Schließanlage, Sicherheitstechnik';
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    // Set Open Graph tags for social media
    const ogTags = [
      { property: 'og:title', content: 'Schlüsseldienst Kreis Pinneberg - 24/7 Notdienst' },
      {
        property: 'og:description',
        content: 'Professioneller Schlüsseldienst mit Festpreisen. Schnelle Türöffnung ohne Beschädigung im gesamten Kreis Pinneberg.'
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'de_DE' }
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    });

    // Set viewport and other important meta tags
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(meta);
    }

    // Set language
    document.documentElement.lang = 'de';

    // Structured data for local business (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocksmithService',
      name: 'Notschlüsseldienst Kreis Pinneberg',
      image: 'https://images.unsplash.com/flagged/photo-1564767609213-c75ee685263a',
      '@id': '',
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
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '00:00',
        closes: '23:59'
      },
      priceRange: '€€',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500'
      },
      areaServed: [
        'Pinneberg',
        'Elmshorn',
        'Wedel',
        'Quickborn',
        'Schenefeld',
        'Uetersen',
        'Rellingen',
        'Halstenbek',
        'Barmstedt',
        'Tornesch'
      ],
      serviceType: [
        'Türöffnung',
        'Schlosswechsel',
        'Notöffnung',
        'Schließanlagen',
        'Sicherheitstechnik'
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
