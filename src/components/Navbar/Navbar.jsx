import { Compass, FolderKanban, Layers, Mail, Trophy } from "lucide-react";
import React from "react";
import { easeInOut, motion } from "framer-motion";

const icons = {
  Home: <Compass />,
  Projects: <FolderKanban />,
  Experience: <Trophy />,
  TechStack: <Layers />,
  Contact: <Mail />,
};

export default function Navbar() {
  const [activeSection, setActiveSection] = React.useState("Home");
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
            onClick={() => setActiveSection(label)}
            className="group -translate-y-0.25 w-9 h-9 md:w-14 md:h-14 flex items-center justify-center rounded-full text-muted transition-all"
            aria-label={label}
          >
            <span
              className="relative group-hover:text-[#dfdddd] text-xs font-medium bg-black/45 p-2 rounded-2xl border border-border border-2 transition-all duration-450"
              style={{
                borderColor: activeSection === label ? "#9f9f9f" : undefined,
                color: activeSection === label ? "#dfdddd" : undefined,
              }}
            >
              {Icon}

              {activeSection === label && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#dfdddd] rounded-full" />
              )}
            </span>
          </button>
        ))}
      </nav>
    </motion.div>
  );
}
