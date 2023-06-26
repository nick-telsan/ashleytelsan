import { motion } from 'framer-motion';

export const TriCountyOverview = () => {
  return (
    <div className="flex w-full flex-col items-center bg-eggplant-lighter px-32 py-48 md:px-124">
      <h2 className="text-center text-36 font-bold">Project Overview</h2>
      <div className="flex max-w-1192 grid-cols-2 flex-wrap gap-64 md:grid">
        <div className="flex flex-col gap-16 pt-16 sm:gap-48 sm:pt-48">
          <section className="flex flex-col gap-16">
            <h3 className="text-32 font-bold">Problem</h3>
            <p>
              Tri County Appliance Repair currently does not have a website or
              branding at the moment.
            </p>
          </section>

          <section className="flex flex-col gap-16">
            <h3 className="text-32 font-bold">Objectives</h3>
            <ul className="list-inside list-disc">
              <li>
                Create a responsive website that scales down well to a mobile
                site
              </li>
              <li>Have a form that customers can request a repair online</li>
              <li>
                Ensure customers can access the relevant company information
                that they made need
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-16">
            <h3 className="text-32 font-bold">Solution</h3>
            <p>
              Create a simple and straightforward website that is responsive and
              accessible to their audience. 
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
          href="https://tricountyappliancerepair.webflow.io/"
        >
          View Website
        </motion.a>
      </div>
    </div>
  );
};
