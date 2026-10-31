import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eye } from "lucide-react";
import { useMediaQuery } from "../../hooks/useMediaQuery.jsx";



const Card = ({ title, description, date, source, i, link, prize, linkLabel = "View Post" }) => {
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
        className={` bg-linear-to-r from-surface/20 to-blue-500/20 w-[calc(100%-5rem)] md:max-w-200 mx-auto md:h-100 backdrop-blur-xl mt-10 rounded-3xl flex flex-col md:flex-row p-6 gap-2 border-border border-2 hover:border-white/25  transition-all duration-500`}
      >
        {/* half and half.. title and desc on left */}
        <div className="">
          <h3 className="text-2xl font-semibold text-white/80">{title}</h3>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-sm text-white/50">{date}</p>
            {prize && (
              <span className="text-xs text-blue-300 bg-blue-500/15 border border-blue-500/30 rounded-full px-2 py-0.5">
                {prize}
              </span>
            )}
          </div>
          <p className="text-white/70 mt-3 text-left md:text-justify">{description}</p>
          {link && (isDesktop || !source) && <a href={link} target="_blank" className="flex group justify-center border w-2/3 mt-6 border-border  items-center bg-black/40 gap-2 p-2 rounded-full  transition-all duration-300">
            <Eye className=" w-6 h-6 text-muted group-hover:text-blue-500/60 transition-all duration-300" />
            <p className="text-sm text-muted group-hover:text-white/60 transition-colors duration-300">{linkLabel}</p>
          </a>}
        </div>

        {/* right part- image*/}
        {source && (
          <a
            href={link} target="_blank"
            ref={container}
            className="overflow-hidden group rounded-2xl md:pl-10 cursor-pointer flex items-center "
          >
            <motion.img
              src={source}
              loading="lazy"
              className=" rounded-xl will-change-[filter]"
              style={{ filter: isDesktop ? grayscale : "none" }}
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
