import Image from 'next/image';
import { CalloutBox } from 'components/callout-box';
import { Section } from 'components/section';
import pawtreonPersonaJeanine from './pawtreon-images/pawtreon-persona-jeanine.png';
import pawtreonPersonaAlex from './pawtreon-images/pawtreon-persona-alex.png';
import pawtreonPersonaChris from './pawtreon-images/pawtreon-persona-chris.png';
import pawtreonCompetitiveAnalysis from './pawtreon-images/pawtreon-competitive-analysis.png';

export const PawtreonResearch = () => {
  return (
    <>
      <div
        id="research"
        className="flex h-150 w-full items-center justify-center bg-eggplant-lighter"
      >
        <h2 className="text-36 font-bold">Research</h2>
      </div>

      <Section heading="User Research">
        <p>
          By starting off the design process with research, I can develop an
          understanding of who Pawtreon&apos;s user will be.{' '}
          <b>
            This research not only enables me to identify the users, but also
            provides insights into their needs, frustrations, limitations and
            accessibility requirements.
          </b>
          Utilizing this research, I will be able to guide the design process
          effectively and ensure that the resulting design meets the specific
          requirements of the users.
        </p>
      </Section>

      <Section heading="User Data">
        <p>
          To gain a deep understanding of the target audience and their
          motivations, I conducted a user survey. The survey was conducted using
          Google Forms, which received responses from 21 participants. The
          survey aimed to gather insights into user preferences, motivations for
          donating to animal shelters, and their expectations from a donation
          platform like Pawtreon.
        </p>

        <div className="flex w-full flex-wrap justify-evenly gap-16 py-48">
          <CalloutBox
            body="90.5% have heard of Patreon, and 52.4% have used Patreon before."
            heading="Most users have heard of Patreon before, and half have used it."
          />

          <CalloutBox
            body="73.7% would be likely to donate if they received digital rewards."
            heading="Participants would be more likely to donor if they received rewards."
          />

          <CalloutBox
            body="57.9% did not currently donate to nonprofits."
            heading="Most did not currently donate to any nonprofits."
          />
        </div>
      </Section>

      <Section heading="User Persona">
        <p>
          Based on the information gathered by the user data, I gained a clear
          understanding of the key audience. By creating and utilizing a user
          persona, I can effectively{' '}
          <b>prioritize and address the major goals and needs of the users</b>{' '}
          throughout the duration of this project. This persona will serve as a
          valuable reference point, ensuring that the design remains
          user-centered and aligned with the target audience&apos;s
          requirements.
        </p>
        <p>
          Introducing Jeanine, a 34-year-old working professional who has a
          strong desire to support local animal shelters. Despite being unable
          to adopt more animals or volunteer due to time constraints, Jeanine is
          highly motivated by incentives and rewards. She seeks a donation
          platform like Pawtreon that offers enticing incentives to make a
          positive impact on animal welfare.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={pawtreonPersonaJeanine}
            alt="Persona details"
            className="w-full max-w-[972px]"
          />
        </div>

        <p>
          Introducing Alex, a self-employed individual who values supporting
          animal shelters. As their income can fluctuate, Alex is unable to
          commit to monthly donations consistently. They seek a donation
          platform that offers a range of flexible options, allowing them to
          contribute sporadically based on their financial situation. Alex is
          looking for a platform like Pawtreon that understands their need for
          donation flexibility while still making a meaningful impact on animal
          welfare.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={pawtreonPersonaAlex}
            alt="Persona details"
            className="w-full max-w-[972px]"
          />
        </div>

        <p>
          Meet Chris, a full-time student who is passionate about contributing
          to animal shelters. Seeking an engaging and rewarding donation
          experience, Chris is driven by the desire to see the direct impact of
          his donations. He is looking for a platform like Pawtreon that
          provides transparency and allows him to witness the tangible results
          of his contributions in supporting animal welfare.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={pawtreonPersonaChris}
            alt="Persona details"
            className="w-full max-w-[972px]"
          />
        </div>
      </Section>

      <Section heading="Competitive Analysis">
        <p>
          A competitive analysis was conducted to identify other platforms or
          websites addressing similar needs. This analysis helped the team
          identify gaps and opportunities in the market, enabling them to
          differentiate Pawtreon and create a unique value proposition.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={pawtreonCompetitiveAnalysis}
            alt="Pawtreon Competitive Analysis"
            className="w-full max-w-1192"
          />
        </div>
      </Section>
    </>
  );
};
