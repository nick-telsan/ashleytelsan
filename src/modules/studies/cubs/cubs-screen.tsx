import heroLines from './images/hero-lines.png';
import heroSignIn from './images/hero-sign-in.png';
import heroStops from './images/hero-stops.png';
import discoverCompetitive from './images/discover-competitive.png';
import discoverSurvey from './images/discover-survey.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import discoverPersona from './images/discover-persona.png';
import defineUserFlow from './images/define-user-flow.png';
import defineSketchHome from './images/define-sketch-home.png';
import defineSketchSignIn from './images/define-sketch-sign-in.png';
import defineSketchSignUp from './images/define-sketch-sign-up.png';
import defineSketchStopsSearch from './images/define-sketch-stop-search.png';
import defineSketchLineSearch from './images/define-sketch-line-search.png';
import defineSketchLine from './images/define-sketch-line.png';
import defineSketchPermissions from './images/define-sketch-permission.png';
import defineLofiHome from './images/define-lofi-home.png';
import defineLofiSignIn from './images/define-lofi-sign-in.png';
import defineLofiSignUp from './images/define-lofi-sign-up.png';
import defineLofiStopsSearch from './images/define-lofi-stop-search.png';
import defineLofiLineSearch from './images/define-lofi-line-search.png';
import defineLofiLine15 from './images/define-lofi-line-15.png';
import defineLofiPermission from './images/define-lofi-permission.png';
import defineLofiWashington from './images/define-lofi-washington.png';
import defineUsabilityTesting from './images/define-usability-testing.png';
import defineIconChange from './images/define-icon-change.png';
import developMidfiHome from './images/develop-midfi-home.png';
import developMidfiSignUp from './images/develop-midfi-sign-up.png';
import developMidfiLine from './images/develop-midfi-line.png';
import developMidfiStop from './images/develop-midfi-stop.png';
import developMoodBoard from './images/develop-mood-board.png';
import developStyleTile from './images/develop-style-tile.png';
import developHifiHome from './images/develop-hifi-home.png';
import developHifiSignUp from './images/develop-hifi-sign-up.png';
import developHifiLines from './images/develop-hifi-lines.png';
import developHifiLine1 from './images/develop-hifi-line-15-1.png';
import developHifiLine2 from './images/develop-hifi-line-15-2.png';
import developHifiStop1 from './images/develop-hifi-stop-1.png';
import developHifiStop2 from './images/develop-hifi-stop-2.png';
import developHifiSignIn from './images/develop-hifi-sign-in.png';
import developHifiPermission from './images/develop-hifi-permission.png';
import developHifiSearch from './images/develop-hifi-search.png';
import developHifiNearby from './images/develop-hifi-nearby.png';
import devilverUsabilityTest from './images/deliver-usability-test.png';
import deliverLine1 from './images/deliver-iteration-line-1.png';
import deliverLine2 from './images/deliver-iteration-line-2.png';

export const CubsScreen = () => {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col items-center px-32 md:px-124">
        <div className="flex w-full flex-col items-center pt-32 sm:pt-96">
          <h1 className="text-36 font-bold">C.U.B.S.</h1>
          <h2 className="text-center text-24 font-bold">
            Chicago Urban Bus System
          </h2>
          <p>A mobile app for Chicago’s public bus system</p>
        </div>

        <div className="flex w-full flex-wrap justify-center gap-[56px] pb-36 pt-[44px] sm:pb-96">
          <Image
            src={heroLines}
            alt="CUBS app showing bus lines"
            className="w-[64px] sm:w-[136px]"
          />
          <Image
            src={heroSignIn}
            alt="CUBS app log in screen"
            className="w-[64px] sm:w-[136px]"
          />
          <Image
            src={heroStops}
            alt="CUBS app showing bus stop"
            className="w-[64px] sm:w-[136px]"
          />
        </div>
      </div>

      <div className="flex w-full flex-col items-center bg-eggplant-light px-32 py-48 md:px-124">
        <h2 className="text-center text-36 font-bold">Project Overview</h2>
        <div className="flex max-w-1440 grid-cols-2 flex-wrap gap-64 md:grid">
          <div className="flex flex-col gap-16 pt-16 sm:gap-48 sm:pt-48">
            <section className="flex flex-col gap-16">
              <h3 className="text-32 font-bold">Problem</h3>
              <p>
                Due to recent expansion of Chicago&apos;s public bus system,
                several new bus routes have been added. Many of the routes now
                stop at the same bus stops as others. Riders now need to be
                easily to tell what bus is arriving at the stop and how much
                time they have to get to the stop.
              </p>
            </section>

            <section className="flex flex-col gap-16">
              <h3 className="text-32 font-bold">Objectives</h3>
              <ul className="list-inside list-disc">
                <li>
                  Ensure all riders can tell how much time they have to get to
                  their stop before the bus they need arrives
                </li>
                <li>
                  Allow riders to select a bus route and see future arrival
                  times
                </li>
                <li>
                  Ensure that any rider can tell when each bus will be arriving
                  at their stop
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-16">
              <h3 className="text-32 font-bold">Solution</h3>
              <p>
                Create a mobile application that provides riders with real-time
                information on when the next bus will arrive at each stop and
                how much time they have to get there.
              </p>
            </section>
          </div>

          <div className="flex flex-col gap-16 pt-16 sm:gap-48 sm:pt-48">
            <section className="flex flex-col gap-16">
              <h3 className="text-32 font-bold">Responsibilities</h3>
              <p>UX Researcher, UX Designer, UI Designer</p>
            </section>

            <section className="flex flex-col gap-16">
              <h3 className="text-32 font-bold">Tools</h3>
              <p>Figma, FigJam, Google Forms, Maze, UseBerry, Canva</p>
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
            className="my-32 flex h-[100px] w-fit items-center justify-center rounded-full bg-eggplant-medium px-32 text-32 font-bold text-white sm:mb-72"
            whileHover={{ scale: 1.05 }}
            href="https://www.figma.com/proto/1BBToDnqUO5JLCVLQOtVm1/C.U.B.S---Public?page-id=83%3A3227&type=design&node-id=83-3635&viewport=1420%2C539%2C0.32&scaling=scale-down&starting-point-node-id=83%3A3635"
          >
            View Prototype
          </motion.a>
        </div>
      </div>

      <div className="flex w-full flex-col items-center px-32 pt-32 md:px-124 md:pt-96">
        <h2 className="text-center text-36 font-bold">Design Process</h2>
        <div className="flex w-full max-w-1440 grid-cols-4 flex-col items-center gap-32 pt-16 md:grid md:items-start md:pt-36">
          <div className="flex flex-col items-center gap-16 md:items-start">
            <Link href="#discover" className="text-32 font-bold underline">
              Discover
            </Link>
            <p>Research Plan</p>
            <p>Competitive Analysis</p>
            <p>User Surveys</p>
            <p>User Interviews</p>
            <p>User Personas</p>
          </div>

          <div className="flex flex-col items-center gap-16 md:items-start">
            <Link href="#define" className="text-32 font-bold underline">
              Define
            </Link>
            <p>User Flows</p>
            <p>Sketches</p>
            <p>Lo-Fi Wireframes</p>
            <p>Lo-Fi Prototype</p>
            <p>Usability Test</p>
          </div>

          <div className="flex flex-col items-center gap-16 md:items-start">
            <Link href="#develop" className="text-32 font-bold underline">
              Develop
            </Link>
            <p>Mid-Fidelity Wireframe</p>
            <p>Mood Board</p>
            <p>Style Tile</p>
            <p>High-Fi Prototype</p>
          </div>

          <div className="flex flex-col items-center gap-16 md:items-start">
            <Link href="#deliver" className="text-32 font-bold underline">
              Deliver
            </Link>
            <p>Hi-Fi Prototype</p>
            <p>Usability Test</p>
            <p>Iteration</p>
            <p>Final Prototype</p>
          </div>
        </div>
      </div>

      <div
        id="discover"
        className="mt-32 flex h-[150px] w-full items-center justify-center bg-eggplant-light md:mt-96"
      >
        <h2 className="text-36 font-bold">Discover</h2>
      </div>

      <div className="flex w-full justify-center px-32 md:px-124">
        <section className="flex w-full max-w-1440 flex-col gap-16 pt-24 md:pt-72">
          <h3 className="text-center text-32 font-bold">Research Plan</h3>
          <p>
            The purpose of this research segment was to identify the necessary
            features for the development of C.U.B.S., a mobile app that provides
            information on the local public bus transit system. I conducted a
            thorough competitive analysis of existing transportation apps, as
            well as surveys and interviews with users to understand their needs
            and expectations.
          </p>
          <p>
            Finally, I created user personas to summarize the user research and
            create a representative character that reflects my target audience.
            This research segment will provide valuable insights that enable me
            to create an app that addresses my target audience&apos;s challenges
            and provides a seamless experience.
          </p>
        </section>
      </div>

      <div className="flex w-full justify-center px-32 md:px-124">
        <section className="flex w-full max-w-1440 flex-col gap-16 pt-24 md:pt-72">
          <h3 className="text-center text-32 font-bold">
            Competitive Analysis
          </h3>
          <p>
            C.U.B.S. aims to provide real-time information and ease of use to
            bus commuters. This competitive analysis compares C.U.B.S. with
            other popular transit apps such as Moovit, City-Mapper, Transit, and
            DC Metro by evaluating their strengths and weaknesses. The purpose
            of this analysis is to gain insights into what can make C.U.B.S.
            unique and how to help it stand out in the transit app market.
          </p>
          <div className="flex w-full justify-center">
            <Image
              src={discoverCompetitive}
              alt="Comparison of similar applications"
            />
          </div>
        </section>
      </div>

      <div className="flex w-full  flex-col items-center px-32 md:px-124">
        <section className="flex w-full max-w-1440 flex-col gap-16 pt-24 md:pt-72">
          <h3 className="text-center text-32 font-bold">User Surveys</h3>
          <p>
            The goal of my user survey was to gain a deeper understanding of how
            participants feel about the public bus system and the transportation
            apps they currently use. The survey collected data on their
            experiences, preferences, and suggestions for improvement in these
            aspects. With the participation of 23 users, I was able to gather a
            diverse range of perspectives and insights that have helped me
            identify key areas for improvement. Analyzing this data, I can make
            informed UX/UI design decisions that will enhance the user
            experience for C.U.B.S.
          </p>
          <p>
            The survey provided insights into both the demographics of
            participants and the current issues they experience with public
            transportation. I inquired about their opinions on public bus
            systems and asked what changes they would make to the transportation
            apps they currently use. I found three major issues across the
            majority of participants.
          </p>

          <div className="flex w-full flex-wrap justify-evenly gap-16 py-48">
            <div className="w-[250px] rounded-25 bg-eggplant-light p-24">
              <h4 className="text-24 font-bold">
                Late Buses are a problem for most users.
              </h4>
              <p>
                37% of participants that use a public bus system said that the
                arrival time of their bus was inaccurate.
              </p>
            </div>

            <div className="w-[250px] rounded-25 bg-eggplant-light p-24">
              <h4 className="text-24 font-bold">
                Missing buses isn&apos;t ideal for users.
              </h4>
              <p>
                Missing a bus can directly impact a user&apos;s day by a large
                margin. Users want to avoid missing their bus as much as
                possible.
              </p>
            </div>

            <div className="w-[250px] rounded-25 bg-eggplant-light p-24">
              <h4 className="text-24 font-bold">
                Users want easy access to relevant info.
              </h4>
              <p>
                66% of participants stated that easy access to relevant
                information could be improved on their current transportation
                app.
              </p>
            </div>
          </div>

          <p>
            I also asked participants to select 2-3 features they would like to
            see in a transportation app, to ensure that the key features they
            expected would be included in the C.U.B.S. app. The results of this
            are below.
          </p>

          <div className="flex w-full justify-center py-48">
            <Image
              src={discoverSurvey}
              alt="Survey results"
              className="w-full max-w-[600px]"
            />
          </div>

          <p>
            Based on my user survey, I have identified three main issues that
            participants experience when using public transportation: late
            buses, missing their bus, and difficulty accessing relevant
            information. In addition, participants want to see specific features
            in a transportation app, including the ability to view an ETA for
            their bus stop, access to delay and detour information, and the
            ability to know when their bus will arrive. This information will
            help us as we develop C.U.B.S.
          </p>
        </section>

        <section className="flex w-full max-w-1440 flex-col gap-16 pt-24 md:pt-72">
          <h3 className="text-center text-32 font-bold">User Interviews</h3>
          <p>
            In addition, the user interviews allowed me to gain a deeper
            understanding of my users&apos; behaviors and motivations. I was
            able to identify how frequently they use public transportation and
            what factors influence their choice of using it. I also learned
            about their preferred modes of transportation, their concerns and
            frustrations, and their expectations of a transit app. This
            information will help me to design a transportation app that meets
            the unique needs of my users.
          </p>

          <div className="flex w-full flex-wrap justify-evenly gap-16 py-48">
            <div className="w-[250px] rounded-25 bg-eggplant-light p-24">
              <h4 className="text-24 font-bold">
                Users want to be kept up to date about lateness.
              </h4>
              <p>
                “If a bus breaks down, I want to be able to make an informed
                decision about if I need to make other plans or not.”
              </p>
            </div>

            <div className="w-[250px] rounded-25 bg-eggplant-light p-24">
              <h4 className="text-24 font-bold">
                Information that is hard to get is not ideal.
              </h4>
              <p>
                “Some of the apps I&apos;ve tried, the information is hard to
                get to in a timely manner, which isn&apos;t great with short
                time frame to adhere to.
              </p>
            </div>

            <div className="w-[250px] rounded-25 bg-eggplant-light p-24">
              <h4 className="text-24 font-bold">
                Users don&apos;t want to be left behind.
              </h4>
              <p>
                “Occasionally, I&apos;ve arrived at the stop just as my bus was
                pulling away. Some way to see when the bus was leaving would be
                nice.”
              </p>
            </div>
          </div>
        </section>

        <section className="flex w-full max-w-1440 flex-col gap-16 pt-24 md:pt-72">
          <h3 className="text-center text-32 font-bold">User Personas</h3>
          <p>
            With the information provided by the user survey and user
            interviews, I was able to get an idea of who the key audience is for
            C.U.B.S. By creating and using a user persona, I was able to keep
            the user&apos;s major goals and needs in mind as I continue this
            project.
          </p>

          <div className="flex w-full justify-center py-48">
            <Image
              src={discoverPersona}
              alt="Persona details"
              className="w-full max-w-[840px]"
            />
          </div>

          <p>
            Let&apos;s meet Emily, a Social Media Manager in Chicago, IL. Emily
            is 32 years old and is highly dependent on technology to manage her
            daily routine. She uses her smartphone for everything from
            work-related tasks to social media, entertainment, and communication
            with friends and family. Her daily routine consists of commuting to
            her office, attending meetings, and running errands around town. She
            enjoys walking and cycling for exercise and frequently travels to
            new cities to explore their local cultures.
          </p>
          <p>
            Emily&apos;s major goal is to incorporate the public transit system
            into her daily commute, but has been deterred by the buses&apos;
            unreliability. She has heard about the recent addition of more
            routes and is willing to give the transit system another chance.
          </p>
          <p>
            Emily&apos;s pain points with the current public transportation
            system include missing her bus, not being informed about delays, and
            the difficulty of navigating the system. She is looking for a
            reliable transportation app that can help her plan her daily
            commute, view bus schedules, and receive real-time updates on bus
            locations and delays. She wants a user-friendly interface that is
            easy to navigate and understand. By keeping Emily&apos;s needs and
            preferences in mind, the design and development of C.U.B.S. will be
            tailored to meet the needs of its key audience.
          </p>
        </section>
      </div>

      <div
        id="define"
        className="mt-32 flex h-[150px] w-full items-center justify-center bg-eggplant-light md:mt-96"
      >
        <h2 className="text-36 font-bold">Define</h2>
      </div>

      <div className="flex w-full flex-col items-center px-32 md:px-124">
        <section className="flex w-full max-w-1440 flex-col gap-16 pt-24 md:pt-72">
          <h3 className="text-center text-32 font-bold">User Flows</h3>
          <p>
            With an idea of who our persona was, I started developing a user
            flow. I had three primary goals for the user to be able to reach
            quickly and efficiently, which are as follows:
          </p>
          <ul className=" list-inside list-disc">
            <li>
              As a bus rider, I want to know when my bus is arriving at the
              Washington & State bus stop, so I can calculate how much time I
              have to reach the bus stop.
            </li>
            <li>
              As a bus rider, I want to know the next bus arriving at the
              Washington & State bus stop, so that I don&apos;t rush to the bus
              stop if it is not my bus.
            </li>
            <li>
              As a bus rider, I want the ability to view future arrival times
              for any of the seven bus lines (that use the Washington & State
              stop), so that I know when my bus arrives.
            </li>
          </ul>

          <div className="flex w-full justify-center py-48">
            <Image src={defineUserFlow} alt="User flow" />
          </div>
        </section>

        <section>
          <h3 className="text-center text-32 font-bold">Sketches</h3>
          <p>
            Working with the user flow that I had created, I sketched out
            initial ideas for the different screens of the C.U.B.S. app. My main
            goals for the design were accessibility and ease of use. I wanted
            users to be able to easily access the most pertinent information
            without having to navigate through multiple screens or encounter
            intrusive ads. Additionally, I aimed to avoid scope creep in the
            design process by basing all of the sketches on the user flow and
            user stories, ensuring that all screens were relevant to the end
            goals of the app.
          </p>
          <div className="flex w-full justify-center py-48">
            <div className="flex max-w-[1200px] grid-cols-4 flex-col gap-16 md:grid">
              <Image src={defineSketchSignIn} alt="Sign in screen" />
              <Image src={defineSketchSignUp} alt="Sign up screen" />
              <Image src={defineSketchPermissions} alt="Permissions screen" />
              <Image src={defineSketchHome} alt="Home screen" />
              <Image src={defineSketchStopsSearch} alt="Stops search screen" />
              <Image src={defineSketchLineSearch} alt="Line search screen" />
              <Image src={defineSketchLine} alt="Line screen" />
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-center text-32 font-bold">
            Low Fidelity Wireframes
          </h3>
          <p>
            When developing low-fidelity wireframes, I aimed to keep a cohesive
            design throughout the entire app and ensure that all users&apos;
            needs and expectations would be met. I referred back to my
            competitive analysis and user research to make a total of 8 screens
            for users to navigate through, making sure that the information for
            each bus stop or bus line was easily distinguishable from others in
            the same category.
          </p>
          <div className="flex w-full justify-center py-48">
            <div className="flex grid-cols-8 flex-col gap-16 md:grid">
              <Image src={defineLofiSignIn} alt="Sign in screen" />
              <Image src={defineLofiSignUp} alt="Sign up screen" />
              <Image src={defineLofiPermission} alt="Permissions screen" />
              <Image src={defineLofiHome} alt="Home screen" />
              <Image src={defineLofiStopsSearch} alt="Stops search screen" />
              <Image src={defineLofiWashington} alt="Street view screen" />
              <Image src={defineLofiLineSearch} alt="Line search screen" />
              <Image src={defineLofiLine15} alt="Line screen" />
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-center text-32 font-bold">
            Low Fidelity Prototype
          </h3>
          <p>
            After designing my low fidelity wireframes, I made a clickable
            prototype. The goal of this clickable prototype was to get initial
            feedback from users on the design before moving into high fidelity.
            I used Figma to create my prototype, and sent the prototype out to
            users with Maze.
          </p>
          <p>
            One of the major points of improvement that I found during this
            stage, was the need to change the “bus line” icon to something that
            differentiated it from the “bus route” icon more clearly.
          </p>

          <div className="hidden w-full justify-center py-48 md:flex">
            <iframe
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1BBToDnqUO5JLCVLQOtVm1%2FC.U.B.S---Public%3Fpage-id%3D1%253A980%26type%3Ddesign%26node-id%3D1-1710%26viewport%3D643%252C706%252C0.24%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A1710"
              className="h-[450px] w-[800px]"
              allowFullScreen
            />
          </div>

          <div className="flex w-full justify-center">
            <motion.a
              className="my-32 flex h-[100px] w-fit items-center justify-center rounded-full bg-eggplant-medium px-32 text-32 font-bold text-white sm:mb-72"
              whileHover={{ scale: 1.05 }}
              href="https://www.figma.com/proto/1BBToDnqUO5JLCVLQOtVm1/C.U.B.S---Public?page-id=1%3A980&type=design&node-id=1-1710&viewport=643%2C706%2C0.24&scaling=scale-down&starting-point-node-id=1%3A1710"
            >
              View Prototype
            </motion.a>
          </div>
        </section>

        <section>
          <h3 className="text-center text-32 font-bold">Usability Testing</h3>
          <p>
            With my clickable prototype done, I completed my first usability
            test. This test was done on Maze.co. I had 9 respondents, with 4
            tasks for users to complete and 2 questions for users to answer.
          </p>
          <div className="flex w-full justify-center py-48">
            <Image
              src={defineUsabilityTesting}
              alt="Usability testing results"
              className="w-full max-w-[675px]"
            />
          </div>
          <p>
            From my usability test, I saw that the “bus line” icon was unclear
            to users. The users that responded to the survey had a lower success
            rate on both of the tasks surrounding bus lines, while they were
            more successful with tasks surrounding bus lines. From this, I
            decided to change the “bus line” icon to a different icon to
            alleviate this issue.
          </p>
          <div className="flex w-full justify-center py-48">
            <Image
              src={defineIconChange}
              alt="Example of icon change"
              className="w-full max-w-[530px]"
            />
          </div>
        </section>
      </div>

      <div
        id="develop"
        className="mt-32 flex h-[150px] w-full items-center justify-center bg-eggplant-light md:mt-96"
      >
        <h2 className="text-36 font-bold">Develop</h2>
      </div>

      <div className="flex w-full flex-col items-center px-32 md:px-124">
        <section className="flex w-full max-w-1440 flex-col gap-16 pt-24 md:pt-72">
          <h3 className="text-center text-32 font-bold">
            Mid Fidelity Wireframes
          </h3>
          <p>
            After the usability testing for my low fidelity prototype, I
            developed my wireframes further. One of the largest changes at this
            stage was the change of the bus line page, to make it more cohesive
            with the rest of the C.U.B.S. app.
          </p>
          <div className="flex w-full justify-center py-48">
            <div className="flex w-full max-w-[900px] grid-cols-4 flex-col gap-16 md:grid">
              <Image src={developMidfiSignUp} alt="Sign up screen" />
              <Image src={developMidfiHome} alt="Home screen" />
              <Image src={developMidfiLine} alt="Line screen" />
              <Image src={developMidfiStop} alt="Stop screen" />
            </div>
          </div>
        </section>

        <section className="flex w-full max-w-1440 flex-col gap-16 pt-24 md:pt-72">
          <h3 className="text-center text-32 font-bold">Mood Board</h3>
          <p>
            With my mood board, I reviewed the Visit Chicago website, the
            city&apos;s official color scheme, and the colors of popular sports
            teams in the area for inspiration. I noticed that the color schemes
            for all of these sources tended to include a combination of red, sky
            blue, white, and black. For the design of C.U.B.S., I decided to
            incorporate these colors while also ensuring that all color
            combinations were at least AA accessible.
          </p>
          <div className="flex w-full justify-center py-48">
            <Image
              src={developMoodBoard}
              alt="Mood board"
              className="w-full max-w-[800px]"
            />
          </div>
        </section>

        <section className="flex w-full max-w-1440 flex-col gap-16 pt-24 md:pt-72">
          <h3 className="text-center text-32 font-bold">Style Tile</h3>
          <p>
            Following the mood board, I then designed my style tile for
            C.U.B.S.. My goal with the style tile was to have a contained color
            palette that felt cohesive with the official city colors and the
            visit Chicago website. I wanted the app to feel like it was a part
            of the city structure so that it would feel like an official city
            mobile app instead of a third party service.
          </p>
          <div className="flex w-full justify-center py-48">
            <Image src={developStyleTile} alt="Style tile" />
          </div>
        </section>

        <section className="flex w-full max-w-1440 flex-col gap-16 pt-24 md:pt-72">
          <h3 className="text-center text-32 font-bold">
            High Fidelity Mockup
          </h3>
          <p>
            After the usability testing for my low fidelity prototype, I
            developed my wireframes further. One of the largest changes at this
            stage was the change of the bus line page, to make it more cohesive
            with the rest of the C.U.B.S. app.
          </p>
          <div className="flex w-full justify-center py-48">
            <div className="flex grid-cols-6 flex-col gap-16 md:grid">
              <Image src={developHifiSignIn} alt="Sign in screen" />
              <Image src={developHifiSignUp} alt="Sign up screen" />
              <Image src={developHifiPermission} alt="Permission screen" />
              <Image src={developHifiHome} alt="Home screen" />
              <Image src={developHifiNearby} alt="Nearby screen" />
              <div className="hidden md:block" />
              <Image src={developHifiSearch} alt="Stop search screen" />
              <Image src={developHifiStop1} alt="Stop screen" />
              <Image src={developHifiStop2} alt="Stop screen" />
              <Image src={developHifiLines} alt="Lines search screen" />
              <Image src={developHifiLine1} alt="Line screen" />
              <Image src={developHifiLine2} alt="Line screen" />
            </div>
          </div>
        </section>
      </div>

      <div
        id="deliver"
        className="mt-32 flex h-[150px] w-full items-center justify-center bg-eggplant-light md:mt-96"
      >
        <h2 className="text-36 font-bold">Deliver</h2>
      </div>

      <div className="flex w-full flex-col items-center px-32 md:px-124">
        <section className="flex w-full max-w-1440 flex-col gap-16 pt-24 md:pt-72">
          <h3 className="text-center text-32 font-bold">
            High Fidelity Prototype
          </h3>
          <p>
            After making my mockup, I made a high fidelity clickable prototype.
            The main point of this clickable prototype was to be able to do more
            usability testing to be able to move onto the final iteration for
            this design.
          </p>

          <div className="hidden w-full justify-center py-48 md:flex">
            <iframe
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1BBToDnqUO5JLCVLQOtVm1%2FC.U.B.S---Public%3Fpage-id%3D12%253A3667%26type%3Ddesign%26node-id%3D12-4179%26viewport%3D1107%252C835%252C0.34%26scaling%3Dscale-down%26starting-point-node-id%3D12%253A4179"
              className="h-[450px] w-[800px]"
              allowFullScreen
            />
          </div>

          <div className="flex w-full justify-center">
            <motion.a
              className="my-32 flex h-[100px] w-fit items-center justify-center rounded-full bg-eggplant-medium px-32 text-center text-32 font-bold text-white sm:mb-72"
              whileHover={{ scale: 1.05 }}
              href="https://www.figma.com/proto/1BBToDnqUO5JLCVLQOtVm1/C.U.B.S---Public?page-id=12%3A3667&type=design&node-id=12-4179&viewport=1107%2C835%2C0.34&scaling=scale-down&starting-point-node-id=12%3A4179"
            >
              High Fidelity Prototype
            </motion.a>
          </div>
        </section>

        <section className="flex w-full max-w-1440 flex-col gap-16 pt-24 md:pt-72">
          <h3 className="text-center text-32 font-bold">Usability Test</h3>
          <p>
            With my high fidelity prototype, I completely another round of
            usability testing. I had five respondents to this round of testing.
            Overall, this round of usability testing was much more successful,
            with all the tasks being done with 100% success. However, there was
            feedback that was received about the map conflicting with the bus
            stop icons and being too busy in general.
          </p>
          <div className="flex w-full justify-center py-48">
            <Image
              src={devilverUsabilityTest}
              alt="Usability test"
              className="w-full max-w-[675px]"
            />
          </div>
        </section>

        <section className="flex w-full max-w-1440 flex-col gap-16 pt-24 md:pt-72">
          <h3 className="text-center text-32 font-bold">Iteration</h3>
          <p>
            With the feedback from the usability testing, I made a few changes
            to my prototypes. These changes were mostly focused on map
            functionality on the pages that included it. I changed the source of
            my maps, which allowed me to customize and limit the icons that were
            included on the map.
          </p>
          <div className="flex w-full justify-center py-48">
            <div className="flex max-w-[560px] grid-cols-2 flex-col gap-16 md:grid md:gap-124">
              <Image src={deliverLine1} alt="Sign in screen" />
              <Image src={deliverLine2} alt="Sign up screen" />
            </div>
          </div>
        </section>

        <section className="flex w-full max-w-1440 flex-col gap-16 pt-24 md:pt-72">
          <h3 className="text-center text-32 font-bold">Final Prototype</h3>
          <p>
            After making my mockup, I made a high fidelity clickable prototype.
            The main point of this clickable prototype was to be able to do more
            usability testing to be able to move onto the final iteration for
            this design.
          </p>

          <div className="hidden w-full justify-center py-48 md:flex">
            <iframe
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1BBToDnqUO5JLCVLQOtVm1%2FC.U.B.S---Public%3Fpage-id%3D83%253A3227%26type%3Ddesign%26node-id%3D83-3635%26viewport%3D1420%252C539%252C0.32%26scaling%3Dscale-down%26starting-point-node-id%3D83%253A3635"
              className="h-[450px] w-[800px]"
              allowFullScreen
            />
          </div>

          <div className="flex w-full justify-center">
            <motion.a
              className="my-32 flex h-[100px] w-fit items-center justify-center rounded-full bg-eggplant-medium px-32 text-center text-32 font-bold text-white sm:mb-72"
              whileHover={{ scale: 1.05 }}
              href="https://www.figma.com/proto/1BBToDnqUO5JLCVLQOtVm1/C.U.B.S---Public?page-id=83%3A3227&type=design&node-id=83-3635&viewport=1420%2C539%2C0.32&scaling=scale-down&starting-point-node-id=83%3A3635"
            >
              Final Prototype
            </motion.a>
          </div>
        </section>
      </div>

      <div className="mt-32 flex w-full justify-center bg-eggplant-light px-32 py-48 md:mt-96 md:px-124">
        <div className="w-full max-w-1440">
          <h2 className="text-36 font-bold">Final Thoughts</h2>
          <p>
            With the final prototype created, I believe I have met the goals
            that were outlined in the beginning of the design process. I
            designed a mobile app for C.U.B.S. that provides the necessary
            features for navigating Chicago&apos;s public bus transit system. I
            also designed branding materials that aligns with the value of this
            service. If I had more time, I would dive deeper in developing some
            of those nice-to-have features that would increase the
            competitiveness of the app.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
