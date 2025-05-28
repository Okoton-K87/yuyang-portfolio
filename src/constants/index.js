const BASE = import.meta.env.BASE_URL;
const withBase = (path) => `${BASE}${path.replace(/^\//, '')}`;

const navLinks = [
    {
        name: "Projects",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    // {
    //     name: "Testimonials",
    //     link: "#testimonials",
    // },
];

const words_0 = [
    { text: "Ideas", imgPath: withBase("/images/HeroRollingIcons/lightbulb.svg") },
    { text: "Concepts", imgPath: withBase("/images/HeroRollingIcons/brain-circuit.svg") },
    { text: "Designs", imgPath: withBase("/images/HeroRollingIcons/pencil-line.svg") },
    { text: "Prototypes", imgPath: withBase("/images/HeroRollingIcons/flask-round.svg") },
    { text: "Ideas", imgPath: withBase("/images/HeroRollingIcons/lightbulb.svg") },
    { text: "Concepts", imgPath: withBase("/images/HeroRollingIcons/brain-circuit.svg") },
    { text: "Designs", imgPath: withBase("/images/HeroRollingIcons/pencil-line.svg") },
    { text: "Prototypes", imgPath: withBase("/images/HeroRollingIcons/flask-round.svg") },
];

const words_1 = [
    { text: "Code", imgPath: withBase("/images/HeroRollingIcons/code-xml.svg") },
    { text: "Systems", imgPath: withBase("/images/HeroRollingIcons/server.svg") },
    { text: "Tools", imgPath: withBase("/images/HeroRollingIcons/wrench.svg") },
    { text: "Frontline Support", imgPath: withBase("/images/HeroRollingIcons/headset.svg") },
    { text: "Code", imgPath: withBase("/images/HeroRollingIcons/code-xml.svg") },
    { text: "Systems", imgPath: withBase("/images/HeroRollingIcons/server.svg") },
    { text: "Tools", imgPath: withBase("/images/HeroRollingIcons/wrench.svg") },
    { text: "Frontline Support", imgPath: withBase("/images/HeroRollingIcons/headset.svg") },
];

const counterItems = [
    { value: 2000, suffix: "+", label: "IT Support Provided to UCSC Faculty & Staff" },
    { value: 800, suffix: "+", label: "ServiceNow Tickets & Device Requests Resolved" },
    { value: 40, suffix: "+", label: "Technical & Game Projects Completed" },
    { value: 1, suffix: "", label: "Published Research Paper Co-Authored" },
];

const logoIconsList = [
    { imgPath: withBase("/images/my_logos/ITS_Banner.png") },
    { imgPath: withBase("/images/my_logos/Unity.png") },
    { imgPath: withBase("/images/my_logos/SlugGamingBanner.png") },
    { imgPath: withBase("/images/my_logos/UCSC_1.png") },
    { imgPath: withBase("/images/my_logos/FDG25.png") },
    { imgPath: withBase("/images/my_logos/UCSC.png") },
    { imgPath: withBase("/images/my_logos/ACM.png") },
    { imgPath: withBase("/images/my_logos/UCSC_1.png") },
    { imgPath: withBase("/images/my_logos/PA.png") },
    { imgPath: withBase("/images/my_logos/UCSC.png") },
    { imgPath: withBase("/images/my_logos/Photon.png") },
];

const abilities = [
    {
        imgPath: withBase("/images/seo.png"),
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: withBase("/images/chat.png"),
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: withBase("/images/time.png"),
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    { name: "React Developer", imgPath: withBase("/images/logos/react.png") },
    { name: "Python Developer", imgPath: withBase("/images/logos/python.svg") },
    { name: "Backend Developer", imgPath: withBase("/images/logos/node.png") },
    { name: "Interactive Developer", imgPath: withBase("/images/logos/three.png") },
    { name: "Project Manager", imgPath: withBase("/images/logos/git.svg") },
];

const techStackIcons = [
    {
        name: "Unity Developer",
        modelPath: withBase("/models/unity_logo_3d_mesh.glb"),
        scale: 1.3,
        rotation: [Math.PI / 4, -Math.PI / 4, 0],
    },
    {
        name: "Python Developer",
        modelPath: withBase("/models/python-transformed.glb"),
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: withBase("/models/node-transformed.glb"),
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: withBase("/models/three.js-transformed.glb"),
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: withBase("/models/git-svg-transformed.glb"),
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "Roman consistently delivered excellent IT support at UCSC, streamlining onboarding and resolving cross-platform technical issues with care and precision. His communication across departments ensured smooth operations.",
        imgPath: withBase("/images/my_exps/ITS_Banner.png"),
        logoPath: withBase("/images/my_exps/ITS_Circle.png"),
        title: "Technical Support Specialist – UCSC ITS",
        date: "September 2023 – Present",
        responsibilities: [
            "Provided IT support for hybrid Mac/Windows users, resolving VPN, imaging, and account provisioning issues using ServiceNow.",
            "Managed hardware inventory, repairs, and firmware updates for workstations and office equipment.",
            "Delivered basic system training and support for G-Suite, Zoom, and Slack to users with varying technical proficiency.",
        ],
    },
    {
        review:
            "Roman played a key role in advancing our research on procedural content generation and large language models. His technical work and academic contributions have been essential to our project's success.",
        imgPath: withBase("/images/my_exps/UCSC_Banner.png"),
        logoPath: withBase("/images/my_exps/UCSC_Circle.png"),
        title: "Procedural Content Generation & LLM Researcher",
        date: "September 2024 – Present",
        responsibilities: [
            "Built interactive map generation tools and datasets in Phaser for testing LLM-driven procedural systems.",
            "Co-authored a peer-reviewed FDG 2025 paper on conversational procedural generation using AI.",
            "Contributed to both codebase development and academic writing for internal documentation and publication.",
        ],
    },
    {
        review:
            "Roman led our Unity multiplayer development with strong technical leadership and problem-solving. His contributions ensured the game's networked systems were stable and production-ready.",
        imgPath: withBase("/images/my_exps/Unity_Banner.png"),
        logoPath: withBase("/images/my_exps/Unity6_Circle.png"),
        title: "Unity Engine Lead – Multiplayer Game Project",
        date: "September 2024 – Present",
        responsibilities: [
            "Led Unity development for a multiplayer FPS launching on Steam, using Photon PUN for networked features.",
            "Implemented real-time systems including lobbies, player synchronization, and VFX-triggered combat interactions.",
            "Managed technical timelines, QA testing, and cross-functional coordination to ensure smooth development.",
        ],
    },
];

const expLogos = [
    { name: "logo1", imgPath: withBase("/images/logo1.png") },
    { name: "logo2", imgPath: withBase("/images/logo2.png") },
    { name: "logo3", imgPath: withBase("/images/logo3.png") },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: withBase("/images/client1.png"),
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: withBase("/images/client3.png"),
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: withBase("/images/client2.png"),
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: withBase("/images/client5.png"),
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: withBase("/images/client4.png"),
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: withBase("/images/client6.png"),
    },
];

const socialImgs = [
    // {
    //     name: "insta",
    //     imgPath: withBase("/images/insta.png"),
    // },
    // {
    //     name: "fb",
    //     imgPath: withBase("/images/fb.png"),
    // },
    // {
    //     name: "x",
    //     imgPath: withBase("/images/x.png"),
    // },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/yuyang-roman-luo/",
        imgPath: withBase("/images/linkedin.png"),
    },
];

export {
    words_0,
    words_1,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
