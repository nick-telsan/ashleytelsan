import { Body } from 'modules/ui/body';
import portrait from './portrait.png';
import kitties from './kitties.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const AboutScreen = () => {
  return (
    <Body>
      <div className="flex flex-wrap items-center justify-center gap-16 pt-32 sm:pt-124 md:gap-124">
        <div>
          <Image src={portrait} alt="It's me!" />
        </div>
        <div className="flex w-full max-w-[600px] flex-col gap-16">
          <h2 className="text-36 font-bold">A little about me...</h2>
          <p>
            Hi, I&apos;m Ashley Telsan, a UX/UI designer with a focus on
            creating seamless user experiences. I started my journey in design
            after spending nearly a decade in customer service management, where
            I developed excellent empathy and problem-solving skills for my
            customers. I decided to make a career change, and was drawn to UX/UI
            Design because of my interest in creative based hobbies.
          </p>
          <p>
            After enrolling in a UX/UI bootcamp, I gained a strong foundation in
            the principles of user-centered design and design thinking. I also
            have some experience with HTML and CSS, which helps me effectively
            collaborate with developers.
          </p>
          <p>
            My goal as a designer is to create accessible and inclusive
            experiences for all users. I believe that design should cater to the
            needs of all people, regardless of their abilities or disabilities.
            I aim to create designs that are intuitive, engaging, and easy to
            use, ensuring that everyone has equal access to the digital world.
            With my customer service background, I approach design with empathy
            and put the needs of the user first. I strive to design interfaces
            that not only look great but also function seamlessly and provide an
            optimal user experience.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-16 pt-32 sm:pt-124 md:gap-124">
        <div className="md:order-2">
          <Image src={kitties} alt="All the cats" />
        </div>
        <div className="flex w-full max-w-[600px] flex-col gap-16 md:order-1 1440:max-w-[480px]">
          <h2 className="text-36 font-bold">When I&apos;m not at my desk...</h2>
          <p>
            When I&apos;m not at my desk working as a designer, you can find me
            having coffee with my husband, and spending time with our seven cats
            - Mort, Taswell, Vax, Vex, Gin, Drago and Melora.
          </p>
          <p>
            I play a lot of Dungeons and Dragons and enjoy all the creative
            aspects surrounding the game. I make custom dice, paint miniatures
            and make art for our characters. In my spare-spare time, I also
            enjoy gardening, baking and reading.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-16 pt-32 sm:pt-124">
        <h2 className="text-36 font-bold">Thanks for stopping by!</h2>
        <p>
          Do you have a product idea, want to discuss a project, or need a
          designer? Email me at{' '}
          <a href="mailto:me@ashleytelsan.com">me@ashleytelsan.com</a>
        </p>
        <motion.a
          id="resume"
          whileHover={{ scale: 1.05 }}
          className="my-32 flex h-[100px] w-[200px] items-center justify-center rounded-full bg-green-medium text-32 font-bold text-white sm:mb-72"
          href="/resume.pdf"
        >
          Resume
        </motion.a>
      </div>
    </Body>
  );
};
