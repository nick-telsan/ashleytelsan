import { motion } from 'framer-motion';

export const PawtreonOverview = () => {
  return (
    <div className="flex w-full flex-col items-center bg-eggplant-lighter px-32 py-48 md:px-124">
      <h2 className="text-center text-36 font-bold">Project Overview</h2>
      <div className="flex max-w-1192 grid-cols-2 flex-wrap gap-64 md:grid">
        <div className="flex flex-col gap-16 pt-16 sm:gap-48 sm:pt-48">
          <section className="flex flex-col gap-16">
            <h3 className="text-32 font-bold">Problem</h3>
            <p>
              The existing donation process on local animal shelters&apos;
              website were not very intuitive, resulting in a low conversion
              rate.
            </p>
          </section>

          <section className="flex flex-col gap-16">
            <h3 className="text-32 font-bold">Objectives</h3>
            <ul className="list-inside list-disc">
              <li>
                Create an app that allows users to donate to multiple shelters
              </li>
              <li>Have rewards viewable from the web app</li>
              <li>Allow users can manage subscriptions from the web app</li>
            </ul>
          </section>

          <section className="flex flex-col gap-16">
            <h3 className="text-32 font-bold">Solution</h3>
            <p>
              An application that allows donors to donate to multiple animal
              shelters while offering rewards that could be customized by each
              animal shelter.
            </p>
          </section>
        </div>

        <div className="flex flex-col gap-16 pt-16 sm:gap-48 sm:pt-48">
          <section className="flex flex-col gap-16">
            <h3 className="text-32 font-bold">Responsibilities</h3>
            <p>UX Designer, UI Designer</p>
          </section>

          <section className="flex flex-col gap-16">
            <h3 className="text-32 font-bold">Tools</h3>
            <p>Figma, FigJam, Google Forms, Maze</p>
          </section>

          <section className="flex flex-col gap-16">
            <h3 className="text-32 font-bold">Team</h3>
            <p>Self Directed, with feedback from the mentor and peers</p>
          </section>

          <section className="flex flex-col gap-16">
            <h3 className="text-32 font-bold">Duration</h3>
            <p>4 Weeks</p>
          </section>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <motion.a
          className="my-32 flex h-100 w-fit items-center justify-center rounded-full bg-eggplant-medium px-32 text-32 font-bold text-white sm:mb-72"
          whileHover={{ scale: 1.05 }}
          href="https://www.figma.com/proto/8sjIGCi2yyvj8VOEDHGzWz/Pawtreon?page-id=325%3A3906&type=design&node-id=325-4412&viewport=268%2C-63%2C0.46&t=o1iByJE913XYu9c6-1&scaling=scale-down&starting-point-node-id=325%3A4412&mode=design"
        >
          View Prototype
        </motion.a>
      </div>
    </div>
  );
};
