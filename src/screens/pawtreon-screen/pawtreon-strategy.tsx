import Image from 'next/image';
import { Section } from 'components/section';
import pawtreonHowMightWe from './pawtreon-images/pawtreon-how-might-we.png';
import pawtreonProductRoadmap from './pawtreon-images/pawtreon-product-roadmap.png';

export const PawtreonStrategy = () => {
  return (
    <>
      <div
        id="strategy"
        className="flex h-150 w-full items-center justify-center bg-eggplant-lighter"
      >
        <h2 className="text-36 font-bold">Strategy</h2>
      </div>

      <Section heading="How Might We...">
        <p>
          To define the problem I am going to solve, I created{' '}
          <b>How-Might-We (HMW) Questions</b> to frame the ideation in the
          brainstorm session for solutions. The statements and questions are
          generated based on the insights on needs I gathered in my user survey.
        </p>

        <Image
          src={pawtreonHowMightWe}
          alt="Tri County How Might We"
          className="w-full py-36"
        />
      </Section>

      <Section heading="Product Roadmap">
        <p>
          After reviewing the list of solutions, I created a list of features
          and organized them by priority. These features were categorized into
          four groups: Must Haves (P1), Nice to Have (P2), Surprising & Delight
          (P3), and Can Come Later (P4). I prioritized the features that were
          essential for the website to fulfill its core functionality, gradually
          transitioning to the features that could be implemented at a later
          stage.
        </p>

        <Image
          src={pawtreonProductRoadmap}
          alt="Pawtreon Road Map"
          className="w-full pb-124 pt-36"
        />
      </Section>
    </>
  );
};
