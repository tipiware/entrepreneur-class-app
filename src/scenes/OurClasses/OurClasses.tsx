import { useAppDispatch } from "src/hooks/state";
import { setSelectedPage } from "src/store/navbarSlice";
import { GymClassType, SelectedPage } from "src/utility/types";

import { motion } from "framer-motion";
import { HText } from "src/shared";

import GymClassesData from "./GymClassesData";
import GymClass from "./GymClass";

const OurClasses = () => {
  const dispatch = useAppDispatch();
  const highlightTab = () => dispatch(setSelectedPage(SelectedPage.OurClasses));
  return (
    <section id="ourclasses" className="h-full w-full bg-primary-100 py-20">
      <motion.div onViewportEnter={highlightTab}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-5">
            Unlock your entrepreneurial potential at our comprehensive program designed for all levels– from Level 1 beginners exploring the world of entrepreneurship, to Level 2 intermediate learners honing their business skills, and Level 3 advanced participants ready to transform innovative ideas into successful ventures. Join us on this transformative journey and turn your dreams into reality!"
            </p>
          </div>
        </motion.div>
        {/* GYM CLASSES SLIDER */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {GymClassesData.map((item: GymClassType, index) => (
              <GymClass
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
