import { FileText, Github, Linkedin, Send } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center pt-6 md:pt-10 pb-10 ml-4 mr-4 md:mx-0 scroll-mt-28" id="home">
      <div className="flex flex-col gap-8">
        {/* Status chip */}
        <div className="flex">
          <div className="flex items-center gap-2 bg-muted/10 border border-border rounded-full pl-3 pr-4 py-1.5 w-fit">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full w-2 h-2 bg-green-400" />
            </span>
            <p className="text-xs md:text-sm text-white/70">
              Open to SDE roles · Bangalore · Pune · Hyderabad
            </p>
          </div>
        </div>

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
        <div className="md:pt-1 flex flex-col gap-4">
          <p className="text-white/80 font-medium">
            Full-stack engineer · Builds for real clients · Applied AI
          </p>
          <p className="md:w-160 text-white/70 leading-6 md:leading-7 text-left md:text-justify">
            I build full-stack products end to end: a{" "}
            <span className="bg-white/15 px-1 rounded-sm text-white/80">
              POS system running a retail store
            </span>{" "}
            (90–100 sales a day), now being extended into an{" "}
            <span className="bg-white/15 px-1 rounded-sm text-white/80">
              e-commerce platform
            </span>{" "}
            for the same client, and a{" "}
            <span className="bg-white/15 px-1 rounded-sm text-white/80">
              bilingual recruitment platform
            </span>{" "}
            as a full-stack intern.{" "}
            <span className="bg-white/15 px-1 rounded-sm text-white/80">
              12+ hackathon wins
            </span>
            , including a project awarded by the{" "}
            <span className="bg-white/15 px-1 rounded-sm text-white/80">
              Vice President of India
            </span>{" "}
            and a{" "}
            <span className="bg-white/15 px-1 rounded-sm text-white/80">
              Google Solution Challenge top-106
            </span>{" "}
            finish.
          </p>
          <p className="text-muted text-sm">
            Currently → Full-stack intern at FAEDA, building a bilingual
            recruitment platform
          </p>
        </div>

        {/* Resume + socials */}
        <div className="flex flex-col select-none gap-4 justify-center items-center">
          {/* Resume - primary CTA */}
          <a
          href="/resume.pdf" target="_blank"
          className="bg-white/90 group cursor-pointer flex gap-2 p-4 rounded-xl justify-center items-center w-full hover:bg-white transition-colors duration-300">
            <FileText className="text-black w-5 h-5" />
            <p className="text-black font-medium">
              Resume
            </p>
          </a>

          <div className="grid grid-cols-2 gap-4 w-full cursor-pointer">
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
              <p className="md:text-white/60 translate-y-[1px] text-white/85 group-hover:text-blue-500 transition-colors duration-500">
                Linkedin
              </p>
            </a>
          </div>

            {/* connect with me.. mail scroll or just redirect to mail */}
          <a
          href="mailto:programmeruzair@gmail.com"
          className="bg-muted/10 w-full cursor-pointer group flex gap-2 p-4 rounded-xl justify-center items-center">
            <Send className=" group-hover:translate-x-[165px]  transition-all duration-550"/>
            <p className="md:text-white/60 text-white/85 group-hover:text-white/95 transition-colors duration-550">
              <span className="group-hover:text-blue-400/80 text-blue-400/80 transition-colors md:text-white/75 duration-500">Connect</span> With me!
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
