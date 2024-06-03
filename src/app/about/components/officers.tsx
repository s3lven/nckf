export interface OfficerType {
    readonly key: number,
    readonly name: string,
    readonly dojo: string,
    readonly title?: string
}

const officers: OfficerType[] = [
    {
        key: 0,
        name: "Court Tanouye",
        dojo: "Oakland",
        title: "President",
    },
    {
        key: 1,
        name: "Shawn Miller",
        dojo: "San Francicso",
        title: "1st Vice President",
    },
    {
        key: 2,
        name: "Sean Choi",
        dojo: "Mountain View",
        title: "2nd Vice President",
    },
    {
        key: 3,
        name: "Hiro Ichimura",
        dojo: "HSSK",
        title: "3rd Vice President",
    },
    {
        key: 4,
        name: "Barden Shimbo",
        dojo: "Palo Alto",
        title: "Executive Secretary",
    },
    {
        key: 5,
        name: "Akiyo Kawamura",
        dojo: "Palo Alto",
        title: "Recorder",
    },
    {
        key: 6,
        name: "Julie Zhu",
        dojo: "HSSK",
        title: "Recording Secretary",
    },
    {
        key: 7,
        name: "Shawn Miller",
        dojo: "San Francisco",
        title: "Historian",
    },
    {
        key: 8,
        name: "Doreen Mita-Juanitas",
        dojo: "Palo Alto",
        title: "Treasurer",
    },
    {
        key: 9,
        name: "Hitoshi Tanabe",
        dojo: "Salinas",
        title: "Auditor",
    },
    {
        key: 10,
        name: "John Konopka",
        dojo: "San Mateo",
        title: "Public Relations",
    },
]

const boardMembers: OfficerType[] = [
    {
        key: 0,
        name: "Dorthee Liebscner",
        dojo: "Berkeley",
    },
    {
        key: 1,
        name: "Jessie Park",
        dojo: "Berkeley",
    },
    {
        key: 2,
        name: "Sean Choi",
        dojo: "Mountain View",
    },
    {
        key: 3,
        name: "Yi Wang",
        dojo: "Mountain View",
    },
    {
        key: 4,
        name: "Court Tanouye",
        dojo: "Oakland",
    },
    {
        key: 5,
        name: "Wayne Kosaka",
        dojo: "Oakland",
    },
    {
        key: 6,
        name: "Takuya Uchida",
        dojo: "Oakland",
    },
    {
        key: 7,
        name: "Frank Lin",
        dojo: "Palo Alto",
    },
    {
        key: 8,
        name: "Akiyo Kawamura",
        dojo: "Palo Alto",
    },
    {
        key: 9,
        name: "Ryo Ichimura",
        dojo: "HSSK",
    },
    {
        key: 10,
        name: "Hiro Ichimura",
        dojo: "HSSK",
    },
    {
        key: 11,
        name: "Julie Zhu",
        dojo: "HSSK",
    },
    {
        key: 12,
        name: "Glenn Harada",
        dojo: "Sacramento",
    },
    {
        key: 13,
        name: "Dennis Martinez",
        dojo: "Sacramento",
    },
    {
        key: 14,
        name: "Shawn Miller",
        dojo: "San Francisco",
    },
    {
        key: 15,
        name: "Miyun Kang",
        dojo: "San Francisco",
    },
    {
        key: 16,
        name: "Rinji Sugino",
        dojo: "San Jose",
    },
    {
        key: 17,
        name: "Dale Hatakeyama",
        dojo: "San Jose",
    },
    {
        key: 18,
        name: "Takeshi Tokunaga",
        dojo: "San Jose",
    },
    {
        key: 19,
        name: "Eduardo Jiminez",
        dojo: "San Jose State University",
    },
    {
        key: 20,
        name: "Andres Rodriquez",
        dojo: "San Jose State Univeristy",
    },
    {
        key: 21,
        name: "Jean Tessier",
        dojo: "San Mateo",
    },
    {
        key: 22,
        name: "John Satoru Konopka",
        dojo: "San Mateo",
    },
]

const advisors: OfficerType[] = [
    {
        key: 0,
        name: "Charles Tanaka",
        dojo: "San Jose",
    },
    {
        key: 1,
        name: "Masaru Ogihara",
        dojo: "San Mateo",
    },
    {
        key: 2,
        name: "Georga Nishiura",
        dojo: "Palo Alto",
    },
    {
        key: 3,
        name: "Walter Hashimoto",
        dojo: "Palo Alto",
    },
]

export {officers, boardMembers, advisors}