import Image from 'next/image';
import { CalloutBox } from 'components/callout-box';
import { Section } from 'components/section';
import triCountyUserPersona from './tri-county-images/tri-county-user-persona.png';
import triCountyJourneyMap from './tri-county-images/tri-county-journey-map.png';

export const TriCountyResearch = () => {
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
          understanding of Tri County Appliance Repair&apos;s customer base.{' '}
          <b>
            This research not only enables me to identify the users, but also
            provides insights into their needs, frustrations, limitations and
            accessibility requirements.
          </b>{' '}
          Utilizing this research, I will be able to guide the design process
          effectively and ensure that the resulting design meets the specific
          requirements of the users.
        </p>
      </Section>

      <Section heading="User Surveys">
        <p>
          The goal of my user survey was to gain a deeper understanding of how
          participants feel about the public bus system and the transportation
          apps they currently use. The survey collected data on their
          experiences, preferences, and suggestions for improvement in these
          aspects. With the participation of 23 users, I was able to gather a
          diverse range of perspectives and insights that have helped me
          identify key areas for improvement. Analyzing this data, I can make
          informed UX/UI design decisions that will enhance the user experience
          for C.U.B.S.
        </p>
        <p>
          The survey provided insights into both the demographics of
          participants and the current issues they experience with public
          transportation. I inquired about their opinions on public bus systems
          and asked what changes they would make to the transportation apps they
          currently use. I found three major issues across the majority of
          participants.
        </p>

        <div className="flex w-full flex-wrap justify-evenly gap-16 py-48">
          <CalloutBox
            body="53% of the population that Tri County Appliance Repair serves
                were women."
            heading="Women made up the majority of the population."
          />

          <CalloutBox
            body="89.6% of the population had a high school diploma, 35% had a
              Bachelor's Degree."
            heading="The majority had at least a high school diploma."
          />

          <CalloutBox
            body="The majority of the population served fell between 27-35 years
              old."
            heading="Most fell within the age ranges of 27-35 years old."
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
          Let&apos;s meet Lauren, a 25-year-old teacher in Oxford, MS. Lauren
          leads a hectic lifestyle and values convenient access to appliance
          repair services. Her primary requirement is a user-friendly and
          hassle-free scheduling process.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={triCountyUserPersona}
            alt="Persona details"
            className="w-full max-w-[972px]"
          />
        </div>
      </Section>

      <Section heading="Journey Map">
        <p>
          Additionally, I have created a Journey Map for Lauren to identify her
          main pain points with Tri County Appliance Repair&apos;s current
          setup.{' '}
          <b>
            The most significant issue I discovered during this process is the
            absence of a website for the company.
          </b>{' '}
          This lack of online presence leaves users, including Lauren, feeling
          uncertain and lacking confidence in their service.
        </p>

        <div className="flex w-full justify-center py-48">
          <Image
            src={triCountyJourneyMap}
            alt="Tri County Journey Map"
            className="w-full max-w-[983px]"
          />
        </div>

        <h4 className="text-16 font-bold">Insights</h4>
        <ul className="list-inside list-disc leading-32">
          <li>
            Users currently have to rely recommendations from friends to hear
            about Tri County Appliance Repair.
          </li>
          <li>
            Users have different communication preferences that are not being
            meet currently.
          </li>
          <li>
            Users get frustrated when they are not kept up to date on
            information regarding repair times.
          </li>
          <li>
            Users trust companies that have an online presence more than those
            that do not.
          </li>
        </ul>

        <h4 className="pt-36 text-16 font-bold">Needs</h4>
        <ul className="list-inside list-disc pb-124 leading-32">
          <li>
            Users need to feel confident choosing Tri County Appliance Repair as
            their repair company.
          </li>
          <li>
            Users need to be able to contact the company in multiple ways.
          </li>
          <li>
            Users need to know about delays with parts that will effect their
            repairs.
          </li>
          <li>Users need to be able to search for the company on Google.</li>
        </ul>
      </Section>
    </>
  );
};
