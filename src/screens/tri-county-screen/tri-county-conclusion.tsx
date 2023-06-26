import Link from 'next/link';
import Image from 'next/image';
import { Section } from 'components/section';
import { ImageCircle } from 'modules/ui/image-circle';
import cubsPreview from 'core/cubs.png';

export const TriCountyConclusion = () => {
  return (
    <>
      <div className="w-full bg-eggplant-lighter pb-48">
        <Section heading="Final Thoughts">
          <p>
            In conclusion, the Tri County Appliance Repair website design
            achieved the client&apos;s expectations and addressed the identified
            user needs through a user-centered design approach. Extensive
            research and user feedback guided the creation of a seamless and
            intuitive website for customers seeking appliance repairs. The final
            product, developed using Webflow, effectively communicates essential
            information and maintains a cohesive design aligned with the
            company&apos;s branding and local aesthetics.
          </p>
          <p>
            Looking ahead, future plans include a version 2 of the website that
            will enable users to schedule their service online, enhancing
            convenience and streamlining the customer journey. Additionally, a
            scheduling feature will be implemented for the client&apos;s
            internal use, optimizing operational processes. Overall, the Tri
            County Appliance Repair website serves as a valuable tool,
            reflecting professionalism and reliability, while ongoing
            improvements ensure its continued success in meeting user needs and
            supporting the client&apos;s business objectives.
          </p>
        </Section>
      </div>

      <div className="flex w-full flex-col items-center justify-center pb-72">
        <h3 className="pb-36 pt-72 text-24 font-bold">View Other Projects</h3>

        <ImageCircle color="eggplant-lighter" size="small">
          <Link href="/study/cubs">
            <Image
              src={cubsPreview}
              alt="CUBS"
              className="w-[100px] object-contain"
            />
          </Link>
        </ImageCircle>

        <h4 className="text-24 font-bold">C.U.B.S.</h4>
      </div>
    </>
  );
};
