import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from 'components/header';
import { Section } from 'components/section';
import pawtreonStyleGuide from './pawtreon-images/pawtreon-style-guide.png';
import pawtreonPrototype from './pawtreon-images/pawtreon-prototype.png';
import pawtreonUsabilityTesting from './pawtreon-images/pawtreon-usability-testing.png';
import pawtreonChanges1 from './pawtreon-images/pawtreon-changes-1.png';
import pawtreonChanges2 from './pawtreon-images/pawtreon-changes-2.png';
import pawtreonFinal from './pawtreon-images/pawtreon-final.png';

export const PawtreonPrototype = () => {
  return (
    <>
      <Header id="prototype-and-test" title="Prototype & Test" />

      <Section heading="Branding">
        <p>
          A style guide and component library were created to ensure consistency
          across the application. This included defining typography styles,
          color usage, iconography, and reusable UI components. The style guide
          helped streamline the design process and enabled efficient
          collaboration between the design and development teams.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={pawtreonStyleGuide}
            alt="Pawtreon Style Guide"
            className="w-full max-w-1192"
          />
        </div>
      </Section>
      <Section heading="Prototype">
        <p>
          Using the visual design language and the established UI components, I
          created high-fidelity mockups for all key screens. Then, using these
          mockups, I made a clickable prototype that would be utilized in user
          testing. This prototype showcased the final look and feel of the
          application.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={pawtreonPrototype}
            alt="Pawtreon Style Guide"
            className="w-full max-w-[441px]"
          />
        </div>

        <div className="flex w-full justify-center">
          <motion.a
            className="my-32 flex h-100 w-fit max-w-[285px] items-center justify-center rounded-full bg-eggplant-medium px-32 text-center text-24 font-bold text-white sm:mb-72"
            whileHover={{ scale: 1.05 }}
            href="https://www.figma.com/proto/8sjIGCi2yyvj8VOEDHGzWz/Pawtreon?page-id=227%3A6223&type=design&node-id=227-8210&viewport=721%2C191%2C0.15&t=7qC8v6v9gIMrraxk-1&scaling=scale-down&starting-point-node-id=227%3A8210&mode=design"
          >
            View Prototype
          </motion.a>
        </div>
      </Section>

      <Section heading="Usability Testing">
        <p>
          Following the development of high-fidelity mockups, a usability
          testing session was conducted using a clickable prototype created from
          these mockups. The usability test took place on Maze.co and involved
          six tasks that users were asked to complete. The primary objective was
          to evaluate the user experience and identify any potential usability
          issues or pain points.
        </p>
        <p>
          All six tasks were successfully completed by the participants, with
          three tasks achieving a direct success rate of 83% and the remaining
          three tasks achieving a direct success rate of 100%. The results
          demonstrated that the design and interaction choices implemented in
          the prototype were generally effective in enabling users to accomplish
          their goals.
        </p>
        <p>
          Feedback collected through user interviews and questionnaires provided
          valuable insights for improving the user experience. Some key feedback
          included the need to redesign the checkout screen by adding a back
          button for improved navigation. Additionally, certain interactions
          within the app were identified as areas for refinement based on user
          suggestions.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={pawtreonUsabilityTesting}
            alt="Pawtreon Usability Testing"
            className="w-full max-w-[1192px]"
          />
        </div>

        <p>
          By actively listening to user feedback and addressing their
          suggestions, Pawtreon was able to make small yet impactful changes
          that enhanced the usability and overall effectiveness of the
          application.
        </p>

        <div className="flex w-full flex-col items-center justify-center py-48">
          <Image
            src={pawtreonChanges1}
            alt="Tri County Prototypes Changes"
            className="w-full max-w-[847px] pb-36"
          />
          <Image
            src={pawtreonChanges2}
            alt="Tri County Prototypes Changes"
            className="w-full max-w-[847px]"
          />
        </div>
      </Section>

      <Section heading="Final Interactive Prototype">
        <p>
          Despite Pawtreon not being a live application, I successfully
          completed a comprehensive design process. Through user research,
          competitive analysis, and iterative design, I created visually
          appealing and engaging high-fidelity mockups. Usability testing on a
          clickable prototype validated the design choices, with participants
          achieving successful task completion rates and providing valuable
          feedback for improvements. Despite the constraints of being a
          one-person team, this case study serves as a blueprint for future
          development, demonstrating the potential of Pawtreon to increase
          donations to animal shelters and provide a rewarding user experience.
        </p>

        <div className="flex w-full justify-center pb-32 pt-48">
          <Image
            src={pawtreonFinal}
            alt="Pawtreon Final Prototype"
            className="w-full max-w-[441px]"
          />
        </div>

        <div className="flex w-full justify-center">
          <motion.a
            className="my-32 flex h-100 w-fit max-w-[315px] items-center justify-center rounded-full bg-eggplant-medium px-32 text-center text-24 font-bold text-white sm:mb-72"
            whileHover={{ scale: 1.05 }}
            href="https://www.figma.com/proto/8sjIGCi2yyvj8VOEDHGzWz/Pawtreon?page-id=325%3A3906&type=design&node-id=325-4412&viewport=268%2C-63%2C0.46&t=o1iByJE913XYu9c6-1&scaling=scale-down&starting-point-node-id=325%3A4412&mode=design"
          >
            Final Prototype
          </motion.a>
        </div>
      </Section>
    </>
  );
};
