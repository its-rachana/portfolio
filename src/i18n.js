import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            nav: {
                about: 'About',
                experience: 'Experience',
                education: 'Education',
                certifications: 'Certifications',
                skills: 'Skills',
                projects: 'Projects',
                contact: 'Contact',
                letsConnect: "Let's Connect"
            },
            footer: {
                text: 'Software Engineer Portfolio. Built with React & Passion.'
            },
            hero: {
                greeting: "Hi, I'm",
                name: 'Rachana Angara',
                title: 'Full Stack Developer',
                subtitle: 'Building scalable web applications with modern technologies',
                openToWork: 'Open to H1B Sponsorship (F1 Visa)',
                downloadResume: 'Download Resume',
                description: 'Decisive Software Engineer with solid background of success in troubleshooting and resolving complex software challenges. Designs and deploys innovative features to improve performance and functionality. Proactive problem-solver with exceptional critical thinking and collaboration skills.',
                problemSolver: 'Problem Solver'
            },
            experience: {
                title: 'Work Experience',
                subtitle: 'My professional journey and key contributions.',
                items: [
                    {
                        company: 'Thunderbird School of Global Management',
                        location: 'Downtown Phoenix, AZ',
                        role: 'Information Technology Help Desk',
                        period: 'Nov 2024 – May 2026',
                        duration: 'Present',
                        highlights: [
                            { icon: '🎧', text: 'Provided frontline customer service support to students, faculty, and staff, handling inquiries via phone and in person.' },
                            { icon: '📋', text: 'Completed daily operational checklists and prioritized assigned tasks before engaging in downtime activities.' },
                            { icon: '⏱️', text: 'Maintained accurate time reporting in Workday and TAS while adhering to assigned schedules and communication protocols.' },
                            { icon: '🔐', text: 'Handled confidential student and departmental information with discretion, ensuring secure data management and compliance.' },
                            { icon: '💬', text: 'Collaborated with full-time staff and IT administrators, utilizing Slack for shift communication and task coordination.' }
                        ],
                        tags: ['Help Desk', 'Customer Support', 'IT Support', 'Slack', 'Workday']
                    },
                    {
                        company: 'Barclays',
                        location: 'India',
                        role: 'Software Engineer (Full Stack)',
                        period: 'Aug 2021 – Aug 2024',
                        duration: '3 Years',
                        highlights: [
                            { icon: '🚀', text: 'Delivered end-to-end onboarding and support portal features using React.js, Angular, HTML5, CSS3, and JavaScript, backed by Node.js REST APIs. Implemented SSR/ISR, caching, and code-splitting, improving Core Web Vitals (LCP/TTFB) by 20%.' },
                            { icon: '🗄️', text: 'Designed SQL-based data models and API contracts with pagination, validation, and rate-limiting to handle 100,000+ records/day. Wrote unit and end-to-end tests integrated into CI/CD pipelines, reducing production regressions by 40%.' },
                            { icon: '🔍', text: 'Resolved production issues via root-cause analysis and post-mortems, documented runbooks, and collaborated with BA, QA, and product teams in Agile sprints, improving delivery efficiency by 15%.' }
                        ],
                        tags: ['React.js', 'Angular', 'Node.js', 'SQL', 'CI/CD', 'Agile']
                    }
                ]
            },
            education: {
                title: 'Education',
                subtitle: 'My academic background and qualifications.',
                items: [
                    {
                        degree: 'Master of Science',
                        field: 'Software Engineering',
                        school: 'Arizona State University',
                        location: 'Tempe, AZ',
                        period: 'Aug 2024 – May 2026',
                        status: 'Expected',
                        icon: '🎓',
                        color: '#c5a059'
                    },
                    {
                        degree: 'Bachelor of Technology',
                        field: 'Computer Engineering',
                        school: 'Cummins College of Engineering for Women, Pune University',
                        location: 'Pune, India',
                        period: 'Aug 2017 – May 2021',
                        status: 'Completed',
                        icon: '🏛️',
                        color: '#e2c275'
                    }
                ]
            },
            certifications: {
                title: 'Certifications',
                subtitle: 'Professional certifications and achievements.',
                items: [
                    {
                        title: 'Meta Backend Developer',
                        issuer: 'Meta',
                        description: 'Designed, built, and operated large-scale, low-latency services and APIs focused on distributed systems, data modeling, performance, reliability, and privacy-by-design.',
                        icon: '♾️',
                        color: '#0668E1'
                    }
                ]
            },
            skills: {
                title: 'Skills',
                subtitle: 'Technologies and tools I work with.',
                categories: [
                    {
                        title: 'Programming Languages',
                        skills: [
                            { name: 'Java', level: '90%' },
                            { name: 'Python', level: '85%' },
                            { name: 'JavaScript', level: '95%' },
                            { name: 'TypeScript', level: '90%' },
                            { name: 'SQL', level: '88%' }
                        ]
                    },
                    {
                        title: 'Frontend Tech',
                        skills: [
                            { name: 'React.js', level: '95%' },
                            { name: 'Angular', level: '85%' },
                            { name: 'Three.js / WebGL', level: '80%' },
                            { name: 'HTML5 / CSS3', level: '95%' },
                            { name: 'Responsive Web Design', level: '90%' }
                        ]
                    },
                    {
                        title: 'Backend Tech',
                        skills: [
                            { name: 'Node.js', level: '92%' },
                            { name: 'Express.js', level: '90%' },
                            { name: 'Spring Boot', level: '88%' },
                            { name: 'RESTful APIs', level: '95%' },
                            { name: 'Microservices', level: '85%' }
                        ]
                    },
                    {
                        title: 'Cloud & DevOps',
                        skills: [
                            { name: 'MySQL / PostgreSQL', level: '90%' },
                            { name: 'MongoDB', level: '85%' },
                            { name: 'Docker', level: '80%' },
                            { name: 'CI/CD Pipelines', level: '75%' },
                            { name: 'AWS Cloud', level: '70%' }
                        ]
                    }
                ]
            },
            projects: {
                title: 'Projects',
                subtitle: 'Things I have built.',
                viewProject: 'View Project',
                items: [
                    {
                        title: 'The Last Confession',
                        desc: '"The real monster was family all along." A psychological 3D detective puzzler where players navigate an abandoned house, solve mechanical puzzle chambers, and use psychological profiling to unmask a killer hiding in plain sight.',
                        tags: ['Three.js', 'React Three Fiber', 'GSAP', 'WebGL']
                    },
                    {
                        title: 'CloudScale ERP',
                        desc: 'High-frequency enterprise resource planning dashboard with real-time data ingestion and predictive analytics using WebSockets and Redis.',
                        tags: ['Next.js', 'Go', 'Redis', 'PostgreSQL']
                    },
                    {
                        title: 'NeuroContent AI',
                        desc: 'Full-stack generative AI platform featuring distributed task queues, integrated payment gateways, and real-time inference monitoring.',
                        tags: ['React', 'FastAPI', 'AWS Lambda', 'Stripe']
                    },
                    {
                        title: 'Zenith Marketplace',
                        desc: 'Premium luxury e-commerce engine with sub-second Elasticsearch results, complex inventory synchronization, and custom checkout flows.',
                        tags: ['Node.js', 'Elasticsearch', 'Docker', 'GraphQL']
                    },
                    {
                        title: 'CoreAuth Service',
                        desc: 'Carrier-grade user management microservice. Achieved a 35% reduction in API latency by orchestrating Spring Boot with optimized MySQL/MongoDB hybrid storage for 100k+ active users.',
                        tags: ['Java', 'Spring Boot', 'Microservices', 'Docker']
                    },
                    {
                        title: 'Nexus Service Engine',
                        desc: 'Advanced enterprise service orchestrator. Streamlined delivery workflows and increased transaction handling by 25% through high-concurrency Node.js APIs and complex SQL optimization.',
                        tags: ['Node.js', 'Angular', 'PostgreSQL', 'TypeScript']
                    }
                ]
            },
            contact: {
                title: 'Get In Touch',
                subtitle: "I'd love to hear from you. Send me a message!",
                name: 'Name',
                email: 'Email',
                message: 'Message',
                sendMessage: 'Send Message',
                sending: 'Sending...',
                success: 'Message sent successfully!',
                error: 'Failed to send message. Please try again.',
                yourName: 'Your Name',
                yourEmail: 'Your Email',
                tellMeProject: 'Tell me about your project...',
                contactEmail: 'angara.rachanaa@gmail.com',
                social: 'Social',
                linkedIn: 'LinkedIn',
                github: 'GitHub'
            },
            testimonials: {
                title: 'What Leaders Say',
                subtitle: "Recommendations from managers and directors I've worked with.",
                items: [
                    {
                        name: 'Marc Pinto',
                        title: 'Director Global Technology Support',
                        company: 'Thunderbird School of Global Management',
                        initials: 'MP',
                        color: '#e2c275',
                        quote: "Rachana Angara has proven to be an outstanding team member, consistently blending technical skill with a focus on achieving results. Rachana's proactive communication and mentorship have fostered a culture of collaboration and continuous learning. Her accomplishments, such as multiple high-performance ratings and the \"Code Ninja of the Month\" award, highlight her dedication, adaptability, and strong commitment to excellence."
                    },
                    {
                        name: 'Kishore Haridas',
                        title: 'Director',
                        company: 'Barclays',
                        initials: 'KH',
                        color: '#c5a059',
                        quote: "Rachana Angara's exceptional technical expertise has consistently distinguished her as an invaluable team member. At Barclays, she demonstrated strong leadership by mentoring both her team and cross-functional teams on best practices, ensuring alignment and knowledge sharing. Additionally, she took the initiative to organize monthly director-level events, promoting collaboration and strengthening team spirit."
                    },
                    {
                        name: 'Nikhilesh Khatra',
                        title: 'Assistant Vice President',
                        company: 'Barclays',
                        initials: 'NK',
                        color: '#e2c275',
                        quote: 'Joining the team as a graduate, Rachana quickly proved herself as an exceptional developer and an indispensable team member. From the outset, her eagerness to learn and adapt stood out, as she mastered advanced tools with remarkable speed. Her ability to seamlessly transition between frontend development and backend showcased her versatility as a full-stack developer.'
                    },
                    {
                        name: 'Vivek Jain',
                        title: 'Assistant Vice President',
                        company: 'Barclays',
                        initials: 'VJ',
                        color: '#c5a059',
                        quote: 'Although I worked with Rachana indirectly, her professionalism and technical skills were consistently evident. She approached every task with enthusiasm and delivered reliable, high-quality results that aligned seamlessly with project goals. Rachana displayed excellent communication skills and a proactive attitude, making collaboration across teams smooth and efficient.'
                    }
                ]
            },
            timeline: {
                title: 'My Journey',
                subtitle: 'Hover over each point to see the details',
                education: 'Education',
                work: 'Work',
                items: [
                    {
                        type: 'education',
                        title: 'BTech Computer Engineering',
                        subtitle: 'Cummins College of Engineering for Women, Pune University',
                        organization: 'Pune, India',
                        period: '2017 – 2021',
                        icon: '🎓',
                        color: '#e2c275',
                        details: 'First Class with distinction in computer science, algorithms, and software development.'
                    },
                    {
                        type: 'work',
                        title: 'Software Engineer (Full Stack)',
                        subtitle: 'Barclays',
                        organization: 'India',
                        period: '2021 – 2024',
                        icon: '💼',
                        color: '#00d4aa',
                        details: 'Delivered enterprise web apps with React.js & Angular. Improved performance by 20%. Led Agile sprints.'
                    },
                    {
                        type: 'education',
                        title: 'MS Software Engineering',
                        subtitle: 'Arizona State University',
                        organization: 'Tempe, AZ',
                        period: 'August 2024 – May 2026',
                        icon: '🎓',
                        color: '#c5a059',
                        details: 'Focusing on advanced software architecture, distributed systems, and AI/ML integration.'
                    },
                    {
                        type: 'work',
                        title: 'Information Technology Helpdesk',
                        subtitle: 'Thunderbird school of Global Management',
                        organization: 'Downtown Phoenix, AZ',
                        period: 'Nov 2024 – May 2026',
                        icon: '💼',
                        color: '#7c3aed',
                        details: 'Providing technical support and IT solutions for university systems. Managing helpdesk tickets and resolving technical issues.'
                    }
                ]
            }
        }
    },
    es: {
        translation: {
            nav: {
                about: 'Sobre Mí',
                experience: 'Experiencia',
                education: 'Educación',
                certifications: 'Certificaciones',
                skills: 'Habilidades',
                projects: 'Proyectos',
                contact: 'Contacto',
                letsConnect: 'Conectemos'
            },
            footer: {
                text: 'Portafolio de Ingeniera de Software. Construido con React y pasión.'
            },
            hero: {
                greeting: 'Hola, soy',
                name: 'Rachana Angara',
                title: 'Desarrolladora Full Stack',
                subtitle: 'Construyendo aplicaciones web escalables con tecnologías modernas',
                openToWork: 'Disponible para patrocinio H1B (Visa F1)',
                downloadResume: 'Descargar Currículum',
                description: 'Ingeniera de software decisiva con una sólida trayectoria en resolución de problemas y solución de complejos desafíos de software. Diseña e implementa funciones innovadoras para mejorar el rendimiento y la eficiencia. Solucionadora de problemas proactiva con excepcionales habilidades de pensamiento crítico y colaboración.',
                problemSolver: 'Solucionadora de Problemas'
            },
            experience: {
                title: 'Experiencia Laboral',
                subtitle: 'Mi trayectoria profesional y contribuciones clave.',
                items: [
                    {
                        company: 'Escuela de Gestión Global Thunderbird',
                        location: 'Centro de Phoenix, AZ',
                        role: 'Mesa de Ayuda de Tecnología de la Información',
                        period: 'Noviembre 2024 – Mayo 2026',
                        duration: 'Actual',
                        highlights: [
                            { icon: '🎧', text: 'Brindé soporte al cliente de primer nivel a estudiantes, miembros del profesorado y personal atendiendo consultas por teléfono y en persona.' },
                            { icon: '📋', text: 'Completé listas de verificación de operaciones diarias y prioricé las tareas asignadas antes de participar en actividades de tiempo libre.' },
                            { icon: '⏱️', text: 'Mantuve informes de tiempo precisos en Workday y TAS siguiendo los horarios asignados y los protocolos de comunicación.' },
                            { icon: '🔐', text: 'Manejé información confidencial de estudiantes y departamentos con discreción, garantizando la gestión segura de datos y el cumplimiento normativo.' },
                            { icon: '💬', text: 'Colaboré con personal de tiempo completo y administradores de TI, utilizando Slack para la comunicación de turnos y la coordinación de tareas.' }
                        ],
                        tags: ['Mesa de Ayuda', 'Soporte al Cliente', 'Soporte TI', 'Slack', 'Workday']
                    },
                    {
                        company: 'Barclays',
                        location: 'India',
                        role: 'Ingeniera de Software (Full Stack)',
                        period: 'Agosto 2021 – Agosto 2024',
                        duration: '3 Años',
                        highlights: [
                            { icon: '🚀', text: 'Entregué funcionalidades de portal de incorporación y soporte de extremo a extremo usando React.js, Angular, HTML5, CSS3 y JavaScript, respaldadas por APIs REST de Node.js. Implementé SSR/ISR, caché y división de código, mejorando los Core Web Vitals (LCP/TTFB) en un 20%.' },
                            { icon: '🗄️', text: 'Diseñé modelos de datos basados en SQL y contratos de API con paginación, validación y limitación de tasa para manejar más de 100,000 registros/día. Escribí pruebas unitarias y de extremo a extremo integradas en pipelines CI/CD, reduciendo las regresiones en producción en un 40%.' },
                            { icon: '🔍', text: 'Resolví problemas de producción mediante análisis de causa raíz y revisiones post-mortem, documenté libros de ejecución y colaboré con equipos de análisis de negocio, control de calidad y producto en sprints Agile, mejorando la eficiencia de entrega en un 15%.' }
                        ],
                        tags: ['React.js', 'Angular', 'Node.js', 'SQL', 'CI/CD', 'Agile']
                    }
                ]
            },
            education: {
                title: 'Educación',
                subtitle: 'Mi formación académica y cualificaciones.',
                items: [
                    {
                        degree: 'Maestría en Ciencias',
                        field: 'Ingeniería de Software',
                        school: 'Universidad Estatal de Arizona',
                        location: 'Tempe, AZ',
                        period: 'Agosto 2024 – Mayo 2026',
                        status: 'Esperada',
                        icon: '🎓',
                        color: '#c5a059'
                    },
                    {
                        degree: 'Licenciatura en Tecnología',
                        field: 'Ingeniería Informática',
                        school: 'Colegio de Ingeniería Cummins para Mujeres, Universidad de Pune',
                        location: 'Pune, India',
                        period: 'Agosto 2017 – Mayo 2021',
                        status: 'Completada',
                        icon: '🏛️',
                        color: '#e2c275'
                    }
                ]
            },
            certifications: {
                title: 'Certificaciones',
                subtitle: 'Certificaciones profesionales y logros.',
                items: [
                    {
                        title: 'Desarrollador Backend de Meta',
                        issuer: 'Meta',
                        description: 'Diseñé, construí y operé servicios y APIs de baja latencia a gran escala centrados en sistemas distribuidos, modelado de datos, rendimiento, confiabilidad y privacidad por diseño.',
                        icon: '♾️',
                        color: '#0668E1'
                    }
                ]
            },
            skills: {
                title: 'Habilidades',
                subtitle: 'Las tecnologías y herramientas con las que trabajo.',
                categories: [
                    {
                        title: 'Lenguajes de Programación',
                        skills: [
                            { name: 'Java', level: '90%' },
                            { name: 'Python', level: '85%' },
                            { name: 'JavaScript', level: '95%' },
                            { name: 'TypeScript', level: '90%' },
                            { name: 'SQL', level: '88%' }
                        ]
                    },
                    {
                        title: 'Tecnologías Frontend',
                        skills: [
                            { name: 'React.js', level: '95%' },
                            { name: 'Angular', level: '85%' },
                            { name: 'Three.js / WebGL', level: '80%' },
                            { name: 'HTML5 / CSS3', level: '95%' },
                            { name: 'Diseño Web Responsivo', level: '90%' }
                        ]
                    },
                    {
                        title: 'Tecnologías Backend',
                        skills: [
                            { name: 'Node.js', level: '92%' },
                            { name: 'Express.js', level: '90%' },
                            { name: 'Spring Boot', level: '88%' },
                            { name: 'APIs RESTful', level: '95%' },
                            { name: 'Microservicios', level: '85%' }
                        ]
                    },
                    {
                        title: 'Nube y DevOps',
                        skills: [
                            { name: 'MySQL / PostgreSQL', level: '90%' },
                            { name: 'MongoDB', level: '85%' },
                            { name: 'Docker', level: '80%' },
                            { name: 'Pipelines CI/CD', level: '75%' },
                            { name: 'Nube AWS', level: '70%' }
                        ]
                    }
                ]
            },
            projects: {
                title: 'Proyectos',
                subtitle: 'Lo que he construido.',
                viewProject: 'Ver Proyecto',
                items: [
                    {
                        title: 'La Última Confesión',
                        desc: '"El verdadero monstruo era la familia." Un juego de puzle policial 3D psicológico donde los jugadores navegan por una casa vacía, resuelven cámaras de puzles mecánicos y utilizan perfilado psicológico para exponer a un asesino.',
                        tags: ['Three.js', 'React Three Fiber', 'GSAP', 'WebGL']
                    },
                    {
                        title: 'CloudScale ERP',
                        desc: 'Panel de planificación de recursos empresariales de alta frecuencia con ingesta de datos en tiempo real y análisis predictivo usando WebSockets y Redis.',
                        tags: ['Next.js', 'Go', 'Redis', 'PostgreSQL']
                    },
                    {
                        title: 'NeuroContenido IA',
                        desc: 'Plataforma de IA generativa full stack con cola de tareas distribuida, pasarela de pago integrada y monitoreo de inferencia en tiempo real.',
                        tags: ['React', 'FastAPI', 'AWS Lambda', 'Stripe']
                    },
                    {
                        title: 'Mercado Zenith',
                        desc: 'Motor de comercio electrónico de lujo premium con resultados de Elasticsearch en menos de un segundo, sincronización de inventario compleja y flujo de pago personalizado.',
                        tags: ['Node.js', 'Elasticsearch', 'Docker', 'GraphQL']
                    },
                    {
                        title: 'Servicio CoreAuth',
                        desc: 'Microservicio de gestión de usuarios de nivel empresarial. Logré una reducción del 35% en la latencia de la API orquestando Spring Boot con almacenamiento híbrido MySQL/MongoDB optimizado para más de 100k usuarios activos.',
                        tags: ['Java', 'Spring Boot', 'Microservicios', 'Docker']
                    },
                    {
                        title: 'Motor de Servicio Nexus',
                        desc: 'Orquestador de servicios empresariales avanzado. Optimicé los flujos de trabajo de entrega y aumenté el manejo de transacciones en un 25% mediante APIs Node.js de alta concurrencia y optimización SQL compleja.',
                        tags: ['Node.js', 'Angular', 'PostgreSQL', 'TypeScript']
                    }
                ]
            },
            contact: {
                title: 'Contáctame',
                subtitle: '¡Me encantaría saber de ti. Envíame un mensaje!',
                name: 'Nombre',
                email: 'Correo Electrónico',
                message: 'Mensaje',
                sendMessage: 'Enviar Mensaje',
                sending: 'Enviando...',
                success: '¡Mensaje enviado con éxito!',
                error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
                yourName: 'Tu Nombre',
                yourEmail: 'Tu Correo Electrónico',
                tellMeProject: 'Cuéntame sobre tu proyecto...',
                contactEmail: 'angara.rachanaa@gmail.com',
                social: 'Redes Sociales',
                linkedIn: 'LinkedIn',
                github: 'GitHub'
            },
            testimonials: {
                title: 'Lo Que Dicen los Líderes',
                subtitle: 'Recomendaciones de gerentes y directores con quienes he trabajado.',
                items: [
                    {
                        name: 'Marc Pinto',
                        title: 'Director de Soporte Tecnológico Global',
                        company: 'Escuela de Gestión Global Thunderbird',
                        initials: 'MP',
                        color: '#e2c275',
                        quote: 'Rachana Angara ha demostrado ser una miembro del equipo sobresaliente, combinando constantemente experiencia técnica con un enfoque en la obtención de resultados. La comunicación proactiva y la orientación de Rachana han fomentado una cultura de colaboración y aprendizaje continuo. Sus logros, como múltiples calificaciones de alto rendimiento y el premio "Ninja del Código del Mes", destacan su dedicación, adaptabilidad y compromiso con la excelencia.'
                    },
                    {
                        name: 'Kishore Haridas',
                        title: 'Director',
                        company: 'Barclays',
                        initials: 'KH',
                        color: '#c5a059',
                        quote: 'La excepcional experiencia técnica de Rachana Angara la ha distinguido constantemente como una miembro invaluable del equipo. En Barclays, demostró un fuerte liderazgo guiando a su equipo y a los equipos interfuncionales sobre las mejores prácticas, garantizando la alineación y el intercambio de conocimientos. Además, tomó la iniciativa de organizar eventos mensuales a nivel de directores, fomentando la colaboración y fortaleciendo el espíritu de equipo.'
                    },
                    {
                        name: 'Nikhilesh Khatra',
                        title: 'Vicepresidente Asistente',
                        company: 'Barclays',
                        initials: 'NK',
                        color: '#e2c275',
                        quote: 'Al unirse al equipo como recién graduada, Rachana demostró ser una desarrolladora excepcional y una miembro indispensable del equipo. Desde el principio, destacó su disposición para aprender y adaptarse, ya que dominó herramientas avanzadas a un ritmo notable. Su capacidad para transitar sin problemas entre el desarrollo frontend y el backend mostró su versatilidad como desarrolladora full stack.'
                    },
                    {
                        name: 'Vivek Jain',
                        title: 'Vicepresidente Asistente',
                        company: 'Barclays',
                        initials: 'VJ',
                        color: '#c5a059',
                        quote: 'Aunque trabajé con Rachana de manera indirecta, su profesionalismo y experiencia técnica fueron constantemente evidentes. Abordó cada tarea con entusiasmo y entregó resultados confiables y de alta calidad que se alinearon perfectamente con los objetivos del proyecto. Rachana demostró excelentes habilidades de comunicación y un enfoque proactivo, haciendo que la colaboración entre los equipos fuera fluida y eficiente.'
                    }
                ]
            },
            timeline: {
                title: 'Mi Trayectoria',
                subtitle: 'Pasa el cursor sobre cada punto para ver los detalles',
                education: 'Educación',
                work: 'Trabajo',
                items: [
                    {
                        type: 'education',
                        title: 'Ingeniería Informática BTech',
                        subtitle: 'Colegio de Ingeniería Cummins para Mujeres, Universidad de Pune',
                        organization: 'Pune, India',
                        period: '2017 – 2021',
                        icon: '🎓',
                        color: '#e2c275',
                        details: 'Me gradué con distinción en ciencias de la computación, algoritmos y desarrollo de software.'
                    },
                    {
                        type: 'work',
                        title: 'Ingeniera de Software (Full Stack)',
                        subtitle: 'Barclays',
                        organization: 'India',
                        period: '2021 – 2024',
                        icon: '💼',
                        color: '#00d4aa',
                        details: 'Entregué aplicaciones web empresariales con React.js y Angular. Mejoré el rendimiento en un 20%. Lideré sprints Agile.'
                    },
                    {
                        type: 'education',
                        title: 'Maestría en Ingeniería de Software',
                        subtitle: 'Universidad Estatal de Arizona',
                        organization: 'Tempe, AZ',
                        period: 'Agosto 2024 – Mayo 2026',
                        icon: '🎓',
                        color: '#c5a059',
                        details: 'Enfocada en arquitectura de software avanzada, sistemas distribuidos e integración de IA/ML.'
                    },
                    {
                        type: 'work',
                        title: 'Mesa de Ayuda de Tecnología de la Información',
                        subtitle: 'Escuela de Gestión Global Thunderbird',
                        organization: 'Centro de Phoenix, AZ',
                        period: 'Noviembre 2024 – Mayo 2026',
                        icon: '💼',
                        color: '#7c3aed',
                        details: 'Proporcionar soporte técnico y soluciones de TI para los sistemas universitarios. Gestionar tickets de la mesa de ayuda y resolver problemas técnicos.'
                    }
                ]
            }
        }
    },
    hi: {
        translation: {
            nav: {
                about: 'के बारे में',
                experience: 'अनुभव',
                education: 'शिक्षा',
                certifications: 'प्रमाणपत्र',
                skills: 'कौशल',
                projects: 'प्रोजेक्ट्स',
                contact: 'संपर्क',
                letsConnect: 'जुड़ें'
            },
            footer: {
                text: 'सॉफ्टवेयर इंजीनियर पोर्टफोलियो। रिएक्ट और जुनून से बनाया गया।'
            },
            hero: {
                greeting: 'नमस्ते, मैं हूं',
                name: 'रचना अंगारा',
                title: 'फुल स्टैक डेवलपर',
                subtitle: 'आधुनिक तकनीकों के साथ स्केलेबल वेब एप्लिकेशन बना रही हूं',
                openToWork: 'H1B स्पॉन्सरशिप के लिए उपलब्ध (F1 वीज़ा)',
                downloadResume: 'रिज़्यूमे डाउनलोड करें',
                description: 'निर्णायक सॉफ्टवेयर इंजीनियर जो समस्या समाधान और जटिल सॉफ्टवेयर चुनौतियों को हल करने में मजबूत पृष्ठभूमि रखती है। प्रदर्शन और कार्यक्षमता में सुधार के लिए नवीन सुविधाएं डिज़ाइन और तैनात करती है। असाधारण आलोचनात्मक सोच और सहयोग कौशल वाली सक्रिय समस्या समाधानकर्ता।',
                welcome: 'मेरे पोर्टफोलियो में आपका स्वागत है',
                problemSolver: 'समस्या समाधानकर्ता'
            },
            experience: {
                title: 'कार्य अनुभव',
                subtitle: 'मेरी पेशेवर यात्रा और प्रमुख योगदान।',
                items: [
                    {
                        company: 'थंडरबर्ड स्कूल ऑफ ग्लोबल मैनेजमेंट',
                        location: 'डाउनटाउन फीनिक्स, एजेड',
                        role: 'सूचना प्रौद्योगिकी हेल्प डेस्क',
                        period: 'नवंबर 2024 – मई 2026',
                        duration: 'वर्तमान',
                        highlights: [
                            { icon: '🎧', text: 'फोन और व्यक्तिगत रूप से पूछताछ को संभालते हुए छात्रों, संकाय सदस्यों और कर्मचारियों को प्रथम-स्तरीय ग्राहक सहायता प्रदान की।' },
                            { icon: '📋', text: 'दैनिक संचालन चेकलिस्ट पूरा किया और खाली समय की गतिविधियों में शामिल होने से पहले सौंपे गए कार्यों को प्राथमिकता दी।' },
                            { icon: '⏱️', text: 'निर्धारित समयसूची और संचार प्रोटोकॉल का पालन करते हुए वर्कडे और टीएएस में सटीक समय रिपोर्टिंग बनाए रखी।' },
                            { icon: '🔐', text: 'विवेकपूर्ण तरीके से गोपनीय छात्र और विभागीय जानकारी को संभाला, सुरक्षित डेटा प्रबंधन और अनुपालन सुनिश्चित किया।' },
                            { icon: '💬', text: 'पूर्णकालिक कर्मचारी और आईटी प्रशासकों के साथ सहयोग किया, शिफ्ट संचार और कार्य समन्वय के लिए स्लैक का उपयोग किया।' }
                        ],
                        tags: ['हेल्प डेस्क', 'ग्राहक सहायता', 'आईटी सहायता', 'स्लैक', 'वर्कडे']
                    },
                    {
                        company: 'बार्कलेज़',
                        location: 'भारत',
                        role: 'सॉफ्टवेयर इंजीनियर (फुल स्टैक)',
                        period: 'अगस्त 2021 – अगस्त 2024',
                        duration: '3 वर्ष',
                        highlights: [
                            { icon: '🚀', text: 'रिएक्ट.जेएस, एंगुलर, एचटीएमएल5, सीएसएस3 और जावास्क्रिप्ट का उपयोग करके शुरू से अंत तक ऑनबोर्डिंग और सपोर्ट पोर्टल फीचर्स वितरित किए, जो नोड.जेएस रेस्ट एपीआई द्वारा समर्थित हैं। एसएसआर/आईएसआर, कैशिंग और कोड-स्प्लिटिंग को लागू किया, मुख्य वेब विटल्स में 20% सुधार किया।' },
                            { icon: '🗄️', text: 'प्रतिदिन 100,000 से अधिक रिकॉर्ड संभालने के लिए पृष्ठांकन, सत्यापन और दर-सीमांकन के साथ एसक्यूएल-आधारित डेटा मॉडल और एपीआई अनुबंध डिज़ाइन किए। सीआई/सीडी पाइपलाइन में एकीकृत इकाई और शुरू से अंत तक परीक्षण लिखे, उत्पादन प्रतिगमन में 40% की कमी लाई।' },
                            { icon: '🔍', text: 'मूल-कारण विश्लेषण और उत्तर-मृत्यु परीक्षण के माध्यम से उत्पादन समस्याओं को हल किया, रनबुक का दस्तावेज़ीकरण किया, और एजाइल स्प्रिंट में व्यावसायिक विश्लेषक, गुणवत्ता आश्वासन और उत्पाद टीमों के साथ सहयोग किया, डिलीवरी दक्षता में 15% सुधार किया।' }
                        ],
                        tags: ['रिएक्ट.जेएस', 'एंगुलर', 'नोड.जेएस', 'एसक्यूएल', 'सीआई/सीडी', 'एजाइल']
                    }
                ]
            },
            education: {
                title: 'शिक्षा',
                subtitle: 'मेरी शैक्षणिक पृष्ठभूमि और योग्यता।',
                items: [
                    {
                        degree: 'विज्ञान में स्नातकोत्तर',
                        field: 'सॉफ्टवेयर इंजीनियरिंग',
                        school: 'एरिजोना स्टेट यूनिवर्सिटी',
                        location: 'टेम्पे, एजेड',
                        period: 'अगस्त 2024 – मई 2026',
                        status: 'अपेक्षित',
                        icon: '🎓',
                        color: '#c5a059'
                    },
                    {
                        degree: 'प्रौद्योगिकी में स्नातक',
                        field: 'कंप्यूटर इंजीनियरिंग',
                        school: 'कमिंस कॉलेज ऑफ इंजीनियरिंग फॉर वुमेन, पुणे विश्वविद्यालय',
                        location: 'पुणे, भारत',
                        period: 'अगस्त 2017 – मई 2021',
                        status: 'पूर्ण',
                        icon: '🏛️',
                        color: '#e2c275'
                    }
                ]
            },
            certifications: {
                title: 'प्रमाणपत्र',
                subtitle: 'पेशेवर प्रमाणपत्र और उपलब्धियां।',
                items: [
                    {
                        title: 'मेटा बैकएंड डेवलपर',
                        issuer: 'मेटा',
                        description: 'वितरित प्रणालियों, डेटा मॉडलिंग, प्रदर्शन, विश्वसनीयता और डिज़ाइन द्वारा गोपनीयता पर केंद्रित बड़े पैमाने पर कम-विलंबता सेवाओं और एपीआई को डिज़ाइन, निर्मित और संचालित किया।',
                        icon: '♾️',
                        color: '#0668E1'
                    }
                ]
            },
            skills: {
                title: 'कौशल',
                subtitle: 'जिन तकनीकों और उपकरणों के साथ मैं काम करती हूं।',
                categories: [
                    {
                        title: 'प्रोग्रामिंग भाषाएं',
                        skills: [
                            { name: 'जावा', level: '90%' },
                            { name: 'पायथन', level: '85%' },
                            { name: 'जावास्क्रिप्ट', level: '95%' },
                            { name: 'टाइपस्क्रिप्ट', level: '90%' },
                            { name: 'एसक्यूएल', level: '88%' }
                        ]
                    },
                    {
                        title: 'फ्रंटएंड तकनीक',
                        skills: [
                            { name: 'रिएक्ट.जेएस', level: '95%' },
                            { name: 'एंगुलर', level: '85%' },
                            { name: 'थ्री.जेएस / वेबजीएल', level: '80%' },
                            { name: 'एचटीएमएल5 / सीएसएस3', level: '95%' },
                            { name: 'रेस्पॉन्सिव वेब डिज़ाइन', level: '90%' }
                        ]
                    },
                    {
                        title: 'बैकएंड तकनीक',
                        skills: [
                            { name: 'नोड.जेएस', level: '92%' },
                            { name: 'एक्सप्रेस.जेएस', level: '90%' },
                            { name: 'स्प्रिंग बूट', level: '88%' },
                            { name: 'रेस्टफुल एपीआई', level: '95%' },
                            { name: 'माइक्रोसर्विसेज़', level: '85%' }
                        ]
                    },
                    {
                        title: 'क्लाउड और डेवऑप्स',
                        skills: [
                            { name: 'माईएसक्यूएल / पोस्टग्रेएसक्यूएल', level: '90%' },
                            { name: 'मोंगोडीबी', level: '85%' },
                            { name: 'डॉकर', level: '80%' },
                            { name: 'सीआई/सीडी पाइपलाइन', level: '75%' },
                            { name: 'एडब्ल्यूएस क्लाउड', level: '70%' }
                        ]
                    }
                ]
            },
            projects: {
                title: 'प्रोजेक्ट्स',
                subtitle: 'मैंने जो बनाया है।',
                viewProject: 'प्रोजेक्ट देखें',
                items: [
                    {
                        title: 'अंतिम स्वीकारोक्ति',
                        desc: '"असली राक्षस परिवार था।" एक मनोवैज्ञानिक 3D जासूसी पहेली खेल जहां खिलाड़ी एक खाली घर में नेविगेट करते हैं, यांत्रिक पहेली कक्ष सुलझाते हैं, और एक हत्यारे को उजागर करने के लिए मनोवैज्ञानिक प्रोफाइलिंग का उपयोग करते हैं।',
                        tags: ['थ्री.जेएस', 'रिएक्ट थ्री फाइबर', 'जीएसएपी', 'वेबजीएल']
                    },
                    {
                        title: 'क्लाउडस्केल ईआरपी',
                        desc: 'वेबसॉकेट्स और रेडिस का उपयोग करके वास्तविक समय डेटा अंतर्ग्रहण और भविष्यसूचक विश्लेषण के साथ उच्च-आवृत्ति उद्यम संसाधन नियोजन डैशबोर्ड।',
                        tags: ['नेक्स्ट.जेएस', 'गो', 'रेडिस', 'पोस्टग्रेएसक्यूएल']
                    },
                    {
                        title: 'न्यूरोकंटेंट एआई',
                        desc: 'वितरित कार्य कतार, एकीकृत भुगतान प्रवेशद्वार और वास्तविक समय अनुमान निगरानी के साथ पूर्ण-स्टैक जेनरेटिव एआई प्लेटफॉर्म।',
                        tags: ['रिएक्ट', 'फास्टएपीआई', 'एडब्ल्यूएस लैम्ब्डा', 'स्ट्राइप']
                    },
                    {
                        title: 'ज़ेनिथ मार्केटप्लेस',
                        desc: 'उप-सेकंड इलास्टिकसर्च परिणाम, जटिल इन्वेंटरी समकालीकरण और कस्टम चेकआउट प्रवाह के साथ प्रीमियम लक्जरी ई-कॉमर्स इंजन।',
                        tags: ['नोड.जेएस', 'इलास्टिकसर्च', 'डॉकर', 'ग्राफक्यूएल']
                    },
                    {
                        title: 'कोरऑथ सेवा',
                        desc: 'उद्यम-स्तरीय उपयोगकर्ता प्रबंधन माइक्रोसर्विस। 100 हजार से अधिक सक्रिय उपयोगकर्ताओं के लिए अनुकूलित माईएसक्यूएल/मोंगोडीबी हाइब्रिड स्टोरेज के साथ स्प्रिंग बूट को व्यवस्थित करके एपीआई विलंबता में 35% की कमी हासिल की।',
                        tags: ['जावा', 'स्प्रिंग बूट', 'माइक्रोसर्विसेज़', 'डॉकर']
                    },
                    {
                        title: 'नेक्सस सेवा इंजन',
                        desc: 'उन्नत उद्यम सेवा ऑर्केस्ट्रेटर। उच्च-समवर्तिता नोड.जेएस एपीआई और जटिल एसक्यूएल अनुकूलन के माध्यम से डिलीवरी कार्यप्रवाह को सुव्यवस्थित किया और लेनदेन प्रबंधन में 25% की वृद्धि की।',
                        tags: ['नोड.जेएस', 'एंगुलर', 'पोस्टग्रेएसक्यूएल', 'टाइपस्क्रिप्ट']
                    }
                ]
            },
            contact: {
                title: 'संपर्क करें',
                subtitle: 'मुझे आपसे सुनकर अच्छा लगेगा। मुझे संदेश भेजें!',
                name: 'नाम',
                email: 'ईमेल',
                message: 'संदेश',
                sendMessage: 'संदेश भेजें',
                sending: 'भेज रहे हैं...',
                success: 'संदेश सफलतापूर्वक भेजा गया!',
                error: 'संदेश भेजने में विफल। कृपया पुनः प्रयास करें।',
                yourName: 'आपका नाम',
                yourEmail: 'आपका ईमेल',
                tellMeProject: 'मुझे अपने प्रोजेक्ट के बारे में बताएं...',
                contactEmail: 'angara.rachanaa@gmail.com',
                social: 'सामाजिक',
                linkedIn: 'लिंक्डइन',
                github: 'गिटहब'
            },
            testimonials: {
                title: 'नेता क्या कहते हैं',
                subtitle: 'उन प्रबंधकों और निदेशकों की सिफारिशें जिनके साथ मैंने काम किया है।',
                items: [
                    {
                        name: 'मार्क पिंटो',
                        title: 'वैश्विक प्रौद्योगिकी सहायता निदेशक',
                        company: 'थंडरबर्ड स्कूल ऑफ ग्लोबल मैनेजमेंट',
                        initials: 'एमपी',
                        color: '#e2c275',
                        quote: 'रचना अंगारा ने खुद को एक उत्कृष्ट टीम सदस्य के रूप में सिद्ध किया है, जो निरंतर तकनीकी कौशल को परिणाम प्राप्त करने पर ध्यान केंद्रित करने के साथ जोड़ती है। रचना की सक्रिय संचार और मार्गदर्शन ने सहयोग और निरंतर सीखने की संस्कृति को बढ़ावा दिया है। उनकी उपलब्धियां, जैसे कई उच्च प्रदर्शन रेटिंग और "महीने की कोड निंजा" पुरस्कार, उनकी समर्पण, अनुकूलनशीलता और उत्कृष्टता के प्रति प्रतिबद्धता को उजागर करती हैं।'
                    },
                    {
                        name: 'किशोर हरिदास',
                        title: 'निदेशक',
                        company: 'बार्कलेज़',
                        initials: 'केएच',
                        color: '#c5a059',
                        quote: 'रचना अंगारा की असाधारण तकनीकी विशेषज्ञता ने उन्हें निरंतर एक अमूल्य टीम सदस्य के रूप में प्रतिष्ठित किया है। बार्कलेज़ में, उन्होंने सर्वोत्तम प्रथाओं पर अपनी टीम और क्रॉस-फंक्शनल टीमों को मार्गदर्शन करके मजबूत नेतृत्व प्रदर्शित किया, जिससे संरेखण और ज्ञान साझा करना सुनिश्चित हुआ। इसके अलावा, उन्होंने मासिक निदेशक-स्तरीय कार्यक्रमों को आयोजित करने की पहल की, जिससे सहयोग को बढ़ावा मिला और टीम की भावना मजबूत हुई।'
                    },
                    {
                        name: 'निखिलेश खत्रा',
                        title: 'सहायक उपाध्यक्ष',
                        company: 'बार्कलेज़',
                        initials: 'एनके',
                        color: '#e2c275',
                        quote: 'स्नातक के रूप में टीम में शामिल होते हुए, रचना ने खुद को एक असाधारण डेवलपर और एक अपरिहार्य टीम सदस्य के रूप में सिद्ध किया। शुरू से ही, सीखने और अनुकूलित होने की उनकी इच्छा उभरी, क्योंकि उन्होंने उन्नत उपकरणों में उल्लेखनीय गति से महारत हासिल की। फ्रंटएंड विकास और बैकएंड के बीच निर्बाध रूप से संक्रमण करने की उनकी क्षमता ने फुल-स्टैक डेवलपर के रूप में उनकी बहुमुखी प्रतिभा दिखाई।'
                    },
                    {
                        name: 'विवेक जैन',
                        title: 'सहायक उपाध्यक्ष',
                        company: 'बार्कलेज़',
                        initials: 'वीजे',
                        color: '#c5a059',
                        quote: 'भले ही मैं रचना के साथ अप्रत्यक्ष रूप से काम करता था, उनकी व्यावसायिकता और तकनीकी कौशल निरंतर स्पष्ट थे। उन्होंने हर कार्य को उत्साह से संभाला और विश्वसनीय, उच्च-गुणवत्ता वाले परिणाम दिए जो परियोजना के लक्ष्यों के साथ निर्बाध रूप से संरेखित थे। रचना ने उत्कृष्ट संचार कौशल और सक्रिय दृष्टिकोण प्रदर्शित किया, जिससे टीमों के बीच सहयोग सुगम और कुशल बना।'
                    }
                ]
            },
            timeline: {
                title: 'मेरी यात्रा',
                subtitle: 'विवरण देखने के लिए प्रत्येक बिंदु पर होवर करें',
                education: 'शिक्षा',
                work: 'कार्य',
                items: [
                    {
                        type: 'education',
                        title: 'बीटेक कंप्यूटर इंजीनियरिंग',
                        subtitle: 'कमिंस कॉलेज ऑफ इंजीनियरिंग फॉर वुमेन, पुणे विश्वविद्यालय',
                        organization: 'पुणे, भारत',
                        period: '2017 – 2021',
                        icon: '🎓',
                        color: '#e2c275',
                        details: 'कंप्यूटर विज्ञान, एल्गोरिदम और सॉफ्टवेयर विकास में प्रथम श्रेणी के साथ उत्तीर्ण।'
                    },
                    {
                        type: 'work',
                        title: 'सॉफ्टवेयर इंजीनियर (फुल स्टैक)',
                        subtitle: 'बार्कलेज़',
                        organization: 'भारत',
                        period: '2021 – 2024',
                        icon: '💼',
                        color: '#00d4aa',
                        details: 'रिएक्ट.जेएस और एंगुलर के साथ उद्यम वेब ऐप्स वितरित किए। प्रदर्शन में 20% सुधार किया। एजाइल स्प्रिंट का नेतृत्व किया।'
                    },
                    {
                        type: 'education',
                        title: 'एमएस सॉफ्टवेयर इंजीनियरिंग',
                        subtitle: 'एरिजोना स्टेट यूनिवर्सिटी',
                        organization: 'टेम्पे, एजेड',
                        period: 'अगस्त 2024 – मई 2026',
                        icon: '🎓',
                        color: '#c5a059',
                        details: 'उन्नत सॉफ्टवेयर वास्तुकला, वितरित प्रणाली और एआई/एमएल एकीकरण पर ध्यान केंद्रित।'
                    },
                    {
                        type: 'work',
                        title: 'सूचना प्रौद्योगिकी हेल्पडेस्क',
                        subtitle: 'थंडरबर्ड स्कूल ऑफ ग्लोबल मैनेजमेंट',
                        organization: 'डाउनटाउन फीनिक्स, एजेड',
                        period: 'नवंबर 2024 – मई 2026',
                        icon: '💼',
                        color: '#7c3aed',
                        details: 'विश्वविद्यालय प्रणालियों के लिए तकनीकी सहायता और आईटी समाधान प्रदान करना। हेल्पडेस्क टिकट प्रबंधित करना और तकनीकी समस्याओं को हल करना।'
                    }
                ]
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        }
    });

export default i18n;
