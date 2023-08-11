import { useAppDispatch } from "src/hooks/state";
import { setSelectedPage } from "src/store/navbarSlice";
import { BenefitType, SelectedPage } from "src/utility/types";

import { flexBetween } from "src/utility/commonStyles";

import { motion } from "framer-motion";

import { ActionButton, HText } from "src/shared";

import BenefitsData from "./BenefitsArrayData";
import Benefit from "./Benefit";

import BenefitsPageGraphic from "src/assets/BenefitsPageGraphic.jpg";

// Benefits List Framer Motion
const benefitListContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, duration: 0.5 }, // stagger each Benefit
  },
};

function Benefits() {
  const dispatch = useAppDispatch();
  const highlightTab = () => dispatch(setSelectedPage(SelectedPage.Benefits));

  return (
    <section id="benefits" className="mx-auto mb-10 min-h-full w-5/6 py-10">
      <motion.div onViewportEnter={highlightTab}>
        {/* HEADER */}
        <motion.div
          className="md:my-5 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Why our program?</HText>
          <p className="my-5 text-sm">
          Participating in an entrepreneurship class offers a plethora of invaluable benefits that extend far beyond the confines of the classroom. Aspiring entrepreneurs engage in a dynamic learning environment where they cultivate essential skills such as creative thinking, strategic planning, and effective problem-solving.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className={`md:${flexBetween} mt-5 gap-8`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={benefitListContainer}
        >
          {BenefitsData.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </motion.div>

        {/* GRAPHIC AND DESCRIPTION */}
        <div className="mt-16 gap-20 md:mt-28 md:flex md:items-center md:justify-between">
          {/* GRAPHIC */}
          <div className="graphic-container mb-32">
            <img
              className="mx-auto"
              src={BenefitsPageGraphic}
              alt="benefits-page-graphic"
            />
          </div>

          {/* DESCRIPTION */}
          <div className="md:basis-1/2">
            {/* DESCRIPTION TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>.
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION TEXT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Participant gain a comprehensive understanding of business fundamentals, honing their abilities in market analysis, financial management, and marketing strategies. The class serves as a launchpad for fostering an entrepreneurial mindset, nurturing qualities like resilience, adaptability, and a willingness to embrace calculated risks. 
              <p className="mb-5">
                Furthermore, students are equipped with the art of persuasive communication, mastering the art of pitching ideas and crafting compelling business plans. Beyond skill acquisition, the entrepreneurship class creates a fertile ground for networking, connecting individuals with like-minded peers, mentors, and industry professionals, thus facilitating potential collaborations and partnerships. Ethical considerations and social responsibility are woven into the fabric of these classes, emphasizing the importance of sustainable and impactful business practices. 
              </p>
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles md:before:-right-16">
                <ActionButton>Join Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
