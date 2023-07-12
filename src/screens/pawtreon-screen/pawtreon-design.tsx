import Image from 'next/image';
import { Header } from 'components/header';
import { Section } from 'components/section';
import pawtreonFlow1 from './pawtreon-images/pawtreon-flow-1.png';
import pawtreonFlow2 from './pawtreon-images/pawtreon-flow-2.png';
import pawtreonSketches1 from './pawtreon-images/pawtreon-sketches-1.png';
import pawtreonSketches2 from './pawtreon-images/pawtreon-sketches-2.png';
import pawtreonWireframes1 from './pawtreon-images/pawtreon-wireframes-1.png';
import pawtreonWireframes2 from './pawtreon-images/pawtreon-wireframes-2.png';
import pawtreonWireframes3 from './pawtreon-images/pawtreon-wireframes-3.png';
import pawtreonWireframeChanges1 from './pawtreon-images/pawtreon-wireframe-changes-1.png';
import pawtreonWireframeChanges2 from './pawtreon-images/pawtreon-wireframe-changes-2.png';

export const PawtreonDesign = () => {
  return (
    <>
      <Header id="design" title="Design" />

      <Section heading="User Flows">
        <p>
          After the research and strategy phases, I created multiple user flows
          to gain a better understanding of the screens required to complete the
          primary tasks set by the user stories. I carefully mapped out the user
          flow to visualize the step-by-step process involved in this procedure.
          By mapping out the user flow, I gained a better understanding of the
          screens and interactions required to complete each task.
        </p>
        <p>
          <b>User Story 1:</b> As a user, I want to view my rewards for this
          month so that I can receive them.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={pawtreonFlow1}
            alt="Pawtreon User Flow"
            className="w-full max-w-[1020px]"
          />
        </div>

        <p>
          <b> User Story 2:</b> As a user, I want to view subscriptions so that
          I can increase my membership levels.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={pawtreonFlow2}
            alt="Pawtreon User Flow"
            className="w-full max-w-[877px]"
          />
        </div>
      </Section>

      <Section heading="Sketches">
        <p>
          During the sketching phase, I explored various layout possibilities,
          interface elements, and interactions based on insights gained from
          user flows. These low-fidelity sketches allowed for quick ideation and
          feedback, focusing on creating intuitive and engaging donation
          experiences while addressing the pain points and goals of users like
          Jeanine, Chris, and Alex. The sketches served as a foundation for
          further discussions, evaluations, and refinement, guiding the design
          direction and leading to the creation of wireframes and prototypes.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={pawtreonSketches1}
            alt="Pawtreon Sketches"
            className="w-full max-w-[997px]"
          />
        </div>

        <p>
          The final four sketches represented the culmination of the design
          process for the main pages accessible from the navigation bar. These
          sketches included the home page, donation page, rewards page, and
          impact page. These final sketches served as the foundation for
          creating high-fidelity mockups and prototypes, ensuring a cohesive and
          user-centric experience throughout the application.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={pawtreonSketches2}
            alt="Pawtreon Sketches"
            className="w-full max-w-[669px]"
          />
        </div>
      </Section>

      <Section heading="Low-Fidelity Wireframes">
        <p>
          Using the sketches as a base, I created low-fidelity wireframes to
          outline the layout and structure of key screens in the application.
          These wireframes were refined through an iterative process and
          eventually transformed into interactive prototypes using a design
          tool. The prototypes helped users visualize the proposed solution and
          provided an opportunity for early feedback.
        </p>

        <div className="flex w-full flex-col items-center justify-center py-48">
          <Image
            src={pawtreonWireframes1}
            alt="Pawtreon Wireframes"
            className="w-full max-w-[752px] pb-36"
          />
          <Image
            src={pawtreonWireframes2}
            alt="Pawtreon Wireframes"
            className="w-full max-w-[1156px] pb-36"
          />
          <Image
            src={pawtreonWireframes3}
            alt="Pawtreon Wireframes"
            className="w-full max-w-[1173px] pb-48"
          />
        </div>
      </Section>

      <Section heading="Wireframe Changes">
        <p>
          During the initial iteration phase, several changes were made to the
          low-fidelity wireframes. The search page underwent simplification,
          aiming to streamline the user experience and improve usability. The
          layout and functionality were optimized to allow users to quickly and
          easily find the information they were looking for. Additionally, the
          donation tracker page received a redesign to ensure better visual
          coherence with the rest of the application. The interface was refined
          to align with the established visual design language, resulting in a
          more consistent and cohesive look and feel across all pages.
        </p>

        <div className="flex w-full flex-col items-center justify-center py-48">
          <Image
            src={pawtreonWireframeChanges1}
            alt="Pawtreon Wireframes"
            className="w-full max-w-[738px] pb-36"
          />
          <Image
            src={pawtreonWireframeChanges2}
            alt="Pawtreon Wireframes"
            className="w-full max-w-[738px] pb-124"
          />
        </div>
      </Section>
    </>
  );
};
