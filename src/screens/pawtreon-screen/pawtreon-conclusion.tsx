import Link from 'next/link';
import Image from 'next/image';
import { Section } from 'components/section';
import { ImageCircle } from 'modules/ui/image-circle';
import cubsPreview from 'core/cubs.png';
import triCountyPreview from 'core/tri-county.png';

export const PawtreonConclusion = () => {
  return (
    <>
      <div className="w-full bg-eggplant-lighter pb-48">
        <Section heading="Final Thoughts">
          <p>
            In conclusion, the completion of the UX/UI design process for
            Pawtreon has laid the foundation for an impactful web application
            aimed at increasing donations to animal shelters. While the current
            version of the application is not live, there are exciting plans for
            a version 2. This next iteration will introduce compelling features,
            including the ability for users to view adoptable animals from each
            shelter, sponsor adoption or care fees for specific animals, receive
            notifications from shelters about sponsored animal adoptions, and
            export the yearly donation report for donors&apos; convenience.
          </p>
          <p>
            These enhancements align with the goal of creating a more engaging
            and personalized donation experience. By providing access to
            adoptable animals, users can develop a stronger emotional connection
            with the cause. Sponsoring specific animals allows for direct
            support and involvement, while notifications about adoptions
            celebrate the impact of donors&apos; contributions. The ability to
            export the yearly donation report empowers donors with convenient
            access to their contribution history.
          </p>
          <p>
            With the planned version 2, Pawtreon aims to further inspire and
            engage users, strengthening the bond between animal shelters and the
            generous donors who support them. By implementing these features,
            Pawtreon will provide an even more rewarding and impactful platform
            for individuals passionate about animal welfare.
          </p>
        </Section>
      </div>

      <div className="flex w-full flex-col items-center justify-center pb-72">
        <h3 className="pb-36 pt-72 text-24 font-bold">View Other Projects</h3>

        <div className="flex flex-wrap gap-124">
          <div className="flex flex-col items-center gap-24">
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

          <div className="flex flex-col items-center gap-24">
            <ImageCircle color="eggplant-lighter" size="small">
              <Link href="/study/tri-county">
                <Image
                  src={triCountyPreview}
                  alt="Tri County Appliance Repair"
                  className="w-[100px] object-contain"
                />
              </Link>
            </ImageCircle>
            <h4 className="text-24 font-bold">Tri County Appliance Repair</h4>
          </div>
        </div>
      </div>
    </>
  );
};
