interface DojoLocation {
    key: number
    name: string
    time: string[]
    address: string
}

interface Dojo {
    key: number
    name: string
    locations: DojoLocation[],
    headInstructor: string
    contactName?: string
    contactEmail: string
    website: string
}

const dojos: Dojo[] = [
    {
        key: 0,
        name: "Hokka Sen Shin Kai (HSSK)",
        locations: [
            {
                key: 0,
                name: "Milpitas Community Center",
                time: ["WED: 5:30 - 8:30pm"],
                address: "457 E Calaveras Blvd, Milpitas, CA 95035" 
            },
            {
                key: 1,
                name: "Pleasanton Senior Center",
                time: ["TUE/THU: 5:30 - 8:30pm"],
                address: "Centennial Park, 5353 Sunol Blvd, Pleasanton, CA 94566" 
            },
            {
                key: 2,
                name: "Silliman Activity and Family Aquatic Center",
                time: ["SAT: 3:30 - 6:15pm"], 
                address: "6800 Mowry Ave, Newark, CA 94560"
            },
        ],
        headInstructor: "Hiro Ichimura",
        contactName: "Hiro Ichimura",
        contactEmail: "team@hsskkendo.org",
        website: "https://www.hsskkendo.org/"
    },
    {
        key: 1,
        name: "Sacramento Kendo Dojo",
        locations: [
            {
                key: 0,
                name: "Buddhist Church of Florin",
                time: ["TUE/FRI: 7:30 - 9:30pm"],
                address: "7235 Pritchard Rd. Sacramento, CA" 
            },
        ],
        headInstructor: "Glenn Harada",
        contactName: "Glenn Harada",
        contactEmail: "sacramentokendo@gmail.com",
        website: "http://www.sacramentokendo.org/"
    },
    {
        key: 2,
        name: "Berkeley Kendo Dojo",
        locations: [
            {
                key: 0,
                name: "Live Oak Recreation Center",
                time: ["TUE/THU: 5:45 - 7:15pm"],
                address: "1301 Shattuck Ave. Berkeley, CA, 94704" 
            },
        ],
        headInstructor: "Dorothee Liebschner",
        contactName: "Dorothee Liebschner",
        contactEmail: "berkeleyKendo@gmail.com",
        website: "https://berkeleykendo.org/"
    },
    {
        key: 3,
        name: "Mountain View Kendo Dojo",
        locations: [
            {
                key: 0,
                name: "Mountain View Buddhist Temple",
                time: ["MON: 5:30 - 8:30pm"],
                address: "575 N. Shoreline Blvd. Mountain View, CA" 
            },
        ],
        headInstructor: "Sean Choi",
        contactName: "Hide Kokawa",
        contactEmail: "hkokawa@aol.com",
        website: "http://www.mountainviewkendo.org/"
    },
    {
        key: 4,
        name: "Oakland Kendo Dojo",
        locations: [
            {
                key: 0,
                name: "DeFremery Recreation Center",
                time: ["WED/FRI: 7 - 9pm", "SAT: 9 - 11am"],
                address: "1651 Adeline St. Oakland, CA "
            },
        ],
        headInstructor: "Court Tanouye",
        contactName: "Sylvette Orlianges",
        contactEmail: "sylvette_jiun@yahoo.com",
        website: "http://www.oaklandkendo.com/"
    },
    {
        key: 5,
        name: "Palo Alto Kendo Dojo",
        locations: [
            {
                key: 0,
                name: "Palo Alto Buddhist Temple",
                time: ["WED: 7 - 9pm"], 
                address: "2751 Louis Rd. Palo Alto, CA"
            },
        ],
        headInstructor: "George Nishiura",
        contactEmail: "info@paloaltokendo.org",
        website: "https://www.paloaltokendo.org/home"
    },
    {
        key: 6,
        name: "Salinas Kendo Dojo",
        locations: [
            {
                key: 0,
                name: "YMCA of the Monterey Peninsula",
                time: ["WED: 7 - 8:30pm"],
                address: "600 Camino El Estero, Monterey, CA" 
            },
            {
                key: 1,
                name: "Salinas Buddhist Temple",
                time: ["MON: 6:30 - 8:30pm", "THU: 6 - 8pm"],
                address: "14 California St. Salinas, CA"
            },
        ],
        headInstructor: "Jimmy Eitoku",
        contactName: "Jimmy Eitoku",
        contactEmail: "salinasmontereykendo@gmail.com",
        website: "http://salinaskendo.org/"
    },
    {
        key: 7,
        name: "San Fransisco Kendo Dojo",
        locations: [
            {
                key: 0,
                name: "Buddhist Church Of San Francisco",
                time: ["MON: 7 - 9pm"], 
                address: "1881 Pine St. San Francisco, CA"
            },
            {
                key: 1,
                name: "Japanese Culture Center of Northern California",
                time: ["THU: 7 - 9pm"], 
                address: " 1840 Sutter St. San Francisco, CA" 
            },
        ],
        headInstructor: "Eunice Chan",
        contactName: "Shawn Miller",
        contactEmail: "info@sfkendo.org",
        website: "http://sanfranciscokendo.org"
    },
    {
        key: 8,
        name: "San Jose Kendo Dojo",
        locations: [
            {
                key: 0,
                name: "Nichiren Buddhist Temple",
                time: ["THU: 7 - 8:30pm", "FRI: 7 - 9:30pm"],
                address: "3570 Mona Way, San Jose, CA" 
            },
            {
                key: 1,
                name: "San Jose Buddhist Church",
                time: ["TUE: 7 - 9:30pm"], 
                address: "640 N. Fifth St. San Jose, CA"
            },
        ],
        headInstructor: "Dale Hatakeyama",
        contactName: "Chang Park",
        contactEmail: "sanjosekendo@gmail.com",
        website: "http://sjkendo.com/"
    },
    {
        key: 9,
        name: "San Jose State University Kendo Dojo",
        locations: [
            {
                key: 0,
                name: "Spartan Complex Building (SPX room 178)",
                time: ["TUE: 7:30 - 10pm"], 
                address: "State University, San Jose, CA 95112"
            },
        ],
        headInstructor: "Temujin Lowe",
        contactName: "Andres Rodriguez",
        contactEmail: "a.rodriguez1538@gmail.com",
        website: "https://sjsukn.weebly.com"
    },
    {
        key: 10,
        name: "San Mateo Kendo Dojo",
        locations: [
            {
                key: 0,
                name: "San Mateo King Center",
                time: ["TUE: 6 - 8:45pm"], 
                address: "725 Monte Diablo Avenue San Mateo, CA 94401"
            },
            {
                key: 1,
                name: "Foster City Recreation Center",
                time: ["SAT: 2:30 - 5pm"], 
                address: "650 Shell Blvd. Foster City, CA 94404"
            },
        ],
        headInstructor: "Masaru Ogihara",
        contactName: "Jean Tessier",
        contactEmail: "jean@sanmateokendo.org",
        website: "http://www.sanmateokendo.org/"
    },
]

export {dojos, type Dojo}