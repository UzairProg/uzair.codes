import { Github, Linkedin, Send } from "lucide-react";
import React from "react";

const icons = {
  Github: <Github />,
  LinkedIn: <Linkedin />,
  Email: <Send />,
};

const Home = () => {
  return (
    <div className="h-screen flex justify-center pt-6 md:pt-10 ml-4 mr-4 md:mx-0">
      <div className="flex flex-col gap-8">
        {/* Image and Name */}
        <div className="flex  gap-4 justify-start items-center">
          <div className="md:w-34 md:h-34 w-28 h-28 overflow-hidden rounded-full md:grayscale-60 hover:grayscale-0 transition-all duration-500">
            <img
              src="/Images/Profile/pfp.jpeg"
              alt="Profile Image"
              className="w-full h-full rounded-full object-cover object-[50%_75%] scale-120"
            />
          </div>
          <h2 className="md:text-6xl text-4xl font-semibold text-white/90">
            Uzair <br /> Mohammad
          </h2>
        </div>

        {/* Description abt uzairr */}
        <div className="md:pt-1 flex flex-col gap-6">
          <p className="text-white/80 font-medium">
            Software Engineer · Backend & Full Stack · Applied AI & Systems
          </p>
          <p className="md:w-160 text-white/70 leading-6 md:leading-7 text-justify">
            My journey started with{" "}
            <span className="bg-white/15 px-1 rounded-sm text-white/80">
              full-stack development
            </span>
            , evolved into{" "}
            <span className="bg-white/15 px-1 rounded-sm text-white/80">
              backend engineering
            </span>
            , then discovered how Applied AI could make both more interesting.
            Today I build systems across the stack: Node.js APIs, React
            frontends, MongoDB databases, and{" "}
            <span className="bg-white/15 px-1 rounded-sm text-white/80">
              LLM integrations
            </span>
            . I've shipped{" "}
            <span className="bg-white/15 px-1 rounded-sm text-white/80">
              MERN applications
            </span>
            , built Python backends with FastAPI, and integrated{" "}
            <span className="bg-white/15 px-1 rounded-sm text-white/80">
              GenAI
            </span>{" "}
            into production systems. Constantly learning, constantly building.
          </p>
        </div>

        {/* Links to socials and email me scroll thing*/}
        <div className="grid select-none cursor-pointer grid-rows-2 grid-cols-2 gap-4 justify-center items-center">
          {/* Github */}
          <a 
          href="https://github.com/UzairProg" target="_blank"
          className="bg-muted/10 group flex gap-2 p-4 rounded-xl justify-center items-center">
            <Github />
            <p className="md:text-white/60 text-white/85 group-hover:text-white/95 transition-colors duration-500">
              Github
            </p>
          </a>

            {/* LinkedIn */}
          <a 
          href="https://www.linkedin.com/in/uzair-md" target="_blank"
          className="bg-muted/10  group flex gap-2 p-4 rounded-xl justify-center items-center">
            <Linkedin className="group-hover:text-blue-500 transition-colors duration-500 w-5 h-5 "/>
            <p className="md:text-white/60 translate-y-[1px] text-white/85 group-hover:text-blue-400 transition-colors duration-500">
              Linkedin
            </p>
          </a>

            {/* connect with me.. mail scroll or just redirect to mail */}
          <a 
          href="mailto:programmeruzair@gmail.com"
          className="bg-muted/10 col-span-2 group flex gap-2 p-4 rounded-xl justify-center items-center">
            <Send className=" group-hover:translate-x-[165px]  transition-all duration-550"/>
            <p className="md:text-white/60 text-white/85 group-hover:text-white/95 transition-colors duration-550">
              <span className="group-hover:text-blue-400/80 transition-colors text-white/75 duration-500">Connect</span> With me!
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;