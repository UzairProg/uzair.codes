import { Compass, FolderKanban, Layers, Mail, Trophy } from "lucide-react";
import React, {useEffect} from "react";
import { easeInOut, motion } from "framer-motion";
import useLenisScroll, { getLenis } from "../../hooks/useLenisScroll.js";

const icons = {
  home: <Compass />,
  projects: <FolderKanban />,
  experience: <Trophy />,
  techStack: <Layers />,
  contact: <Mail />,
};

const handleScroll = (id) => {
  const section = document.getElementById(id)
  if (!section) return

  const lenis = getLenis()

  if (lenis) {
    lenis.scrollTo(section, {
      offset: -40,      
      duration: 1.1,    
      easing: (t) => t, 
    })
  } else {
    section.scrollIntoView()
  }
}


export default function Navbar() {
  useLenisScroll()
  const [activeSection, setActiveSection] = React.useState("home");
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
  const sections = [
    "home",
    "projects",
    "experience",
    "about",
    "contact",
  ]

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: isMobile ? 0.1 : 0.6,
    }
  )

  sections.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })

  return () => observer.disconnect()
}, [isMobile])
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.8,
        duration: 1,
        ease: easeInOut,
      }}
      className="fixed md:bottom-8 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-50"
    >{/* bottom-[calc(1.5rem+env(safe-area-inset-bottom))] its for mobile devices.. it helps in alignment from bottmon else u cant see the nav or its glitchy */}
      <nav className="flex items-center backdrop-blur-xl gap-5 md:gap-2 md:justify-evenly py-8 px-6 md:px-2 md:py-8  h-14 rounded-full md:rounded-2xl bg-surface/85 border border-border">
        {Object.entries(icons).map(([label, Icon]) => (
          <button
            key={label}
            onClick={() => {setActiveSection(label.toLowerCase()); handleScroll(label.toLowerCase())}}
            className="group -translate-y-0.25 w-9 h-9 md:w-14 md:h-14 flex items-center justify-center rounded-full text-muted transition-all"
            aria-label={label}
          >
            <span
              className="relative group-hover:text-[#dfdddd] text-xs font-medium bg-black/45 p-2 rounded-2xl border border-border border-2 transition-all duration-450"
              style={{
                borderColor: activeSection === label.toLowerCase() ? "#9f9f9f" : undefined,
                color: activeSection === label.toLowerCase() ? "#dfdddd" : undefined,
              }}
            >
              {Icon}

              {activeSection == label.toLowerCase() && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#dfdddd] rounded-full" />
              )}
            </span>
          </button>
        ))}
      </nav>
    </motion.div>
  );
}
