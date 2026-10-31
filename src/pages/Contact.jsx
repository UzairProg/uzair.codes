import { SiGithub } from "@icons-pack/react-simple-icons";
import { Copy, CopyCheck, FileText, Linkedin, Mail } from "lucide-react";
import React from "react";
import Typewriter from "typewriter-effect";
import FeedbackCard from "../components/Contact/FeedbackCard";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Contact = () => {
  const [copied, setCopied] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleCopy = async () => {
    setCopied(true);
    try {
      await navigator.clipboard.writeText("Programmeruzair@gmail.com");

      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col justify-center-safe mt-20 items-center min-h-screen gap-10 mx-auto px-4 pb-10 -scroll-mt-20"
    >
      {/* typewritter some texts here.. will look cool */}
      <div className="text-3xl text-white/80 h-12">
        <Typewriter
          options={{
            strings: [
              "Connect with me.",
              "Say Hi!",
              "await response();",
              "Start a conversation",
              'Reach out.',
            ],
            autoStart: true,
            loop: true,
            delay: 45,
            deleteSpeed: 25,
          }}
        />
      </div>

      <div className="grid grid-rows-2 grid-cols-2 gap-x-5 gap-y-3 w-full md:w-1/2">
        {/* copy email */}
        <div
          onClick={handleCopy}
          className="bg-[#080808] group flex gap-2 px-4 py-3 rounded-xl justify-center max-h-min items-center cursor-pointer select-none border-2 border-border hover:border-blue-500/30 transition-colors duration-300"
        >
          {!copied ? (
            <Copy size={22} className="text-muted/80 group-hover:text-blue-500/80 transition-colors duration-500" />
          ) : (
            <CopyCheck size={22} className="text-green-500/80 transition-colors duration-500" />
          )}

          <p className="md:text-white/60 text-white/85 group-hover:text-white/90 transition-colors duration-500">
            Copy Email
          </p>
        </div>

          {/* dm me.. linkedin dm direct link.. easy to dm */}
        <a
          href={isMobile ? "https://www.linkedin.com/in/uzair-md" : "https://www.linkedin.com/messaging/thread/new/?recipient=uzair-md"}
          target="_blank"
          className="bg-[#080808] group flex gap-2 px-4 py-3 rounded-xl justify-center items-center cursor-pointer select-none border-2 border-border hover:border-blue-500/30 transition-colors duration-300 "
        >
            
          <Linkedin size={22} className="text-muted/80 group-hover:text-blue-500/80 transition-colors duration-500" />

          <p className="md:text-white/60 text-white/85 group-hover:text-white/90 transition-colors duration-500">
            DM Me
          </p>
        </a>

          {/* github */}
          <a
          href="https://github.com/UzairProg" target="_blank"
          className="bg-[#080808] group flex gap-2 px-4 py-3 rounded-xl justify-center items-center cursor-pointer select-none border-2 border-border hover:border-blue-500/30 transition-colors duration-300 "
        >
            
          <SiGithub size={22} className="text-muted/80 group-hover:text-blue-500/80 transition-colors duration-500" />

          <p className="md:text-white/60 text-white/85 group-hover:text-white/90 transition-colors duration-500">
            Github
          </p>
        </a>

          {/* resume */}
          <a
          href="https://drive.google.com/file/d/1gYr3vPG0nXEFob2Wa_oD84-QBKKrQUfD/view?usp=sharing" target="_blank"
          className="bg-[#080808] group flex gap-2 px-4 py-3 rounded-xl justify-center items-center cursor-pointer select-none border-2 border-border hover:border-blue-500/30 transition-colors duration-300 "
        >
            
          <FileText size={22} className="text-muted/80 group-hover:text-blue-500/80 transition-colors duration-500" />

          <p className="md:text-white/60 text-white/85 group-hover:text-white/90 transition-colors duration-500">
            Resume
          </p>
        </a>
      </div>

          {/* feedback section */}
          <div className="w-full md:w-1/2 flex justify-center">
          <FeedbackCard  />
          </div>
    </div>
  );
};

export default Contact;
