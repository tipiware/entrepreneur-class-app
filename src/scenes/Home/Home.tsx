import { useAppDispatch } from "src/hooks/state";
import { determineAboveMediumScreens } from "src/hooks/useMediaQuery";
import { setSelectedPage } from "src/store/navbarSlice";
import { SelectedPage } from "src/utility/types";

import { ActionButton, ActionLink } from "src/shared";
import { motion } from "framer-motion";

// import HomePageText from "src/assets/HomePageText.png";
import HomePageGraphic from "src/assets/HomePageGraphic.png";
import badge1 from "src/assets/badge1.jpg";
import badge2 from "src/assets/badge2.jpg";
import badge3 from "src/assets/badge3.jpg";
import badge4 from "src/assets/badge4.jpg";
import badge5 from "src/assets/badge5.jpg";
import badge6 from "src/assets/badge6.jpg";
import badge7 from "src/assets/badge7.jpg";


const Home = () => {
  const dispatch = useAppDispatch();
  const isAboveMediumScreens = determineAboveMediumScreens();

  const highlightTab = () => dispatch(setSelectedPage(SelectedPage.Home));

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={highlightTab}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-16 md:mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true, // Animation occurs only once -- initiated by being in view
              amount: 0.5, // See 50% before animation plays
            }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 }, // initial, (default: px units)
              visible: { opacity: 1, x: 0 }, // once visible
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-10 before:-left-10 before:z-[-1] before:opacity-30 md:before:content-spartantext">
                <h1 className="font-alegreya text-5xl font-extrabold sm:whitespace-nowrap sm:text-6xl">
                  Entrepreneurship Class
                </h1>
                <h2 className="font-alegreya text-3xl font-thin italic sm:text-4xl">
                  Nurturing the Spirit of Innovation and Enterprise
                </h2>
                {/* <img alt="home-page-text" src={HomePageText} /> */}
              </div>
            </div>

            <p className="mt-8 text-sm">
            In a rapidly evolving global landscape, the role of entrepreneurs has never been more vital. An entrepreneurship class serves as a transformative platform where aspiring individuals can harness their innovative ideas, cultivate essential skills, and embark on a journey towards creating impactful businesses.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true, // Animation occurs only once -- initiated by being in view
              amount: 0.5, // See 50% before animation plays
            }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 }, // initial, (default: px units)
              visible: { opacity: 1, x: 0 }, // once visible
            }}
          >
            <ActionButton>Join Now</ActionButton>
            <ActionLink>
              <p>Learn More</p>
            </ActionLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-5 md:mt-16"
        >
          <img className="" alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[160px] bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="badge1" src={badge1} />
              <img alt="badge2" src={badge2} />
              <img alt="badge3" src={badge3} />
              <img alt="badge4" src={badge4} />
              <img alt="badge5" src={badge5} />
              <img alt="badge6" src={badge6} />
              <img alt="badge7" src={badge7} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
