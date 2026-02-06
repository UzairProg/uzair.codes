import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eye } from "lucide-react";
import { useMediaQuery } from "../../hooks/useMediaQuery.jsx";



const Card = ({ title, description, date, source, i, link }) => {
    const isDesktop = useMediaQuery("(min-width: 768px)")
    // console.log(source)
  const container = useRef(null);
//   container.src = "/Images/Profile/pfp.jpeg";
  const { scrollYProgress } = useScroll({
    target: container,
    // offset: ["start end", "start start"] // start: when the top of the container hits the bottom of the viewport,and end:  when top of the container hits the top of the viewport.
    offset: ["end end", "start 40%"],
  });
  // const scale = useTransform(scrollYProgress, [0, 1], [2,1]);
  const grayscale = useTransform(
    scrollYProgress,
    [0, 1],
    ["grayscale(100%)", "grayscale(0%)"],
  );

  return (
    <div
      className="min-h-lvh flex justify-center items-center sticky -top-5"
      style={{ top: isDesktop ? `${-50 + 15 * i}px` : `${55 + 1 * i}px` }}
    >
      <div // bg-surface/20
        className={` bg-linear-to-r from-surface/20 to-blue-500/20 mx-10 md:h-100 backdrop-blur-xl md:w-200 mt-10 rounded-2xl flex flex-col md:flex-row p-6 gap-2 border-border border-2  transition-all duration-500`}
      >
        {/* half and half.. title and desc on left */}
        <div className="">
          <h3 className="text-2xl font-semibold text-white/80">{title}</h3>
          <p className="text-sm text-white/50 mt-2">{date}</p>
          <p className="text-white/50  mt-3">{description}</p>
          {isDesktop && <a href={link} target="_blank" className="flex group justify-center border w-2/3 mt-6 border-border  items-center bg-black/40 gap-2 p-2 rounded-full  transition-all duration-300">
            <Eye className=" w-6 h-6 text-muted group-hover:text-blue-500/60" />
            <p className="text-sm text-muted group-hover:border-blue-600/40">View Post</p>
          </a>}
        </div>

        {/* right part- image*/}
        <a
          href={link} target="_blank"
          ref={container}
          className="overflow-hidden group rounded-2xl md:pl-10 cursor-pointer flex items-center "
        >
          <motion.img
            src={source}
            className=" rounded-xl will-change-[filter]"
            style={{ filter: isDesktop ? grayscale : "none" }}
          />
          
          
        </a>
      </div>
    </div>
  );
};

export default Card;
