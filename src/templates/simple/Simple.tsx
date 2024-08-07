import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { ResumeInterface } from "../../types";
import { Section } from "./components/Section";
import { ContactItem } from "./components/ContactItem";
const Simple: React.FC<ResumeInterface> = ({data}) => {
    return (
        <div className="resume bg-white mx-auto flex flex-row">
            <div className="resume__left bg-zinc-200 p-6 flex flex-col gap-2">
                <h1 className="text-4xl uppercase tracking-wider">{data.firstName}</h1>
                <h1 className="text-4xl uppercase tracking-wider">{data.lastName}</h1>
                <h2 className="text-lg uppercase tracking-wide text-wrap font-thin">{data.title}</h2>
                <Section isDark={true} title={"contact"}>
                    <ul className="flex flex-col gap-3">
                        <ContactItem value={data.contact.phone} icon={faPhone} />
                        <ContactItem value={data.contact.mail} icon={faEnvelope} />
                        <ContactItem value={data.contact.location} icon={faLocationDot} />
                    </ul>
                </Section>
                <Section isDark={true} title={"skills"}>
                    <ul className="flex flex-col list-disc ml-8 gap-2">
                        {data.skills.map((s, i) => {
                            return (
                                <li className="font-ubuntu" key={i}>{s}</li>
                            )
                        })}
                    </ul>
                </Section>
                <Section isDark={true} title={"languages"}>
                    <ul className="flex flex-col list-disc ml-8 gap-1">
                        {data.languages.map((l,i) => {
                            return (
                                <li key={i}>
                                    <p className="capitalize font-bold mb-0 pb-0">{l.lang}</p>
                                    <p className="capitalize text-sm font-light">{l.level}</p>
                                </li>
                            )
                        })}
                    </ul>
                </Section>
                <Section isDark={true} title={"entertainment"}>
                    <ul className="flex flex-row ml-8 gap-2">
                        {data.entertainments.map((e, i) => {
                            return (
                                <li key={i}><p>{e}</p></li>
                            )
                        })}
                    </ul>
                </Section>
            </div>
            <div className="resume__right bg-white p-6 flex flex-col gap-2 w-full">
                <Section isDark={false} title={"professional summary"}>
                    <p>{data.summary}</p>
                </Section>
                <Section isDark={false} title={"experience"}>
                    <ul className="flex flex-col gap-4">
                        {data.jobs.map((j, i) => {
                            return (
                                <li key={i}>
                                <p className="text-zinc-500">{j.date}</p>
                                <h3 className="text-base font-bold">{j.title}</h3>
                                <p className="capitalize">{j.location}</p>
                                <ul className="list-disc ml-4">
                                    {
                                        j.experiences.map((e, index) => {
                                            return (
                                                <li key={index + 100}>{e}</li>
                                            )
                                        })
                                    }
                                </ul>
                                </li>
                            )
                        })}
                    </ul>
                </Section>
                <Section isDark={false} title={"educations"}>
                    <ul className="flex flex-col gap-4">
                        {data.educations.map((e,i) => {
                            return (
                                <li key={i}>
                                    <p className="text-zinc-500">{e.date}</p>
                                    <h3 className="text-base font-bold">{e.title}</h3>
                                    <p className="capitalize">{e.university}</p>
                                </li>
                            )
                        })}
                    </ul>
                </Section>
            </div>
        </div>
    )
}

export default Simple;