export interface CityData {
    name: string;
    slug: string;
    county: "Weber" | "Davis";
    population: string;
    coordinates: {
        latitude: string;
        longitude: string;
    };
    zipCodes: string[];
    description: string;
    uniqueCharacteristics: string[];
    buildingConsiderations: string;
    neighborhoods?: string[];
    established?: string;
    metaDescription: string;
    h1Title: string;
}

export const cities: CityData[] = [
    // Weber County Cities
    {
        name: "Ogden",
        slug: "ogden",
        county: "Weber",
        population: "87,000",
        coordinates: {
            latitude: "41.2230",
            longitude: "-111.9738",
        },
        zipCodes: ["84401", "84403", "84404", "84405", "84409"],
        description:
            "Ogden, Weber County's seat and Northern Utah's cultural hub, boasts a rich history dating back to 1846. Known for its historic 25th Street, outdoor recreation access, and diverse housing stock ranging from Victorian-era homes to modern developments.",
        uniqueCharacteristics: [
            "Historic district with century-old homes requiring specialized foundation work",
            "Mountain proximity creating unique drainage and moisture challenges",
            "Mix of historic preservation requirements and modern building codes",
            "Strong arts and culture community with growing demand for entertainment spaces",
            "Proximity to Weber State University creating demand for home offices and student spaces",
        ],
        buildingConsiderations:
            "Ogden's historic homes often feature older foundation types including stone and brick foundations that require specialized expertise. The city's location at the base of the Wasatch Mountains means proper drainage and moisture control are critical for basement projects. Many neighborhoods have strict historic preservation guidelines that affect remodeling projects.",
        neighborhoods: [
            "Historic 25th Street District",
            "East Bench",
            "Malan's Heights",
            "Downtown Ogden",
            "North Ogden Valley",
        ],
        established: "1846",
        metaDescription:
            "Expert basement finishing in Ogden, UT. Specialized in historic homes, modern remodels, and custom designs. Serving all Ogden neighborhoods with 15+ years experience. Free consultation.",
        h1Title: "Basement Finishing & Remodeling in Ogden, Utah",
    },
    {
        name: "Roy",
        slug: "roy",
        county: "Weber",
        population: "38,000",
        coordinates: {
            latitude: "41.1616",
            longitude: "-112.0263",
        },
        zipCodes: ["84067"],
        description:
            "Roy is a thriving suburban community in Weber County, featuring predominantly single-family homes built between 1970-2010. Known for excellent schools, family-friendly neighborhoods, and proximity to Hill Air Force Base.",
        uniqueCharacteristics: [
            "Primarily 1970s-1990s suburban construction with standard basement layouts",
            "Strong military community with unique scheduling and timeline needs",
            "Family-oriented community with high demand for recreation rooms and play spaces",
            "Well-established neighborhoods with mature trees requiring root management",
            "Active HOA communities with specific exterior modification guidelines",
        ],
        buildingConsiderations:
            "Most Roy homes were built during the suburban boom of the 1970s-1990s, featuring poured concrete foundations with standard 8-foot basement ceilings. The area's high water table requires proper sump pump installation and waterproofing. Many neighborhoods have HOA guidelines that may affect exterior modifications like egress windows.",
        neighborhoods: [
            "Roy Meadows",
            "Midland",
            "West Haven borders",
            "Central Roy",
        ],
        established: "1937",
        metaDescription:
            "Professional basement finishing in Roy, Utah. Specialized in 1970s-1990s homes, family recreation spaces, and home theaters. Serving Roy and West Haven. Free estimates available.",
        h1Title: "Roy Basement Finishing & Remodeling Services",
    },
    {
        name: "North Ogden",
        slug: "north-ogden",
        county: "Weber",
        population: "20,000",
        coordinates: {
            latitude: "41.3077",
            longitude: "-111.9602",
        },
        zipCodes: ["84414"],
        description:
            "North Ogden offers stunning mountain views and a mix of established neighborhoods and newer developments. The city combines small-town charm with modern amenities, featuring homes from the 1960s through present day.",
        uniqueCharacteristics: [
            "Hillside and sloped lot construction requiring specialized grading knowledge",
            "Newer custom homes with walk-out basement potential",
            "Mountain views driving demand for entertainment and guest spaces",
            "Mix of older ranch-style homes and modern two-story constructions",
            "Outdoor recreation culture creating demand for gear storage and mudrooms",
        ],
        buildingConsiderations:
            "North Ogden's terrain includes many sloped lots that create opportunities for walk-out basements and daylight designs. Hillside homes require careful attention to drainage and retaining wall integration. The city's building department has specific requirements for egress windows on sloped lots. Many newer homes (2000+) have 9-foot basement ceilings providing excellent finishing potential.",
        neighborhoods: [
            "North Ogden Divide",
            "Pleasant View borders",
            "East Bench foothills",
            "Historic central North Ogden",
        ],
        established: "1934",
        metaDescription:
            "North Ogden basement finishing experts. Specialized in hillside homes, walk-out basements, and mountain view properties. Custom designs with 15+ years local experience.",
        h1Title:
            "Basement Finishing & Remodeling in North Ogden, Weber County",
    },
    {
        name: "South Ogden",
        slug: "south-ogden",
        county: "Weber",
        population: "17,000",
        coordinates: {
            latitude: "41.1872",
            longitude: "-111.9713",
        },
        zipCodes: ["84403", "84405"],
        description:
            "South Ogden is a well-established residential community featuring mid-century homes, excellent schools, and easy access to both outdoor recreation and urban amenities. The city has seen significant reinvestment with many homeowners updating and finishing basements.",
        uniqueCharacteristics: [
            "Predominantly 1950s-1970s ranch-style homes with full basements",
            "Strong community investment in home improvements and remodeling",
            "Proximity to medical facilities creating demand for multi-generational living spaces",
            "Mature neighborhoods with established property values",
            "Growing trend toward home office conversions and ADU-style basement apartments",
        ],
        buildingConsiderations:
            "South Ogden homes typically feature poured concrete foundations from the 1950s-1970s era. Many basements have lower ceiling heights (7-7.5 feet) that require creative design solutions. The area's soil composition generally drains well, but older homes may need foundation waterproofing updates before finishing. Local codes require specific egress requirements for bedroom additions.",
        neighborhoods: [
            "Canyon Cove",
            "Shadow Valley",
            "East South Ogden",
            "Washington Heights borders",
        ],
        established: "1936",
        metaDescription:
            "South Ogden basement remodeling specialists. Expert in 1950s-1970s homes, ADU conversions, and multi-generational living spaces. Licensed, insured, 15+ years experience.",
        h1Title: "Professional Basement Finishing in South Ogden, Utah",
    },
    {
        name: "Pleasant View",
        slug: "pleasant-view",
        county: "Weber",
        population: "10,000",
        coordinates: {
            latitude: "41.3219",
            longitude: "-111.9927",
        },
        zipCodes: ["84414"],
        description:
            "Pleasant View is a growing community in northern Weber County, featuring newer residential developments and exceptional views of the Great Salt Lake and Wasatch Mountains. The city offers a suburban lifestyle with large lots and modern homes.",
        uniqueCharacteristics: [
            "Newer construction (1990s-present) with modern basement layouts",
            "Large lot sizes allowing for expanded outdoor access from basements",
            "Growing families creating demand for playrooms and additional living space",
            "Higher-end finishes and custom home prevalence",
            "Strong focus on energy efficiency and modern building practices",
        ],
        buildingConsiderations:
            "Pleasant View homes generally feature modern poured concrete foundations with excellent drainage systems already in place. Most homes built after 2000 include 9-foot basement ceilings and pre-plumbed rough-ins for bathrooms. The city follows current IRC codes with clear egress requirements. Many lots are sloped, creating opportunities for walk-out or daylight basement designs.",
        neighborhoods: [
            "Scenic Ridge",
            "Mountain View Estates",
            "Pleasant View Country Club area",
            "West Pleasant View",
        ],
        established: "1949",
        metaDescription:
            "Pleasant View basement finishing. Specialized in newer homes, walk-out designs, and custom luxury basements. Serving Pleasant View and North Ogden areas.",
        h1Title: "Basement Finishing in Pleasant View, Weber County",
    },
    {
        name: "Harrisville",
        slug: "harrisville",
        county: "Weber",
        population: "7,000",
        coordinates: {
            latitude: "41.2858",
            longitude: "-111.9860",
        },
        zipCodes: ["84404"],
        description:
            "Harrisville is a quiet, family-oriented community in Weber County with a mix of established neighborhoods and newer developments. The city offers a small-town atmosphere while maintaining easy access to Ogden and the Wasatch Front.",
        uniqueCharacteristics: [
            "Mix of 1960s-1970s ranch homes and modern construction",
            "Strong sense of community with high homeownership rates",
            "Agricultural heritage transitioning to suburban residential",
            "Larger lot sizes compared to surrounding communities",
            "Growing interest in home-based businesses and hobby spaces",
        ],
        buildingConsiderations:
            "Harrisville features a diverse housing stock requiring adaptable finishing approaches. Older homes may have lower ceiling heights and require foundation assessment before finishing. The area's historic agricultural use means some properties have high water tables requiring sump systems. Modern homes typically feature standard 8-9 foot basement ceilings with good finishing potential.",
        neighborhoods: [
            "West Harrisville",
            "East Harrisville",
            "Historic Harrisville",
            "Near Interstate 15 corridor",
        ],
        established: "1850",
        metaDescription:
            "Harrisville basement remodeling experts. Serving diverse home styles from historic to modern. Custom basement designs with local expertise. Free consultations available.",
        h1Title: "Basement Finishing & Remodeling in Harrisville, Utah",
    },

    // Davis County Cities
    {
        name: "Clearfield",
        slug: "clearfield",
        county: "Davis",
        population: "31,000",
        coordinates: {
            latitude: "41.0895",
            longitude: "-112.0263",
        },
        zipCodes: ["84015", "84016"],
        description:
            "Clearfield is a vibrant Davis County community and home to JS ProFinish headquarters. Located near Hill Air Force Base and featuring a mix of mid-century homes and modern developments, Clearfield offers diverse basement finishing opportunities.",
        uniqueCharacteristics: [
            "JS ProFinish's home base with extensive local project experience",
            "Strong military community with flexible scheduling needs",
            "Mix of 1950s-1970s homes and recent construction (2000s-present)",
            "Proximity to Hill Air Force Base affecting noise considerations for home theaters",
            "Aquifer proximity requiring specialized waterproofing and moisture control",
        ],
        buildingConsiderations:
            "Clearfield's location near the Great Salt Lake creates unique water table considerations - proper sump pump systems and waterproofing are essential. Homes built in the 1960s-1970s often have lower ceiling heights (7-7.5 feet) requiring creative design. Newer subdivisions (post-2000) feature modern foundations with 9-foot ceilings. The city follows Davis County building codes with standard egress requirements.",
        neighborhoods: [
            "Sunset Park",
            "Clearfield Heights",
            "Freeport Center area",
            "East Clearfield",
            "Historic downtown Clearfield",
        ],
        established: "1877",
        metaDescription:
            "Clearfield basement finishing by JS ProFinish - your local experts. Specialized in Davis County homes, waterproofing, and custom designs. Based in Clearfield since 2019.",
        h1Title: "Clearfield Basement Finishing & Remodeling | Local Experts",
    },
    {
        name: "Layton",
        slug: "layton",
        county: "Davis",
        population: "81,000",
        coordinates: {
            latitude: "41.0602",
            longitude: "-111.9710",
        },
        zipCodes: ["84040", "84041"],
        description:
            "Layton is Davis County's largest city and a thriving suburban community featuring excellent schools, shopping, and recreation. The city boasts diverse housing from 1960s ranch homes to modern master-planned communities.",
        uniqueCharacteristics: [
            "Davis County's largest city with highest volume of basement finishing projects",
            "Major shopping and entertainment hub creating demand for premium home spaces",
            "Diverse housing stock from affordable starter homes to luxury properties",
            "Strong economic growth driving home improvement investments",
            "Multiple master-planned communities with HOA considerations",
        ],
        buildingConsiderations:
            "Layton's expansive size means varied foundation types and basement configurations. East Layton features hillside homes with walk-out potential, while west Layton has flatter terrain with standard basements. Homes built 1960-1990 typically have 8-foot ceilings, while newer construction (post-2000) offers 9-foot ceilings. The city has active code enforcement requiring proper permits for all basement bedrooms and bathrooms.",
        neighborhoods: [
            "East Layton Hills",
            "Cherry Lane area",
            "Station Park vicinity",
            "West Layton",
            "Legacy Ridge",
            "Founders Park",
        ],
        established: "1920",
        metaDescription:
            "Layton basement finishing & remodeling experts. Serving all Layton neighborhoods with custom designs, home theaters, and ADU conversions. Licensed Davis County contractor.",
        h1Title: "Layton Basement Finishing & Remodeling Services",
    },
    {
        name: "Kaysville",
        slug: "kaysville",
        county: "Davis",
        population: "32,000",
        coordinates: {
            latitude: "41.0352",
            longitude: "-111.9388",
        },
        zipCodes: ["84037"],
        description:
            "Kaysville is a picturesque Davis County community known for its historic Main Street, excellent schools, and strong community values. The city features beautiful historic homes alongside modern developments with stunning mountain views.",
        uniqueCharacteristics: [
            "Historic downtown with century-old homes requiring specialized expertise",
            "Higher average home values driving demand for premium finishes",
            "Strong emphasis on quality craftsmanship and attention to detail",
            "Hillside bench properties with walk-out basement opportunities",
            "Active community preservation of historic character",
        ],
        buildingConsiderations:
            "Kaysville's historic homes (pre-1950) may have stone or brick foundations requiring careful assessment and specialized waterproofing. The city's east bench features sloped lots perfect for walk-out basements with mountain views. Newer developments (1990s-present) have modern foundations with excellent finishing potential. Kaysville's building department is thorough and requires detailed plans for basement bedrooms and egress windows.",
        neighborhoods: [
            "Historic Main Street district",
            "East Kaysville Bench",
            "Mutton Hollow",
            "Kaysville Heights",
            "West Kaysville",
        ],
        established: "1850",
        metaDescription:
            "Kaysville basement finishing specialists. Expert in historic homes, luxury remodels, and custom walk-out basements. Serving Kaysville and Farmington with 15+ years experience.",
        h1Title: "Expert Basement Finishing in Kaysville, Davis County",
    },
    {
        name: "Farmington",
        slug: "farmington",
        county: "Davis",
        population: "24,000",
        coordinates: {
            latitude: "40.9805",
            longitude: "-111.8874",
        },
        zipCodes: ["84025"],
        description:
            "Farmington is Davis County's seat, featuring the perfect blend of historic charm and modern luxury. Known for the historic Station Park development, Lagoon Amusement Park, and upscale hillside homes with spectacular views.",
        uniqueCharacteristics: [
            "County seat with diverse housing from historic to ultra-luxury",
            "Hillside homes with premium walk-out and daylight basement designs",
            "Higher-end market expecting luxury finishes and custom details",
            "Proximity to Lagoon creating family entertainment culture",
            "Strong historic preservation alongside modern development",
        ],
        buildingConsiderations:
            "Farmington's east bench features dramatic slopes perfect for walk-out basements with million-dollar views. These hillside properties require expertise in retaining walls, drainage, and multi-level designs. Historic downtown homes may need foundation work before finishing. Newer luxury homes (2000s-present) often include pre-finished basement spaces requiring renovation or updating. The city has high standards for building quality and finish work.",
        neighborhoods: [
            "Farmington Station Park",
            "East Bench estates",
            "Historic downtown Farmington",
            "Shepard Lane area",
            "Farmington Bay vicinity",
        ],
        established: "1847",
        metaDescription:
            "Farmington basement remodeling - luxury finishes, walk-out designs, and historic home expertise. Serving Davis County seat with premium craftsmanship since 2019.",
        h1Title: "Luxury Basement Finishing in Farmington, Utah",
    },
    {
        name: "Bountiful",
        slug: "bountiful",
        county: "Davis",
        population: "44,000",
        coordinates: {
            latitude: "40.8894",
            longitude: "-111.8808",
        },
        zipCodes: ["84010", "84011"],
        description:
            "Bountiful is a well-established Davis County community known for its tree-lined streets, historic neighborhoods, and stunning views. The city features diverse housing stock from charming historic homes to modern hillside estates.",
        uniqueCharacteristics: [
            "Mature tree canopy creating unique shade and root management considerations",
            "Historic homes with character requiring specialized preservation expertise",
            "Hillside bench properties with exceptional walk-out potential",
            "Strong community pride driving high-quality renovation projects",
            "Proximity to Salt Lake City creating demand for home offices and commuter-friendly spaces",
        ],
        buildingConsiderations:
            "Bountiful's hillside location creates excellent opportunities for walk-out and daylight basements, especially on the east bench. Older homes (pre-1960) may have lower ceiling heights and require foundation reinforcement. The city's mature neighborhoods have established trees whose root systems must be considered during excavation. Bountiful follows strict building codes with thorough inspection processes. Many homes have unique floor plans requiring custom basement designs.",
        neighborhoods: [
            "Bountiful Bench",
            "Historic Main Street area",
            "Val Verda",
            "West Bountiful borders",
            "Mueller Park area",
        ],
        established: "1847",
        metaDescription:
            "Bountiful basement finishing experts. Specialized in historic homes, hillside walk-outs, and custom remodels. Serving all Bountiful neighborhoods with premium craftsmanship.",
        h1Title: "Basement Finishing & Remodeling in Bountiful, Davis County",
    },
    {
        name: "Syracuse",
        slug: "syracuse",
        county: "Davis",
        population: "31,000",
        coordinates: {
            latitude: "41.0894",
            longitude: "-112.0647",
        },
        zipCodes: ["84075"],
        description:
            "Syracuse is one of Davis County's fastest-growing communities, featuring predominantly new construction and master-planned neighborhoods. The city offers modern amenities, excellent schools, and family-friendly atmosphere.",
        uniqueCharacteristics: [
            "Primarily new construction (2000s-present) with modern basement designs",
            "Master-planned communities with consistent HOA standards",
            "Young families creating high demand for playrooms and family spaces",
            "Modern building codes and energy-efficient construction",
            "Great Salt Lake proximity affecting water table and drainage",
        ],
        buildingConsiderations:
            "Syracuse homes predominantly feature modern poured concrete foundations with 9-foot basement ceilings and pre-plumbed bathroom rough-ins. The area's proximity to the Great Salt Lake means water table management is critical - most new homes include sump pump systems. HOA guidelines in master-planned communities may affect exterior modifications like egress windows. The city follows current IRC building codes with clear egress and safety requirements.",
        neighborhoods: [
            "Bluff Ridge",
            "Syracuse Park",
            "Antelope Ridge",
            "Jensen Park area",
            "West Syracuse lakeside",
        ],
        established: "1825",
        metaDescription:
            "Syracuse basement finishing for new homes. Modern designs, family spaces, and home theaters. Expert in 2000s+ construction. Serving Syracuse and West Point areas.",
        h1Title: "Syracuse Basement Finishing & Remodeling Services",
    },
];

// Helper functions for city data
export function getCityBySlug(slug: string): CityData | undefined {
    return cities.find((city) => city.slug === slug);
}

export function getCitiesByCounty(county: "Weber" | "Davis"): CityData[] {
    return cities.filter((city) => city.county === county);
}

export function getAllCitySlugs(): string[] {
    return cities.map((city) => city.slug);
}
