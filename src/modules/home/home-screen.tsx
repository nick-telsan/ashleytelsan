import { ImageCircle } from 'modules/ui/image-circle';
import { Hero } from './hero';
import { Body } from 'modules/ui/body';
import Image from 'next/image';
import cubsPreview from './cubs-preview.png';
import Link from 'next/link';

export const HomeScreen = () => {
  return (
    <div className="w-full">
      <Hero />
      <Body>
        <div className="pb-[64px] pt-[84px]">
          <div className="flex flex-wrap items-center justify-center gap-36 sm:gap-[134px]">
            <ImageCircle color="green-light">
              <Link href="/study/cubs">
                <Image
                  src={cubsPreview}
                  alt="CUBS"
                  className="w-[100px] object-contain md:w-[200px]"
                />
              </Link>
            </ImageCircle>
            <div className="flex w-full max-w-[480px] items-center">
              <div className="flex flex-col gap-16">
                <Link href="/study/cubs" className="text-36 font-bold">
                  C.U.B.S.
                </Link>
                <p>
                  A mobile app for Chicago&apos;s public bus transit system that
                  provides riders with real-time information on when the next
                  bus will arrive at each stop and how much time they have to
                  get there.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-wrap gap-[134px] pt-[84px]">
            <div className="md:order-2">
              <ImageCircle color="eggplant-light">
                <Image
                  src="/cubs-preview.png"
                  alt="CUBS"
                  width={671}
                  height={1350}
                />
              </ImageCircle>
            </div>
            <div className="flex w-full max-w-[480px] items-center md:order-1">
              <div className="flex flex-col gap-16">
                <h2 className="text-36 font-bold">Project Title</h2>
                <p>
                  Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  className aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className="flex flex-wrap gap-[134px] pt-[84px]">
            <ImageCircle color="green-medium">
              <Image
                src="/cubs-preview.png"
                alt="CUBS"
                width={671}
                height={1350}
              />
            </ImageCircle>
            <div className="flex w-full max-w-[480px] items-center">
              <div className="flex flex-col gap-16">
                <h2 className="text-36 font-bold">Project Title</h2>
                <p>
                  Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  className aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </Body>
    </div>
  );
};
