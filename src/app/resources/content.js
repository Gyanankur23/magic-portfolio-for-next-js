import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Gyanankur",
  lastName: "Baruah",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Science Student & AI Enthusiast",
  avatar: "/images/avatar.jpg",
  email: "gyanankur9@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Assamese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about data science, AI/ML, and share thoughts on the intersection of
      technology and real-world applications.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Gyanankur23",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gyanankur-baruah-797205338",
  },
  {
    name: "Streamlit",
    icon: "link",
    link: "https://share.streamlit.io/user/gyanankur23",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>140 Projects · 30 Internships · Professional Certifications</>,
  featured: {
    display: true,
    title: <>Featured project: <strong className="ml-4">MetaMindset Labs</strong></>,
    href: "/work/metamindset-labs-platform",
  },
  subline: (
    <>
      I'm Gyanankur, a data science student at Mumbai University developing practical skills in AI/ML through diverse 
      <br /> internship experiences and academic projects, with growing expertise in Python-based data analysis and automation.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Gyanankur is a Mumbai-based data science student with a passion for transforming complex data challenges
        into actionable insights. His work spans machine learning, data visualization, full-stack development,
        and the convergence of AI and real-world applications. With 140+ projects and 30+ internships, he brings
        practical experience in Python, SQL, Power BI, and modern web technologies.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "MetaMindset Labs",
        timeframe: "Jul 2025 - Present",
        role: "Founder",
        achievements: [
          <>
            Leading documentation architecture studio focused on emotional intelligence and mindset transformation for tech professionals.
          </>,
          <>
            Architecting full-stack SaaS solutions with client dashboards, admin panels, and authentication systems.
          </>,
          <>
            Building community-driven platform integrating modern web technologies with user-centric design principles.
          </>,
        ],
        images: [],
      },
      {
        company: "Machine Learning Open Shelf",
        timeframe: "Jan 2026 - Present",
        role: "Community Admin & Founder",
        achievements: [
          <>
            Founded open-source initiative making ML knowledge accessible and structured for a global community.
          </>,
          <>
            Curating high-quality learning resources and designing structured learning paths for AI & Data Science.
          </>,
          <>
            Leading collaborative open-source environment bridging theory and real-world application.
          </>,
        ],
        images: [],
      },
      {
        company: "DataFam Mumbai",
        timeframe: "Jul 2025 - Present",
        role: "Community Moderator (Admin)",
        achievements: [
          <>
            Overseeing daily interactions and community engagement for 2800+ data science enthusiasts in Mumbai.
          </>,
          <>
            Collaborating with founding team on event planning, content curation, and member retention initiatives.
          </>,
        ],
        images: [],
      },
      {
        company: "McKinsey & Company",
        timeframe: "Sep 2025 - Dec 2025",
        role: "Leadership Development Participant",
        achievements: [
          <>
            Participated in global leadership development program learning problem solving, digital fluency, and personal effectiveness.
          </>,
          <>
            Practiced SMART problem definition, stakeholder alignment, and inclusive facilitation techniques.
          </>,
          <>
            Developed clarity-first communication and structured decision-making in team settings - Completed with Distinction.
          </>,
        ],
        images: [],
      },
      {
        company: "Excelerate",
        timeframe: "Feb 2026 - Mar 2026",
        role: "Multiple Roles (Star Performer)",
        achievements: [
          <>
            Smart Automation Intern: Designed and deployed smart workflows using AI and no-code tools to streamline operations.
          </>,
          <>
            Digital Strategy Trainee: Applied RACE Framework for channel assessment and growth strategy design.
          </>,
          <>
            Project Management Associate: Designed real-world PM programs and structured plans.
          </>,
          <>
            Innovation Trainee: Ideated and tested product concepts with structured problem framing.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "B.Sc. (Hons.) Data Science",
        description: <>Thakur Shyamnarayan Degree College, Mumbai University · SGPA: 9.55 (Sem 1) · 9.18 (Sem 2) · 9.45 (Sem 3)</>,
      },
      {
        name: "Leadership Accelerator – Forward Program",
        description: <>McKinsey & Company · Distinction · SMART problem framing, stakeholder alignment, clarity-first communication</>,
      },
      {
        name: "Professional Diploma Suite",
        description: <>MTF Institute Portugal · Project Management, Digital Transformation, HR Strategy, Financial Modelling</>,
      },
      {
        name: "Senior Secondary (XII) — PCM",
        description: <>Shree L. R. Tiwari College of Engineering · 6.5 CGPA</>,
      },
      {
        name: "Secondary (X)",
        description: <>N. L. Dalmia Institute of Management Studies · 96.4% · 10 CGPA</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Data & Analytics",
        description: <>Python, SQL, Power BI, Tableau, Looker Studio, Advanced Excel, DAX, Power Query, Pandas, NumPy, Matplotlib, Seaborn, Plotly, Dash</>,
        images: [],
      },
      {
        title: "Machine Learning & AI",
        description: <>Scikit-learn, Random Forest, Decision Trees, KNN, NLP, TF-IDF, Sentiment Analysis, LangChain Basics, Gemini API, Streamlit, NLTK Basics, TensorFlow Basics, Prompt Engineering</>,
        images: [],
      },
      {
        title: "Web Development",
        description: <>React.js, Next.js 14, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Node.js, Express.js, Vite, PWA</>,
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: <>Supabase, Vercel, Netlify, GitHub Actions, Firebase, Git, GitHub</>,
        images: [],
      },
      {
        title: "Business & Strategy",
        description: <>Design Thinking, Agile/Scrum, Jira, Trello, Project Management, Business Intelligence</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about data science and AI...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Data science, AI, and full-stack projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Certifications",
  title: `Certifications – ${person.name}`,
  description: `Professional certifications and achievements by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "McKinsey Forward Program",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Microsoft Azure",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "Google Cloud",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "Power BI",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Machine Learning",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "SQL",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Python",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Forage",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
