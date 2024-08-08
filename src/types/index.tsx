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
    techStacks: ["Go", "Python", "Javascript", "Typescript", "React.js", "React Native", "Node.js", "HTML", "CSS", "linux", "MongoDB", "SQL", "Docker", "R"],
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
            location: "istanbul, turkey",
            experiences: [
                "Lead frontend development using React Native and React, creating dynamic user interfaces for mobile and web platforms.",
                "Collaborate with cross-functional teams to deliver features, ensuring optimal user experience and performance."
            ]
        },
        {
            date: "January 2019 - June 2023",
            title: "Self-Employed",
            location: "istanbul, turkey",
            experiences: [
                "Engineered and secured APIs using Go, implementing authentication, authorization, and rate-limiting features with libraries like Mux and Echo.",
                "Designed and deployed Telegram bots using Go, ensuring reliability and performance.",
                "Built full-stack applications using the GOT stack (Go, Templ, Tailwind CSS, SQLite3), including user authentication, CRUD operations, and responsive design.",
                "Designed and developed full-stack applications using the MERN stack (MongoDB, Express.js, React, Node.js), including user management systems, dashboards, admin panel.",
                "Developed data analysis tools using libraries like NumPy, Pandas, Matplotlib, and SciPy to extract and visualize data.",
                "Built and deployed GUI applications using Tkinter and PyQt5, delivering intuitive user experiences.",
                "Created and maintained web scraping tools using Selenium, BeautifulSoup, and Scrapy, automating data collection tasks.",
                "Developed Shiny applications and dynamic reports using R and Markdown, providing interactive data visualizations and insights for clients."
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