import project1 from "../assets/projects/aitalk.jpg";
import project2 from "../assets/projects/aifinance.jpg";
import project3 from "../assets/projects/project3.jpg";

// export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am Salman Mallick, a full-stack developer with a strong foundation in computer science and data science, currently pursuing my Bachelor of Science at the University of Michigan. My experience includes optimizing code and enhancing user experiences as a Software Development Engineer Intern, as well as contributing to market research and investment strategies at IgniteXL Ventures. I enjoy solving complex problems, building efficient solutions, and staying active through basketball, camping, and fitness. I'm always eager to learn and explore advancements in technology.`;

export const EXPERIENCES = [
  {
    year: "Jun 2025 - Aug 2025",
    role: "Software Engineer Intern",
    company: "Interactive Brokers",
    description: `Incoming Summer 2025`,
    technologies: ["Python", "SQL", "Linux"],
  },
  {
    year: "Apr 2024 - Jul 2024",
    role: "Software Engineer Intern",
    company: "BeAware Deaf Assistant",
    description: `Optimized 3,000 lines of code, boosting user retention by 20% for 13,000+ users.
    Debugged 40+ GitHub issues, enhancing app performance and streamlining development.
    Contributed daily to features like an interpretation tab for non-English speakers and improved speech recognition accuracy by 90%.
    Deployed refined LLM-based speech recognition at conferences with 300+ attendees, increasing client attraction.`,
    technologies: ["SwiftUI", "Python"],
  }
];

export const PROJECTS = [
  {
    title: "AI-Powered Financial Research Tool",
    image: project1,
    description:
      "Built a platform integrating embeddings and ChatGPT-4 to analyze financial news, delivering 90% accuracy and improving LLM contextual handling by 40% with an optimized text-splitting algorithm.",
    technologies: ["SwiftUI", "Python", "Pytorch"],
  },
  {
    title: "AI-Powered Speech Detection",
    image: project2,
    description:
      "Fine-tuned and integrated OpenAIs ASR Whisper into SwiftUI, enhancing multilingual speech accuracy by 80% and reducing transcription latency by over 90%.",
    technologies: ["Python", "Streamlit", "Langchain", "FAISS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React"],
  },
];

export const CONTACT = {
  linkedin: "LinkedIn",
  phoneNo: "248-619-4518",
  email: "salmanma@umich.edu",
};
