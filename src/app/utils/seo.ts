export const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.jsprofinish-utah.com/#business",
    name: "JS ProFinish",
    alternateName: "JS ProFinish Basement Finishing",
    description:
        "Northern Utah's premier basement finishing and remodeling experts with over 15 years of experience serving Davis County and Weber County. Specializing in custom basement designs, framing, carpentry, drywall installation, and professional painting.",
    url: "https://www.jsprofinish-utah.com/",
    logo: "https://www.jsprofinish-utah.com/logo.png",
    image: [
        "https://www.jsprofinish-utah.com/app/assets/home/img/image1.png",
        "https://www.jsprofinish-utah.com/app/assets/home/img/image3.png",
        "https://www.jsprofinish-utah.com/app/assets/home/img/image8.png",
    ],
    telephone: "(385) 626-3514",
    email: "contact@jsprofinish-utah.com",
    priceRange: "$$",
    address: {
        "@type": "PostalAddress",
        streetAddress: "1740 S 300 W #8",
        addressLocality: "Clearfield",
        addressRegion: "UT",
        postalCode: "84015",
        addressCountry: "US",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: "41.0895",
        longitude: "-112.0263",
    },
    areaServed: [
        {
            "@type": "State",
            name: "Utah",
        },
        {
            "@type": "City",
            name: "Clearfield",
            containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Davis County",
            },
        },
        {
            "@type": "City",
            name: "Ogden",
            containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Weber County",
            },
        },
        {
            "@type": "City",
            name: "Layton",
        },
        {
            "@type": "City",
            name: "Kaysville",
        },
        {
            "@type": "City",
            name: "Roy",
        },
    ],
    sameAs: [
        "https://www.facebook.com/jsprofinish",
        "https://www.instagram.com/jsprofinish",
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Basement Finishing Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Basement Finishing",
                    description:
                        "Complete basement finishing services to transform your space into a beautiful and functional area tailored to your needs.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Framing Services",
                    description:
                        "Expert framing services for your basement project, ensuring structural integrity and precision.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Drywall Installation",
                    description:
                        "Professional drywall services for a smooth and flawless finish for your basement walls.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Carpentry Services",
                    description:
                        "High-quality carpentry services to enhance the functionality and aesthetics of your basement.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Professional Painting",
                    description:
                        "Expert painting services to transform your basement into a beautiful space.",
                },
            },
        ],
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "16:00",
        },
    ],
    slogan: "Your Trusted Local Remodeling Experts",
    foundingDate: "2019",
    foundingLocation: {
        "@type": "Place",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Clearfield",
            addressRegion: "UT",
        },
    },
    keywords:
        "basement finishing, basement remodeling, Utah basement contractor, Davis County basement finishing, Weber County basement remodeling, Clearfield contractor, Ogden basement renovation, custom basement design, basement framing, basement drywall installation",
};
