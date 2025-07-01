
const callouts = [
    {
        id: 1,
        name: 'Lead Frontend Developer',
        description: ' INNOX is a comprehensive Enterprise Resource Planning (ERP) system designed to optimize industrial operations by integrating multiple business functions into a unified platform. The system provides real-time insights, process automation, and data-driven decision-making to enhance efficiency across various industries.',
        imageSrc: 'https://via.placeholder.com/600x400',
        imageAlt: 'Frontend Image',
        href: '#',
        demoHref: '#',
        githubHref: 'https://github.com/Lyondealpha-hub',
        experience: [
            "Led frontend development using React, TypeScript, Ant Design, DevExtreme, and Tailwind CSS",
            "Built modular architecture for seamless ERP subsystem integration",
            "Optimized performance with lazy loading, code splitting, Redux thunks, and API caching",
            "Implemented state management using custom Hooks and Zustand",
            "Developed secure RBAC-based authentication across modules",
            "Mentored 10+ developers through code reviews and pair programming",
            "Enforced clean architecture and best coding practices",
            "Collaborated cross-functionally in Agile sprints with backend, UI/UX, and PM teams"
        ]
    },
    {
        id: 2,
        name: 'Backend Developer',
        description: ' Developed a Courier Management System to streamline the delivery of resources from higher authorities to various schools. The system optimized logistics, tracking, and allocation, ensuring efficient distribution. Additionally, I built a USSD-based interaction system, allowing users without smartphones to access and operate the system via USSD commands',
        imageSrc: 'https://via.placeholder.com/600x400',
        imageAlt: 'Backend Development',
        href: '#',
        demoHref: '#',
        githubHref: 'https://github.com/Lyondealpha-hub',
        experience: [
            'Designed and implemented the backend architecture using Golang (Fiber), Clean Architecture, and Ent ORM.',
            'Developed RESTful APIs for managing deliveries, tracking shipments, and allocating resources.',
            'Built a USSD-based interface to enable non-smartphone users to interact with the system.',
            'Optimized database queries for performance and scalability.',
            'Ensured secure and seamless communication between different system components.',
            'Collaborated with frontend engineers to integrate API functionalities.'
        ],
    },
    {
        id: 3,
        name: 'FullStack Developer',
        description: 'Developed a School ERP System to streamline and automate academic operations from higher authorities (school management and regulators) down to individual schools, staff, and students. The system integrates Student Information System (SIS), Learning Management System (LMS), and Computer-Based Testing (CBT) modules, covering all aspects of school administration, online learning, and assessments. Designed with a multitenant architecture, enabling multiple institutions to operate independently within the same system',
        imageSrc: 'https://via.placeholder.com/600x400',
        imageAlt: 'Backend Development',
        href: '#',
        demoHref: '#',
        githubHref: 'https://github.com/Lyondealpha-hub',
        experience: [
            'Developed and maintained both frontend and backend components using Next.js, TypeScript, Ant Design, and Golang (Fiber).',
            'Designed and implemented a multi-tenant architecture to support multiple schools within the platform.',
            'Built core features such as Class Management, Online Exams & Grading, and Student-Teacher Interactions.',
            'Developed scalable RESTful APIs using Golang (Fiber) and Ent ORM for student records, course management, and grading.',
            'Integrated real-time notifications and messaging for seamless communication.',
            'Optimized PostgreSQL queries and schema for multi-tenant performance.',
            'Ensured role-based access control (RBAC) for Admins, Teachers, and Students.',
            'Collaborated with UI/UX designers and developers to build an intuitive and responsive interface.'
        ],
    },
    //   {
    //     id: 3,
    //     name: 'Full-Stack Developer',
    //     description: 'Delivering complete end-to-end solutions across the frontend and backend.',
    //     imageSrc: 'https://via.placeholder.com/600x400',
    //     imageAlt: 'Full-Stack Development',
    //     href: '#',
    //     demoHref: 'https://bytewave-inc-git-ahmed-lyondealpha-hubs-projects.vercel.app/',
    //     githubHref: 'https://github.com/Lyondealpha-hub',
    //     experience: [
    //       'Delivered full-stack solutions for ERP systems using Next.js, Golang, and Ent ORM.',
    //       'Collaborated across teams in Agile sprints from requirement gathering to deployment.',
    //       'Designed multi-tenant SaaS platforms supporting scalable school and business operations.',
    //       'Integrated AI (LLMs) for decision-making and chatbot features within business platforms.',
    //       'Ensured backend/frontend synergy through consistent API integration and system design.'
    //     ]
    //   }
]

const DemoComponent = () => {
    return (
        <div className="relative text-blue-gray-400">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div id="stroke-text" className="flex pt-5 text-3xl justify-center items-center font-bold tracking-tight text-white sm:text-4xl drop-shadow-lg">
                    My <span className="text-purple-600 px-2"> Skills & Expertise</span>
                </div>

                <div className="mx-auto max-w-2xl py-16 sm:py-20 lg:max-w-none lg:py-10">
                    <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.id} className="group py-5 perspective">
                                <div className="relative w-full h-[500px] border border-purple-600 rounded-xl shadow-lg duration-1000 preserve-3d group-hover:my-rotate-y-180">

                                    {/* FRONT */}
                                    <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-gray-900 text-white">
                                        <div className="h-2/5 flex items-center justify-center bg-gradient-to-br from-purple-700 to-indigo-800">
                                            {/* <Image src={callout.imageSrc} alt={callout.imageAlt} className="h-full w-full object-cover object-center" /> */}
                                            <p className="text-xl font-semibold">Project Image</p>
                                        </div>
                                        <div className="p-4 flex flex-col gap-3">
                                            <h3 className="text-lg font-bold">{callout.name}</h3>
                                            <p className="text-sm text-gray-300">{callout.description}</p>

                                        </div>
                                    </div>

                                    {/* BACK */}
                                    <div className="absolute inset-0 backface-hidden my-rotate-y-180 bg-gray-800 text-white rounded-xl p-4 flex flex-col">
                                        <h4 className="text-xl font-bold mb-3 text-center">Experience Gained</h4>

                                        <div className="flex-1 overflow-y-auto px-4 pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                                            <ul className="list-disc text-sm text-gray-300 space-y-1">
                                                {callout.experience?.map((exp, index) => (
                                                    <li key={index}>{exp}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex justify-center gap-3 mt-4 shrink-0">
                                            <a href={callout.githubHref} target="_blank" rel="noopener noreferrer">
                                                <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded-md text-sm">
                                                    GitHub
                                                </button>
                                            </a>
                                            <a href={callout.demoHref} target="_blank" rel="noopener noreferrer">
                                                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded-md text-sm">
                                                    Demo
                                                </button>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemoComponent
