import React from "react";

import "./simple.css"
const Simple = () => {
    return (
        <div className="resume bg-white mx-auto flex flex-row">
            <div className="resume__left bg-zinc-200 p-6 flex flex-col gap-2">
                <h1 className="text-4xl uppercase tracking-wider">shahin</h1>
                <h1 className="text-4xl uppercase tracking-wider">rahimi</h1>
                <h2 className="text-lg uppercase tracking-wide text-wrap font-thin">FullStack Web developer</h2>
                <section className="mb-4">
                    <h2 className="text-lg uppercase mt-2 border-b-4 border-white pb-2 mb-4">contact</h2>
                    <ul className="flex flex-col gap-3">
                        <li className="flex flex-row gap-2 items-center">
                            <i className="h-5 w-5 bg-black rounded-full after:">a</i>
                            <p>5427240988</p>
                        </li>
                        <li className="flex flex-row gap-2 items-center">
                            <i className="h-5 w-5 bg-black rounded-full after:">a</i>
                            <p>sh.rahimi.dev@gmail.com</p>
                        </li>
                        <li className="flex flex-row gap-2 items-center">
                            <i className="h-5 w-5 bg-black rounded-full after:">a</i>
                            <p>Istanbul, Turkey</p>
                        </li>
                    </ul>
                </section>
                <section className="mb-4">
                    <h2 className="text-lg uppercase mt-2 border-b-4 border-white pb-2 mb-4">skills</h2>
                    <ul className="flex flex-col list-disc ml-8 gap-2">
                        <li>Problem-Solving</li>
                        <li>Decision-Making</li>
                        <li>React, React Native</li>
                        <li>HTML,CSS,Javascript</li>
                        <li>Node.js</li>
                        <li>Mongodb</li>
                        <li>GO</li>
                        <li>Python</li>
                        <li>R</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="text-lg uppercase mt-2 border-b-4 border-white pb-2 mb-4">languages</h2>
                    <ul>
                        <li>English</li>
                        <li>Turkish</li>
                        <li>Persion</li>
                    </ul>
                </section>

            </div>
            <div className="resume__right bg-white p-6 flex flex-col gap-2">
                <section className="mb-4">
                    <h2 className="text-lg uppercase mt-2 border-b-4 border-zinc-200 pb-2 mb-4">profossional summary</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci beatae quasi, maxime deleniti
                        molestiae similique enim quibusdam excepturi odit accusantium, deserunt aspernatur repellat nihil
                        voluptatibus amet nemo eveniet dolor nisi explicabo voluptatem commodi fugiat. Similique dolorum
                        deleniti vitae possimus! Soluta, sunt nemo et quod veritatis repudiandae ea quibusdam sint
                        doloremque impedit error! Quae aliquid hic, numquam illo architecto assumenda ipsa vitae inventore
                        debitis perferendis doloribus voluptas minus unde laudantium impedit fugiat! Dolor, voluptatibus
                        exercitationem ad perspiciatis nisi aliquid minus dolorem quibusdam doloremque soluta maxime officia
                        blanditiis accusantium mollitia reiciendis velit ea sed animi voluptate voluptatum, ipsa voluptatem
                        doloribus quia!</p>
                </section>
                <section className="mb-4">
                    <h2 className="text-lg uppercase mt-2 border-b-4 border-zinc-200 pb-2 mb-4">experience</h2>
                    <ul>
                        <li>
                            <p>January 2024 - June 2024</p>
                            <h3>Front End Developer</h3>
                            <p>Zeepay, Istanbul, Istanbul</p>
                            <ul>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nulla?</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nulla?</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nulla?</li>
                            </ul>
                        </li>
                        <li>
                            <p>January 2019 - June 2023</p>
                            <h3>Back End Developer</h3>
                            <p>Freelancer, Istanbul, Istanbul</p>
                            <ul>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nulla?</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nulla?</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nulla?</li>
                            </ul>
                        </li>
                    </ul>

                </section>
                <section className="mb-4">
                    <h2 className="text-lg uppercase mt-2 border-b-4 border-zinc-200 pb-2 mb-4">education</h2>
                    <ul>
                        <li>
                            <p>January 2018</p>
                            <h3>Master of Science (M.S.) in Civil Engineering</h3>
                            <p>Tarbiat Modares, Tehran</p>
                        </li>
                        <li>
                            <p>January 2013</p>
                            <h3>Bachelor of Science (B.S.) in Civil Engineering</h3>
                            <p>Shahid Beheshti, Tehran</p>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Simple;