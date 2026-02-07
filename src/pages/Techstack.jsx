import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "../components/Techstack/Card";
import { SiGithub } from "@icons-pack/react-simple-icons";
import {
  techStackFrontendData,
  techStackBackendData,
  databaseData,
  aiAndAutomationData,
  devToolsData,
  deploymentData,
} from "../data/techstack";

const Techstack = () => {
  const container = useRef(null); // targetted container!! jiske basis pr scroll perform hoga
  const frontendConstraints = useRef(null); // drag constraint for frontend cards
  const backendConstraints = useRef(null); // drag constraint for backend cards
  const aiConstraints = useRef(null); // drag constraint for AI cards
  const toolsConstraints = useRef(null); // drag constraint for tools cards
  const deploymentConstraints = useRef(null); // drag constraint for deployment cards
  const { scrollYProgress } = useScroll({
    /* scrollYProgress - it just returns values in range of 0 to 1 */
    target: container,
    offset: ["start start", "end end"],
    /*animation kab: [start krna hai, end krna hai] */
    /* start: jab start1 - continer ka start.. start2 - start of the viewport screen ko touch/hit kre 
   end: end1 - jab end of the container... end2 - end of of viewport/screen ko hit kreee.. simple
*/
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-250%"]);

  return (
    <div ref={container} id="techstack" className="h-[300lvh]  py-10">
      {" "}
      {/* parent div.. 300lvh-3screen.. as we keep parent height bigger for sticky scroll */}
      {/* now here, 3 pages of h-screen and w-screen full inside a div.. so flex itll be horizontally aligned one after other*/}
      {/* had to add a wrapper container to add overflow-hidden!! notee never add overflow hidden to the main parent ref diff.. stick will not work */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {" "}
        {/* sticky div to make it stick on scroll */}
        <motion.div style={{ x }} className="flex  w-screen top-0 gap-10">
          {/* div 1 */}
          <div className="bg-linear-to-r from-muted/15 to-blue-300/20 h-screen w-[100lvw] shrink-0 pt-6 px-6 md:p-16 rounded-2xl border-t-6 border-blue-400/20">
            <div className="text-muted">
              <h4 className="md:text-6xl text-4xl">01. Core Development</h4>

              {/* main content */}
              <div className="flex flex-col justify-center h-full mt-6 p-2">
                {/* frontend */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-3xl">Frontend</h3>
                  {/* stacks */}
                  <div
                    ref={frontendConstraints}
                    className="flex flex-wrap gap-4  md:w-2/3 py-2 px-4"
                  >
                    {techStackFrontendData.map((item, index) => (
                      <motion.div
                        key={index}
                        drag
                        dragConstraints={frontendConstraints}
                      >
                        <Card title={item.title} Icon={item.Icon} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* backend */}
                <div className="flex flex-col gap-4 mt-10">
                  <h3 className="text-3xl">Backend</h3>
                  {/* stacks */}
                  <div
                    ref={backendConstraints}
                    className="flex flex-wrap gap-4  md:w-2/3 py-2 px-4"
                  >
                    {techStackBackendData.map((item, index) => (
                      <motion.div
                        key={index}
                        drag
                        dragConstraints={backendConstraints}
                      >
                        <Card title={item.title} Icon={item.Icon} />
                      </motion.div>
                    ))}
                    {databaseData.map((item, index) => (
                      <motion.div
                        key={index}
                        drag
                        dragConstraints={backendConstraints}
                      >
                        <Card title={item.title} Icon={item.Icon} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* div 2 */}
          <div className="bg-linear-to-r from-muted/15 to-purple-300/20 h-screen w-[110lvw] shrink-0 rounded-2xl border-t-6 border-l-4 border-purple-400/20">
            <div className="text-muted p-6 md:p-16 md:pl-22">
              <h4 className="md:text-6xl text-4xl">02. AI & Automation</h4>
              <div className="flex flex-col justify-center h-full mt-6 p-2">
                <div className="flex flex-col gap-4 p-2">
                  <h3 className="text-3xl">Applied AI Stack</h3>
                  {/* stacks */}
                  <div
                    ref={aiConstraints}
                    className="flex flex-wrap gap-4 md:w-2/3  py-2 px-4"
                  >
                    {aiAndAutomationData.map((item, index) => (
                      <motion.div
                        key={index}
                        drag
                        dragConstraints={aiConstraints}
                      >
                        <Card title={item.title} Icon={item.Icon} />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-white/60 text-sm md:text-xl leading-relaxed w-2/3 mt-6">
                    I work on applied GenAI systems where AI is part of a larger
                    backend workflow. My focus is on building reliable pipelines
                    with validation, confidence checks, and safe integration
                    rather than standalone model demos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* div 3 */}
          <div className="bg-linear-to-r from-blue-300/20 to-purple-300/20 h-screen w-[110lvw] shrink-0 rounded-2xl border-t-6 border-l-4 border-purple-400/20">
            <div className="text-muted p-6 md:p-16 md:pl-22">
              <h4 className="md:text-6xl text-4xl">
                03. Version Control & Deployment
              </h4>
              <div className="flex flex-col justify-center h-full mt-6 p-2">
                <div className="flex flex-col gap-4 p-2">
                  <h3 className="text-3xl">Tools & Platforms</h3>
                  {/* stacks */}
                  <div
                    ref={toolsConstraints}
                    className="flex flex-wrap gap-4 md:w-2/3  py-2 px-4"
                  >
                    {devToolsData.map((item, index) => (
                      <motion.div
                        key={index}
                        drag
                        dragConstraints={toolsConstraints}
                      >
                        <Card title={item.title} Icon={item.Icon} />
                      </motion.div>
                    ))}
                  </div>

                  <h3 className="text-3xl">Deployment</h3>
                  <div
                    ref={deploymentConstraints}
                    className="flex flex-wrap gap-4 md:w-2/3  py-2 px-4 justify-between"
                  >
                    {deploymentData.map((item, index) => (
                      <motion.div
                        key={index}
                        drag
                        dragConstraints={deploymentConstraints}
                      >
                        <Card title={item.title} Icon={item.Icon} />
                      </motion.div>
                    ))}
                  <motion.p drag dragConstraints={deploymentConstraints} className="text-white/60 cursor-grab active:cursor-grabbing text-sm md:text-lg leading-relaxed w-2/3 mt-6">I follow clean development workflows with version control, structured debugging, and documentation. I prioritize maintainability and clarity so systems are easy to extend and debug.</motion.p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Techstack;
