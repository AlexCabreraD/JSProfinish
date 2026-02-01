import { Container, Grid, Typography, Box } from "@mui/material";

interface HeaderProps {
    county: "Weber" | "Davis";
}

interface CountyData {
    cities: string;
    metaTitle: string;
    metaDescription: string;
}

interface CountyDataMap {
    Weber: CountyData;
    Davis: CountyData;
}

const Header = ({ county }: HeaderProps) => {
    const countyData: CountyDataMap = {
        Weber: {
            cities: "Ogden, Roy, North Ogden, South Ogden",
            metaTitle: `Weber County Basement Finishing & Remodeling Experts | JS ProFinish`,
            metaDescription: `Transform your basement with Weber County's premier finishing experts. Over 15 years serving Ogden, Roy and surrounding areas with custom designs and quality craftsmanship.`,
        },
        Davis: {
            cities: "Clearfield, Layton, Kaysville, Farmington",
            metaTitle: `Davis County Basement Finishing & Remodeling Experts | JS ProFinish`,
            metaDescription: `Transform your basement with Davis County's premier finishing experts. Over 15 years serving Clearfield, Layton and surrounding areas with custom designs and quality craftsmanship.`,
        },
    };

    const countySchemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `JS ProFinish Basement Remodeling - ${county} County`,
        description: `Professional basement finishing and remodeling services in ${county} County, Utah. Over 15 years of experience transforming basements into beautiful living spaces.`,
        url: `https://www.jsprofinish.com/${county.toLowerCase()}-county`,
        sameAs: [
            "https://www.facebook.com/jsprofinish",
            "https://www.instagram.com/jsprofinish",
        ],
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
        telephone: "(385) 626-3514",
        areaServed: {
            "@type": "AdministrativeArea",
            name: `${county} County, Utah`,
        },
        priceRange: "$$",
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
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(countySchemaData),
                }}
            />
            <Container
                maxWidth={false}
                className={"secondary-background"}
                sx={{ textAlign: "-webkit-center" }}
            >
                <Grid
                    container
                    sx={{
                        alignItems: "center",
                        textAlign: "center",
                        height: "fit-content",
                        maxWidth: "1040px",
                        padding: "112px 0 112px 0",
                    }}
                >
                    <Grid item>
                        <Typography
                            variant={"h1"}
                            component="h1"
                            sx={{
                                fontSize: { xs: "2.5rem", md: "3.5rem" },
                                fontWeight: 700,
                                mb: 2,
                            }}
                        >
                            {county} County Basement Finishing & Remodeling
                            Services
                        </Typography>
                        <Box
                            component="section"
                            aria-label={`About our ${county} County basement finishing services`}
                        >
                            <Typography
                                variant={"body1"}
                                sx={{
                                    marginTop: "24px",
                                    fontSize: { xs: "1rem", md: "1.125rem" },
                                    maxWidth: "900px",
                                    margin: "24px auto 0",
                                }}
                            >
                                At JS ProFinish, we are proud to be {county}{" "}
                                County&#39;s premier basement finishing experts.
                                With over 15 years of experience serving{" "}
                                {countyData[county].cities}
                                and surrounding areas, our team is dedicated to
                                transforming underutilized basements into
                                stunning, functional living spaces tailored to
                                your unique needs and preferences.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Header;
