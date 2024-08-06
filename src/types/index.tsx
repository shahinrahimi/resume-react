export type ResumeData = {
    firstName : string,
    lastName: string,
    title: string,
    contact : {
        phone : string,
        mail: string,
        location : string,
    }
    skills : string[],
    languages: {
        lang: string,
        level: string,    
    }[],
    entertainments: string[],
    summary : string,
    jobs : {
        date: string,
        title: string,
        location: string,
        experiences: string[],
    }[],
    educations: {
        date: string,
        title: string,
        university: string
    }[],
}

export interface ResumeInterface {
    data : ResumeData
}

export const data: ResumeData = {
    firstName: "shahin",
    lastName: "rahimi",
    title: "FullStack Web developer",
    contact: {
        phone: "989125602074",
        mail: "sh.rahimi.dev@gmail.com",
        location: "istanbul, turkey"
    },
    skills: [
        "Go", 
        "Python", 
        "R", 
        "HTML/CSS/Javascript", 
        "Typescript",
        "JQuery",
        "React.js",
        "React Native",
        "Node.js",
        "MongoDB",
        "postgresql",
        "Problem-Solving",
        "Decision-Making"
    ],
    languages: [
        {
            lang: "english",
            level: "conversational"
        },
        {
            lang: "turkish",
            level: "conversational"
        },
        {
            lang: "farsi",
            level: "native"
        },
    ],
    entertainments: ['tracking', 'tennis', 'camping'],
    summary : "this is summary",
    jobs: [
        {
            date: "January 2024 - June 2024",
            title: "Front End developer",
            location: "istanbul, turkey",
            experiences: ["item1", "item2", "items"]
        },
        {
            date: "January 2019 - June 2023",
            title: "Back End developer",
            location: "istanbul, turkey",
            experiences: ["item1",  "item2", "item3"]
        }
    ],
    educations: [
        {
            date: "January 2018",
            title: "Master of Science (M.S.) in Civil Engineering",
            university: "Tarbiat Modares, Tehran"
        },
        {
            date: "January 2013",
            title: "Bachelor of Science (B.S.) in Civil Engineering",
            university: "Shahid Beheshti, Tehran"
        }
    ],
}