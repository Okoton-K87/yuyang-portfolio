import React from 'react'
import { words_0 } from '../constants/index.js'
import { words_1 } from '../constants/index.js'
import Button from "../components/Button.jsx";
import HeroExperience from "../components/Models/HeroModels/HeroExperience.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
const BASE = import.meta.env.BASE_URL;

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".hero-text h1",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
        );
    });

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src={`${BASE}images/bg.png`} alt="background" />
            </div>

            <div className="hero-layout">
                {/* LEFT: HERO CONTENT */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Transforming
                                <span className="slide">
                                    <span className="wrapper">
                                    {words_0.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                        <img
                                            src={word.imgPath}
                                            alt={word.text}
                                            className="xl:size-12 md:size-10 size-8 md:p-2 p-2 rounded-xl bg-white-50 shadow-sm"
                                        />
                                        <span>{word.text}</span>
                                      </span>
                                    ))}
                                  </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>Delivering Impactful Results</h1>
                            <h1>
                                through
                                <span className="slide">
                                    <span className="wrapper">
                                    {words_1.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                        <img
                                            src={word.imgPath}
                                            alt={word.text}
                                            className="xl:size-12 md:size-10 size-8 md:p-2 p-2 rounded-xl bg-white-50 shadow-sm"
                                        />
                                        <span>{word.text}</span>
                                      </span>
                                    ))}
                                  </span>
                                </span>
                            </h1>
                        </div>

                        <div className="max-w-xl">
                            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                                I'm Yuyang Luo — a California-based developer and IT support specialist passionate about solving problems, supporting users, and improving technical systems.
                            </p>
                        </div>

                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="See my Work"
                        />

                    </div>
                </header>

                {/* RIGHT: 3D MODEL */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>

            <AnimatedCounter />
        </section>
    )
}

export default Hero
