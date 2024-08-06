import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { ResumeInterface } from "../../types";

const Simple: React.FC<ResumeInterface> = ({data}) => {
    return (
        <div className="resume bg-white mx-auto flex flex-row">
            <div className="resume__left bg-zinc-200 p-6 flex flex-col gap-2">
                <h1 className="text-4xl uppercase tracking-wider">{data.firstName}</h1>
                <h1 className="text-4xl uppercase tracking-wider">{data.lastName}</h1>
                <h2 className="text-lg uppercase tracking-wide text-wrap font-thin">{data.title}</h2>
                <section className="mb-4">
                    <h2 className="text-lg uppercase mt-2 border-b-4 border-white pb-2 mb-4">contact</h2>
                    <ul className="flex flex-col gap-3">
                        <li className="flex flex-row gap-2 items-center">
                            <div className="bg-black h-5 w-5 grid place-content-center rounded-full">
                                <FontAwesomeIcon color="#fff" icon={faPhone} width={8} height={8} />
                            </div>
                            <p>{data.contact.phone}</p>
                        </li>
                        <li className="flex flex-row gap-2 items-center">
                            <div className="bg-black h-5 w-5 grid place-content-center rounded-full">
                                <FontAwesomeIcon color="#fff" icon={faEnvelope} width={8} height={8} />
                            </div>
                            <p>{data.contact.mail}</p>
                        </li>
                        <li style={{ flex: "flex", flexDirection: "row", justifyItems: "center" }} className="flex flex-row gap-2 items-center">
                            <div className="bg-black h-5 w-5 grid place-content-center rounded-full">
                                <FontAwesomeIcon color="#fff" icon={faLocationDot} width={8} height={8} />
                            </div>
                            <p>{data.contact.location}</p>
                        </li>
                    </ul>
                </section>
                <section className="mb-4">
                    <h2 className="text-lg uppercase mt-2 border-b-4 border-white pb-2 mb-4">skills</h2>
                    <ul className="flex flex-col list-disc ml-8 gap-2">
                        {data.skills.map((s, i) => {
                            return (
                                <li className="font-ubuntu" key={i}>{s}</li>
                            )
                        })}
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="text-lg uppercase mt-2 border-b-4 border-white pb-2 mb-4">languages</h2>
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
                </section>
                <section className="mb-4">
                    <h2 className="text-lg uppercase mt-2 border-b-4 border-white pb-2 mb-4">entertainments</h2>
                    <ul className="flex flex-row ml-8 gap-2">
                        {data.entertainments.map((e, i) => {
                            return (
                                <li key={i}><p>{e}</p></li>
                            )
                        })}
                    </ul>
                </section>

            </div>
            <div className="resume__right bg-white p-6 flex flex-col gap-2">
                <section className="mb-4">
                    <h2 className="text-lg uppercase mt-2 border-b-4 border-zinc-200 pb-2 mb-4">profossional summary</h2>
                    <p>{data.summary}</p>
                </section>
                <section className="mb-4">
                    <h2 className="text-lg uppercase mt-2 border-b-4 border-zinc-200 pb-2 mb-4">experience</h2>
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
                </section>
                <section className="mb-4">
                    <h2 className="text-lg uppercase mt-2 border-b-4 border-zinc-200 pb-2 mb-4">education</h2>
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
                </section>

            </div>
        </div>
    )
}

export default Simple;