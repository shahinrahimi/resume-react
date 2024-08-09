export type ResumeData = {
    firstName : string,
    lastName: string,
    title: string,
    contact : {
        phone : string,
        mail: string,
        location : string,
    }
    skills : {
        title: string,
        level: number,
    }[],
    techStacks : string[],
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
        {
            title : "Decision-Making",
            level : 3.5
        },
        {
            title: "Problem-Solving",
            level: 4
        },
        {
            title: "learning new tech",
            level: 5
        },
        {
            title: "debugging",
            level: 3
        },
        {
            title: "testing",
            level: 3
        }
    ],
    techStacks: ["Go", "Python", "JS", "TS", "R", "React", "HTML", "CSS", "React Native", "Node", "Linux", "MongoDB", "SQL", "Docker"],
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
    summary : "Seasoned Backend and Full Stack Developer with over 5 years of experience in building and deploying scalable web applications and APIs. Proficient in Python, Go, and JavaScript, with a strong focus on developing secure, efficient, and maintainable code. Experienced in working with both frontend and backend technologies, creating full-stack solutions that integrate seamlessly across the stack. Adept at problem-solving, with a deep understanding of data structures, algorithms, and cloud services. Passionate about learning new technologies and delivering high-quality software that meets business needs.",
    jobs: [
        {
            date: "January 2024 - June 2024",
            title: "Front End developer",
            location: "Zeepay, Istanbul, turkey",
            experiences: [
                "Refactored, built, and deployed front-end applications using React and React Native, ensuring seamless integration and high performance across platforms.",
                "Developed a custom debugger for API calls within mobile applications, enhancing communication with a secure, encrypted PHP backend."
            ]
        },
        {
            date: "January 2019 - June 2023",
            title: "Self-Employed",
            location: "Freelancer.com, Istanbul, Turkey",
            experiences: [
                "Designed, developed, and deployed MERN stack applications using modern TypeScript frameworks, Redux, React Query, and Tailwind CSS, resulting in highly responsive and maintainable solutions.",
                "Built a custom admin panel utilizing Node.js and React, providing intuitive management tools tailored to client needs.",
                "Created a series of standalone applications using Python and PyQt5, delivering efficient and user-friendly desktop solutions.",
                "Developed a game prototype using Python and Tkinter, implementing recursive algorithms to create complex, engaging gameplay mechanics.",
                "Engineered robust RESTful applications with Golang, incorporating advanced authentication and authorization protocols for secure user interactions.",
                "Developed full-stack applications with Go, Templ, SQLite, and Tailwind CSS, achieving a balance of performance and aesthetics.",
                "Built full-stack applications with Go as the backend language and React for the frontend, enabling scalable and responsive user experiences.",
                "Developed various scraping tools and bots across multiple languages, including Go, Python, and VBA, automating data collection and enhancing operational efficiency."
            ]
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