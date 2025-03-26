import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Link from "next/link";
import Image from "next/image";

import img1 from "../../assets/home/img/image1.png";
import img2 from "../../assets/home/img/image2.png";
import img3 from "../../assets/home/img/image3.png";
import img4 from "../../assets/home/img/image4.png";
import img5 from "../../assets/home/img/image5.png";
import img6 from "../../assets/home/img/image6.png";

export const headerStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Basement Finishing Services in Northern Utah",
    description:
        "Expert basement finishing and remodeling services in Northern Utah, including Davis and Weber Counties.",
    provider: {
        "@type": "LocalBusiness",
        name: "JS ProFinish",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Clearfield",
            addressRegion: "UT",
            postalCode: "84015",
            streetAddress: "1740 S 300 W #8",
        },
        telephone: "(385) 626-3514",
        priceRange: "$$",
    },
    areaServed: [
        "Davis County",
        "Weber County",
        "Clearfield",
        "Ogden",
        "Layton",
    ],
    serviceType: "Basement Finishing",
};

type ImageProps = {
    src: string;
    alt: string;
};

type ExtendedButtonProps = ButtonProps & {
    link?: string;
    class?: string;
};

type Props = {
    heading: string;
    description: string;
    buttons: ExtendedButtonProps[];
    images: ImageProps[];
};

export type Header76Props = React.ComponentPropsWithoutRef<"section"> &
    Partial<Props>;

export const Header76 = (props: Header76Props) => {
    const { heading, description, buttons, images } = {
        ...Header76Defaults,
        ...props,
    } as Props;

    return (
        <section
            id="hero-section"
            className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0 bg secondary-background"
            aria-labelledby="hero-heading"
        >
            <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
                <h1
                    id="hero-heading"
                    className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl"
                >
                    {heading}
                </h1>
                <p className="md:text-md">{description}</p>
                <div
                    className="mt-6 flex gap-x-4 md:mt-8"
                    role="navigation"
                    aria-label="Main call to action buttons"
                >
                    {buttons.map((button, index) =>
                        button.link ? (
                            <Link href={button.link} key={index} passHref>
                                <Button {...button}>{button.title}</Button>
                            </Link>
                        ) : (
                            <Button key={index} {...button}>
                                {button.title}
                            </Button>
                        ),
                    )}
                </div>
            </div>
            <div className="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
                <div className="grid w-full grid-cols-2 gap-x-4">
                    <div
                        className="-mt-[140%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center"
                        aria-hidden="true"
                    >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="grid size-full grid-cols-1 gap-4"
                            >
                                <div className="relative w-full pt-[120%]">
                                    <Image
                                        className="absolute inset-0 size-full object-cover"
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        priority={index < 2}
                                        loading={index < 2 ? "eager" : "lazy"}
                                        sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className="grid size-full animate-loop-vertically grid-cols-1 gap-4"
                        aria-hidden="true"
                    >
                        {images
                            .slice()
                            .reverse()
                            .map((image, index) => (
                                <div
                                    key={index}
                                    className="grid size-full grid-cols-1 gap-4"
                                >
                                    <div className="relative w-full pt-[120%]">
                                        <Image
                                            className="absolute inset-0 size-full object-cover"
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            priority={index < 2}
                                            loading={
                                                index < 2 ? "eager" : "lazy"
                                            }
                                            sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                                        />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(headerStructuredData),
                }}
            />
        </section>
    );
};

export const Header76Defaults: Header76Props = {
    heading: "Premier Basement Finishing Serving Northern Utah Communities",
    description: `At JS ProFinish, we are Utah's premier experts in basement finishing and remodeling services. Our team specializes in transforming basements into beautiful spaces tailored to your needs. Whether you're in Ogden, Clearfield, Layton, or anywhere in northern Utah, trust us to deliver top-quality results with our attention to detail and craftsmanship.`,
    buttons: [
        {
            title: "LEARN MORE",
            link: "/services",
            style: { backgroundColor: "#1C7C54", border: 0, borderRadius: 5 },
        },
        {
            title: "CONTACT US",
            variant: "secondary",
            link: "/contact-us",
            style: {
                background: "none",
                border: "solid 1px #1C7C54",
                borderRadius: 5,
                color: "white",
            },
        },
    ],
    images: [
        {
            src: img1.src,
            alt: "Finished basement in Weber County with modern lighting and flooring",
        },
        {
            src: img2.src,
            alt: "Remodeled basement in Davis County featuring a home theater setup",
        },
        {
            src: img3.src,
            alt: "Basement renovation in Weber County with custom carpentry",
        },
        {
            src: img4.src,
            alt: "Luxurious basement remodel in Davis County with a bar area",
        },
        {
            src: img5.src,
            alt: "Spacious finished basement in Weber County with new drywall and painting",
        },
        {
            src: img6.src,
            alt: "Elegant basement remodeling project in Davis County with built-in shelves",
        },
    ],
};
