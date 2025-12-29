import { Metadata } from "next";
import { Box } from "@mui/material";
import Header from "@/app/components/contact-us/header";
import Contact from "@/app/components/global/contact";
import Cta3 from "@/app/components/contact-us/cta3";
import Testimonials from "@/app/components/home/testimonials";

export const metadata: Metadata = {
    title: "Contact JS ProFinish | Basement Remodeling Estimates in Utah",
    description:
        "Ready to transform your basement? Contact JS ProFinish today for a free consultation. Serving Clearfield, Ogden, Layton, and all of Davis and Weber Counties in Northern Utah.",
    keywords:
        "basement remodeling Utah, basement finishing consultation, Davis County basement contractor, Weber County basement renovation, free basement estimate, basement transformation Clearfield, basement remodeling Ogden, basement finishing Layton",
    alternates: {
        canonical: "https://www.jsprofinish.com/contact-us",
    },
    openGraph: {
        title: "Contact Utah's Premier Basement Finishing Experts | JS ProFinish",
        description:
            "Get in touch with JS ProFinish for expert basement finishing services in Northern Utah. Free consultations and estimates for homeowners in Davis County and Weber County.",
        url: "https://www.jsprofinish.com/contact-us",
        siteName: "JS ProFinish",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Northern Utah's Basement Remodeling Experts | JS ProFinish",
        description:
            "Reach out for expert basement finishing services in Davis & Weber Counties. Free consultations available!",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact JS ProFinish Basement Remodeling",
    description:
        "Contact page for JS ProFinish, Northern Utah's premier basement finishing company serving Davis County and Weber County.",
    url: "https://www.jsprofinish.com/contact-us",
    mainEntity: {
        "@type": "LocalBusiness",
        name: "JS ProFinish",
        description:
            "Expert basement finishing and remodeling services in Northern Utah with over 15 years of experience.",
        telephone: "(385) 626-3514",
        email: "jsprofinish@gmail.com",
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
        priceRange: "$$",
        areaServed: [
            "Davis County",
            "Weber County",
            "Clearfield",
            "Ogden",
            "Layton",
            "Kaysville",
            "Farmington",
            "Roy",
            "North Ogden",
            "South Ogden",
        ],
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                ],
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
        sameAs: [
            "https://www.facebook.com/jsprofinish",
            "https://www.instagram.com/jsprofinish",
        ],
    },
    potentialAction: {
        "@type": "CommunicateAction",
        name: "Contact JS ProFinish",
        description:
            "Contact JS ProFinish for a free basement finishing consultation",
    },
};

const ContactUs = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(contactPageSchema),
                }}
            />

            <Box
                component="main"
                id="contact-page-content"
                itemScope
                itemType="https://schema.org/ContactPage"
                width={"100vw"}
                sx={{
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div style={{ display: "none" }}>
                    <span itemProp="name">
                        Contact JS ProFinish - Basement Remodeling Services
                    </span>
                    <span itemProp="description">
                        Contact information for JS ProFinish, offering basement
                        finishing services in Northern Utah&#39;s Davis County
                        and Weber County.
                    </span>
                </div>

                <Header />
                <Box component="section" id="contact-form-section">
                    <Contact dark />
                </Box>
                <Box component="section" id="testimonials-section">
                    <Testimonials />
                </Box>
                <Box component="section" id="additional-contact-section">
                    <Cta3 />
                </Box>
            </Box>
        </>
    );
};

export default ContactUs;
