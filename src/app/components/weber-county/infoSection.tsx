import { Button, Container, Grid, Stack, Typography, Box } from "@mui/material";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import img from "@/app/assets/county/img1.png";
import Link from "next/link";
import Head from "next/head";
import { FaCheckCircle } from "react-icons/fa";

interface InfoSectionProps {
    county: "Weber" | "Davis";
}

interface CountyInfo {
    services: string[];
    expertise: string;
    cities: string[];
    yearEstablished: string;
    metaTitle: string;
    metaDescription: string;
}

type CountyInfoMap = {
    [key in "Weber" | "Davis"]: CountyInfo;
};

const InfoSection = ({ county }: InfoSectionProps) => {
    const countyInfo: CountyInfoMap = {
        Weber: {
            services: [
                "Basement finishing",
                "Home theaters",
                "Bathroom additions",
                "Recreational spaces",
                "Home offices",
            ],
            expertise:
                "Weber County's complex ventilation requirements and historic home regulations",
            cities: [
                "Ogden",
                "Roy",
                "North Ogden",
                "South Ogden",
                "Pleasant View",
            ],
            yearEstablished: "2019",
            metaTitle:
                "Expert Basement Finishing in Weber County | JS ProFinish",
            metaDescription:
                "Specialized basement remodeling services in Weber County. Local expertise with Ogden building codes, moisture control solutions, and custom design for Utah homes.",
        },
        Davis: {
            services: [
                "Custom basement design",
                "Entertainment rooms",
                "Basement bathrooms",
                "Wet bars and kitchens",
                "Guest suites",
            ],
            expertise:
                "Davis County's unique foundation requirements and water table considerations",
            cities: [
                "Clearfield",
                "Layton",
                "Kaysville",
                "Farmington",
                "Bountiful",
            ],
            yearEstablished: "2019",
            metaTitle:
                "Expert Basement Finishing in Davis County | JS ProFinish",
            metaDescription:
                "Specialized basement remodeling services in Davis County. Local expertise with Clearfield and Layton building codes, water management, and custom designs for Utah homes.",
        },
    };

    const serviceAreaSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${county} County Basement Finishing & Remodeling`,
        serviceType: "Basement Remodeling",
        provider: {
            "@type": "LocalBusiness",
            name: "JS ProFinish",
            telephone: "(385) 626-3514",
            foundingDate: countyInfo[county].yearEstablished,
            address: {
                "@type": "PostalAddress",
                streetAddress: "1740 S 300 W #8",
                addressLocality: "Clearfield",
                addressRegion: "UT",
                postalCode: "84015",
                addressCountry: "US",
            },
        },
        areaServed: {
            "@type": "AdministrativeArea",
            name: `${county} County`,
            containsPlace: countyInfo[county].cities.map((city) => ({
                "@type": "City",
                name: city,
                containedInPlace: {
                    "@type": "AdministrativeArea",
                    name: `${county} County, Utah`,
                },
            })),
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `Basement Finishing Services in ${county} County`,
            itemListElement: countyInfo[county].services.map(
                (service, index) => ({
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: service,
                    },
                    position: index + 1,
                }),
            ),
        },
    };

    return (
        <>
            <Head>
                <meta
                    name="description"
                    content={countyInfo[county].metaDescription}
                />
                <meta
                    name="keywords"
                    content={`basement finishing ${county} County, ${countyInfo[county].cities.join(", ")} basement remodeling, local basement contractors, custom basement design Utah`}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(serviceAreaSchema),
                    }}
                />
            </Head>

            <Container
                maxWidth={false}
                className={"primary-background"}
                sx={{ textAlign: "-webkit-center" }}
            >
                <Grid
                    container
                    component="section"
                    id={`${county.toLowerCase()}-county-expertise`}
                    aria-labelledby={`${county.toLowerCase()}-expertise-heading`}
                    sx={{
                        alignItems: "center",
                        textAlign: { xs: "center", md: "start" },
                        height: "fit-content",
                        maxWidth: "1440px",
                        padding: { xs: "56px 16px", md: "112px 0" },
                    }}
                    spacing={4}
                >
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h2"
                            component="h2"
                            id={`${county.toLowerCase()}-expertise-heading`}
                            sx={{
                                fontSize: { xs: "1.75rem", md: "2.25rem" },
                                fontWeight: 700,
                                mb: { xs: 2, md: 3 },
                                color: "#333333",
                                position: "relative",
                            }}
                        >
                            Local Basement Finishing Expertise in {county}{" "}
                            County, Utah
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                marginTop: "24px",
                                fontSize: { xs: "1rem", md: "1.125rem" },
                                lineHeight: 1.6,
                                color: "#555555",
                                mb: 3,
                            }}
                        >
                            At JS ProFinish, we understand{" "}
                            {countyInfo[county].expertise}. Our team of local
                            basement remodeling experts has been serving{" "}
                            {countyInfo[county].cities.join(", ")}
                            since {countyInfo[county].yearEstablished}, ensuring
                            every project meets local building codes and
                            addresses the unique climate considerations of
                            Northern Utah homes.
                        </Typography>

                        <Box sx={{ mb: 4 }}>
                            <Typography
                                variant="h3"
                                component="h3"
                                sx={{
                                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                                    fontWeight: 600,
                                    mb: 2,
                                    color: "#1C7C54",
                                }}
                            >
                                Our {county} County Basement Services Include:
                            </Typography>

                            <Grid container spacing={2}>
                                {countyInfo[county].services.map(
                                    (service, index) => (
                                        <Grid item xs={12} sm={6} key={index}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    mb: 1,
                                                    textAlign: "left",
                                                }}
                                            >
                                                <FaCheckCircle
                                                    color="#1C7C54"
                                                    style={{
                                                        marginRight: "10px",
                                                    }}
                                                />
                                                <Typography variant="body2">
                                                    {service}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ),
                                )}
                            </Grid>
                        </Box>

                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={2}
                            sx={{
                                marginTop: "40px",
                                justifyContent: {
                                    xs: "center",
                                    md: "flex-start",
                                },
                            }}
                        >
                            <Link
                                href="/about-us"
                                passHref
                                aria-label={`Learn more about our basement finishing services in ${county} County`}
                            >
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: "#1C7C54",
                                        borderColor: "#1C7C54",
                                        py: 1.5,
                                        px: 3,
                                        borderRadius: "6px",
                                        fontWeight: 600,
                                        "&:hover": {
                                            backgroundColor:
                                                "rgba(28, 124, 84, 0.04)",
                                            transform: "translateY(-2px)",
                                        },
                                    }}
                                >
                                    Our Expertise
                                </Button>
                            </Link>
                            <Link
                                href="/contact-us"
                                passHref
                                aria-label={`Contact us about basement remodeling in ${county} County`}
                            >
                                <Button
                                    variant="text"
                                    endIcon={<MdArrowForwardIos />}
                                    sx={{
                                        color: "#1C7C54",
                                        fontWeight: 600,
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                            transform: "translateX(5px)",
                                        },
                                    }}
                                >
                                    Get Free Consultation
                                </Button>
                            </Link>
                        </Stack>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ padding: { xs: "40px 0 0 0", md: "0 0 0 80px" } }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                            }}
                        >
                            <Image
                                src={img}
                                alt={`${county} County basement remodeling project design by JS ProFinish`}
                                width={600}
                                height={450}
                                layout="responsive"
                                priority
                                sizes="(max-width: 768px) 100vw, 600px"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default InfoSection;
