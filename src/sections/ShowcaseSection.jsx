import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Projects, Prototypes & Research"
                    sub="🎮 My Game Dev & Research Work"
                />
                <div className="showcaselayout mt-20">
                    <div ref={rydeRef} className="first-project-wrapper">
                        <div className="image-wrapper group">
                            <img
                                src="/images/Projects/RoomForOne1.png"
                                alt="Room For One"
                                className="w-full h-full object-cover rounded-xl absolute inset-0"
                            />
                            <a
                                href="https://store.steampowered.com/app/3693260/Room_For_One/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-10 flex items-center justify-center bg-[rgba(0,0,0,0.3)] text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                            >
                                Click to see more
                            </a>
                        </div>

                        <div className="text-content">
                            <h2>
                                Race to the Finish in <span className="italic">Room For One</span> – A Fast-Paced Multiplayer Platformer
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                A competitive online platforming game built in Unity using Photon PUN2.
                                Dash, jump, and outmaneuver other players as you fight for the last available
                                hotel room. Launching on Steam in June 2025.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={libraryRef}>
                            <div className="image-wrapper bg-[#FFEFDB] relative group">
                                <img
                                    src="/images/Projects/Research.png"
                                    alt="PCG Research"
                                    className="w-full h-full object-contain rounded-xl"
                                />
                                <a
                                    href="https://dl.acm.org/doi/10.1145/3723498.3723788"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)] text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-xl"
                                >
                                    Click to see more
                                </a>
                            </div>

                            <h2>LLM-Powered Procedural Generation Research (FDG 2025)</h2>
                            {/*<p className="text-white-50 md:text-xl">*/}
                            {/*    Co-authored and presented at FDG 2025, this project explores how large language models like GPT-4 can be used to generate rule-driven game maps and procedural content through conversational inputs. Built with Phaser and custom dataset tools to test AI understanding of tile-based systems.*/}
                            {/*</p>*/}
                        </div>

                        <div className="project" ref={ycDirectoryRef}>
                            <div className="image-wrapper bg-[#FFE7EB] relative group overflow-hidden">
                                <img
                                    src="/images/Projects/Games.png"
                                    alt="YC Directory App"
                                    className="w-full h-full object-contain rounded-xl"
                                />
                                <a
                                    href="https://roman-luo.itch.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)] text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-xl"
                                >
                                    Click to see more
                                </a>
                            </div>
                            <h2>A collection of small games and prototypes made with Unity and Phaser</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;
