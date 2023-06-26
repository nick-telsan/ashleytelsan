import Image from 'next/image';
import { Header } from 'components/header';
import { Section } from 'components/section';
import triCountyUserFlow from './tri-county-images/tri-county-user-flow.png';
import triCountySketches from './tri-county-images/tri-county-sketches.png';
import triCountySketches2 from './tri-county-images/tri-county-sketches-2.png';
import triCountyWireframes from './tri-county-images/tri-county-wireframes.png';

export const TriCountyDesign = () => {
  return (
    <>
      <Header id="design" title="Design" />

      <Section heading="User Flows">
        <p>
          After the research and strategy phases, I created a user flow to gain
          a better understanding of the screens required to complete the primary
          task of the website: enabling users to submit a request for repair
          online. I carefully mapped out the user flow to visualize the
          step-by-step process involved in this procedure. By mapping out the
          user flow, I gained a better understanding of the screens and
          interactions required to complete the primary task.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={triCountyUserFlow}
            alt="Tri County User Flow"
            className="w-full max-w-[841px]"
          />
        </div>
      </Section>

      <Section heading="Sketches">
        <p>
          Working with the user flow I created, I sketched initial ideas for Tri
          County Appliance Repair&apos;s website screens, focusing on
          accessibility and ease of use. I aimed to simplify the design,
          presenting relevant information and making the &quot;Request a
          Repair&quot; form easily accessible. Clear navigation and visual
          hierarchy were incorporated to guide users, while maintaining a
          visually appealing interface.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={triCountySketches}
            alt="Tri County Sketches"
            className="w-full max-w-[994px]"
          />
        </div>

        <p>
          After generating rough ideas through sketches, I proceeded to create a
          paper prototype to visualize the overall experience of Tri County
          Appliance Repair&apos;s website. The design approach focused on
          simplicity, resulting in a concise prototype consisting of five
          screens. To validate the usability and gather feedback, I conducted a
          user test with a participant, which proved to be successful in
          identifying areas for improvement and ensuring a user-friendly
          interface. This iterative process allowed me to refine the design and
          enhance the overall user experience.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={triCountySketches2}
            alt="Tri County Sketches"
            className="w-full max-w-[1139px]"
          />
        </div>
      </Section>

      <Section heading="Low-Fidelity Wireframes">
        <p>
          During the development of low-fidelity wireframes, my focus was on
          maintaining a simple and intuitive design across the entire app,
          prioritizing ease of navigation for all users. Building upon the
          screens from my sketches and paper prototype, I introduced an
          additional page titled &quot;Request Submitted.&quot; This new page
          served the purpose of informing users that their form had been
          successfully submitted and provided them with an expectation of when
          they could anticipate a response. By incorporating this page, the
          website retained its simplicity while effectively communicating
          important information to users, enhancing their overall experience.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={triCountyWireframes}
            alt="Tri County Wireframes"
            className="w-full pb-124"
          />
        </div>
      </Section>
    </>
  );
};
