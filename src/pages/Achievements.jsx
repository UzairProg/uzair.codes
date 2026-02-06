import React from "react";
import Card from "../components/Achievement/Card";
import Typewriter from "typewriter-effect";
import { useMediaQuery } from "../hooks/useMediaQuery.jsx";
import { Linkedin, Github } from "lucide-react";
import {achievements} from "../components/Achievement/achievements.js";

const Achievements = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div className="flex md:flex-row flex-col relative justify-center scroll-mt-32" id="achievements">
      <div className="md:w-1/3 py-10 sticky top-0 left-0 flex flex-col justify-center gap-4 md:gap-6 ml-10 text-2xl items-start md:h-screen">
        <div className="text-3xl md:text-6xl text-white/80">Achievements</div>
        <div className="text-white/70 h-18 mb-10">
          <Typewriter
            options={{
              strings: [
                "10+ Hackathon Wins 🏆 Across National & State Levels",
                "Project HAWK Awarded by the Vice President of India",
                "Smart India Hackathon (SIH) 2025 Finalist.",
                "Multiple 1st & 2nd Prizes in Competitive Tech Hackathons",
                "Turning Ideas into Winning, Real-World Solutions",
              ],
              autoStart: true,
              loop: true,
              delay: 45,
              deleteSpeed: 25,
            }}
          />
        </div>

        {isDesktop && (
          <div className="flex flex-col gap-4 items-start">
            <p className="text-muted">Know more About Me!</p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/uzair-md" target="_blank" className="w-12 group h-12 p-2 rounded-full bg-muted/20 flex items-center justify-center hover:bg-muted/30 transition-all duration-300">
                <Linkedin className="text-muted group-hover:text-blue-500/80 transition-all duration-300" />
              </a>
              <a href="https://github.com/UzairProg" target="_blank" className="w-12 group h-12 p-2 rounded-full bg-muted/20 flex items-center justify-center hover:bg-muted/30 transition-all duration-300">
                <Github className="text-muted group-hover:text-blue-500/80 transition-all duration-300" />
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="min-h-lvh flex flex-col justify-center items-center md:w-2/3">
        {achievements.map(
          ({ title, description, date, link, source, color }, idx) => {
            return (
              <Card
                key={idx}
                i={idx}
                title={title}
                description={description}
                date={date}
                link={link}
                source={source}
                color={color}
              />
            );
          },
        )}
      </div>
    </div>
  );
};

export default Achievements;
