import { ImageCircle } from 'modules/ui/image-circle';
import { Hero } from './hero';
import { Body } from 'modules/ui/body';
import Image from 'next/image';
import pawtreonPreview from './pawtreon-preview.png';
import triCountyPreview from './tri-county-preview.png';
import Link from 'next/link';

export const HomeScreen = () => {
  return (
    <div className="w-full">
      <Hero />
      <Body>
        <div className="pb-[64px] pt-[84px]">
          <div className="flex flex-wrap items-center justify-center gap-36 sm:gap-[134px]">
            <ImageCircle color="green-light">
              <Link href="/study/pawtreon">
                <Image
                  src={pawtreonPreview}
                  alt="Pawtreon"
                  className="w-[100px] object-contain md:w-[200px]"
                />
              </Link>
            </ImageCircle>
            <div className="flex w-full max-w-[480px] items-center">
              <div className="flex flex-col gap-16">
                <Link href="/study/pawtreon" className="text-36 font-bold">
                  Pawtreon
                </Link>
                <p>
                  Pawtreon is an application dedicated to supporting animal
                  shelters by providing a user-friendly platform for donations,
                  personalized incentives, and fostering a sense of community
                  among animal lovers, making a positive impact on animal
                  welfare.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-[134px] pt-[84px]">
            <div className="md:order-2">
              <ImageCircle color="eggplant-light">
                <Link href="/study/tri-county">
                  <Image
                    src={triCountyPreview}
                    alt="Tri County Appliance Repair"
                    className="w-[100px] object-contain md:w-[200px]"
                  />
                </Link>
              </ImageCircle>
            </div>
            <div className="flex w-full max-w-[480px] items-center md:order-1">
              <div className="flex flex-col gap-16">
                <Link href="/study/tri-county" className="text-36 font-bold">
                  Tri-County Appliance Repair
                </Link>
                <p>
                  A website designed to streamline the repair request process
                  for customers while providing comprehensive information about
                  the company. With a user-friendly interface and intuitive
                  features, customers can easily submit repair requests online
                  and access valuable information, making their experience
                  seamless and efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Body>
    </div>
  );
};
