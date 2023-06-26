import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from 'components/header';
import { Section } from 'components/section';
import triCountyLowFideltyPorotype from './tri-county-images/tri-county-low-fidelity-prototype.png';
import triCountyUsabilityTesting from './tri-county-images/tri-county-usability-testing.png';
import triCountyPrototypeChanges from './tri-county-images/tri-county-prototype-changes.png';
import triCountyMoodboard from './tri-county-images/tri-county-moodboard.png';
import triCountyStyleTile from './tri-county-images/tri-county-style-tile.png';
import triCountyFinalProduct from './tri-county-images/tri-county-final-product.png';

export const TriCountPrototype = () => {
  return (
    <>
      <Header id="prototype-and-test" title="Prototype & Test" />

      <Section heading="Low Fidelity Prototype">
        <p>
          After finalizing the low-fidelity wireframes, I proceeded to create a
          clickable prototype to gather valuable feedback from users regarding
          the design before advancing to the high-fidelity stage. Using Figma, I
          developed an interactive prototype that accurately represented the
          user flow and interactions. To conduct usability testing, I employed
          Maze, a user testing platform, to gather quantitative and qualitative
          data on user interactions and perceptions. This allowed me to identify
          any usability issues, gauge user satisfaction, and make informed
          design decisions as I moved forward with the project.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={triCountyLowFideltyPorotype}
            alt="Tri County Prototype"
            className="w-full max-w-[323px]"
          />
        </div>

        <div className="flex w-full justify-center">
          <motion.a
            className="my-32 flex h-100 w-fit max-w-[285px] items-center justify-center rounded-full bg-eggplant-medium px-32 text-center text-24 font-bold text-white sm:mb-72"
            whileHover={{ scale: 1.05 }}
            href="https://www.figma.com/proto/mVfeKGDPNrHdmZwWCSfotY/Tri-County-Wireframes---Public?page-id=1%3A2&type=design&node-id=17-602&viewport=673%2C133%2C0.33&scaling=scale-down&starting-point-node-id=17%3A602&show-proto-sidebar=1"
          >
            View LoFi Prototype
          </motion.a>
        </div>
      </Section>

      <Section heading="Usability Testing">
        <p>
          After completing the development of the clickable prototype, I
          conducted a usability test using the Maze.co platform. The test
          involved five participants who were tasked with completing three
          specific tasks within the prototype. Additionally, participants were
          asked three follow-up questions to gather their feedback and insights.
          The usability test aimed to evaluate the overall user experience,
          identify any usability issues, and gather user perspectives on the
          design and functionality of the prototype. The results from this test
          will inform further iterations and improvements in the design of the
          interface.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={triCountyUsabilityTesting}
            alt="Tri County Usability Testing"
            className="w-full max-w-[692px]"
          />
        </div>

        <p>
          Based on the findings from the usability test, one notable issue that
          emerged was users difficulty in locating the FAQ section of the
          website. To address this concern and improve the user experience, I
          made the decision to incorporate a dedicated FAQ section on the home
          screen itself. By including the FAQ section prominently on the main
          page, users will have easy and direct access to commonly asked
          questions without having to rely on the hamburger menu for navigation.
          This modification aims to enhance the discoverability and
          accessibility of important information, ultimately improving the
          overall usability and user satisfaction of the website.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={triCountyPrototypeChanges}
            alt="Tri County Prototypes Changes"
            className="w-full max-w-[847px]"
          />
        </div>
      </Section>

      <Section heading="Branding">
        <p>
          For the mood board, I drew inspiration from the team colors of the
          local university. My aim was to create a sense of familiarity and
          connection with the town by incorporating colors that resonate with
          the community. In addition, I placed a strong emphasis on
          accessibility by ensuring that all color combinations adhered to the
          AAA standards. By prioritizing accessibility, I sought to make the
          website inclusive and usable for a wider range of individuals,
          regardless of their visual abilities. The selected colors from the
          university&apos;s team palette, combined with the commitment to
          accessibility, contribute to creating a cohesive and engaging visual
          experience for all users.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={triCountyMoodboard}
            alt="Tri County Mood Board"
            className="w-full max-w-[985px]"
          />
        </div>

        <p>
          Following the mood board, I created a style tile for Tri County
          Appliance Repair, focusing on a simple and cohesive color palette that
          reflects the local cities they serve. By opting for a limited color
          scheme, I aimed to ensure that the website&apos;s design would be
          accessible and visually appealing to their target audience, including
          older clientele. Moreover, the chosen colors were carefully selected
          to meet the AAA accessibility standards, guaranteeing that the website
          can be easily navigated and understood by users with diverse visual
          abilities. The style tile sets the foundation for a clean and
          user-friendly design, aligning with the company&apos;s goals and
          catering to the needs of their customers.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={triCountyStyleTile}
            alt="Tri County Style Tile"
            className="w-full"
          />
        </div>
      </Section>

      <Section heading="Final Product">
        <p>
          With the style guide in place, I proceeded to develop the final
          product. After conducting thorough research, I chose to utilize
          Webflow as the website builder for its versatility and flexibility.
          Webflow provided the freedom to bring the design concepts to life and
          create a fully functional website that met the requirements outlined
          in the product roadmap.
        </p>
        <p>
          The final product successfully incorporates all the must-have
          features, addressing the core functionalities of the website.
          Additionally, it includes the nice-to-have features that enhance the
          user experience and provide additional convenience. Moreover, the
          website incorporates surprising and delightful elements, exceeding
          user expectations and adding a touch of uniqueness to the overall
          experience.
        </p>
        <p>
          By adhering to the product roadmap, the final product aligns with the
          goals set during the research and strategy phases. It is a culmination
          of user-centric design, accessibility considerations, and the
          client&apos;s objectives. The website is now ready to be launched and
          deliver a seamless and satisfying experience to its users.
        </p>

        <div className="flex w-full justify-center pb-32 pt-48">
          <Image
            src={triCountyFinalProduct}
            alt="Tri County Final Product"
            className="w-full max-w-[349px]"
          />
        </div>

        <div className="flex w-full justify-center">
          <motion.a
            className="my-32 flex h-100 w-fit max-w-[315px] items-center justify-center rounded-full bg-eggplant-medium px-32 text-center text-24 font-bold text-white sm:mb-72"
            whileHover={{ scale: 1.05 }}
            href="https://tricountyappliancerepair.webflow.io/"
          >
            Tri County Appliance Repair&apos;s Website
          </motion.a>
        </div>
      </Section>
    </>
  );
};
